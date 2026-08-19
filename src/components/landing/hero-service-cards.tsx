import type { ReactNode } from "react";
import {
  ArrowUpRight,
  Bus,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Sun,
  Train,
  TrainFront,
  type LucideIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import type { CetRegion } from "@/lib/cet-traffic";
import { getLocalNow, type LocalNowResult } from "@/lib/local-now";

const SP_LAT = -23.5505;
const SP_LON = -46.6333;
const TSE_LOCAL_VOTACAO =
  "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/";
const CET_PAGE =
  "https://www.cetsp.com.br/transito-agora/transito-nas-principais-vias.aspx";
const ARTESP_TRANSIT_PAGE = "https://ccm.artesp.sp.gov.br/metroferroviario/status-linhas/";
const WEATHER_PAGE = "https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";
const LOCAL_REFRESH_MS = 2 * 60 * 1000;
const ZONE_ORDER = ["Norte", "Oeste", "Centro", "Leste", "Sul"] as const;

function zoneLabel(name: string) {
  if (name === "Centro") return "Centro";
  return `Zona ${name}`;
}

function weatherLabel(code: number): { label: string; Icon: LucideIcon } {
  if (code === 0) return { label: "Céu limpo", Icon: Sun };
  if (code <= 2) return { label: "Parcialmente nublado", Icon: CloudSun };
  if (code === 3) return { label: "Nublado", Icon: Cloud };
  if (code === 45 || code === 48) return { label: "Neblina", Icon: CloudFog };
  if (code >= 51 && code <= 67) return { label: "Chuva", Icon: CloudRain };
  if (code >= 71 && code <= 77) return { label: "Neve", Icon: CloudSnow };
  if (code >= 80 && code <= 82) return { label: "Pancadas de chuva", Icon: CloudRain };
  if (code >= 95) return { label: "Tempestade", Icon: CloudLightning };
  return { label: "Tempo instável", Icon: Cloud };
}

function statusTone(status: string) {
  if (/normal/i.test(status)) {
    return { ink: "text-[var(--blue-primary)]" };
  }
  if (/paralis/i.test(status)) {
    return { ink: "text-[var(--blue-dark)]" };
  }
  return { ink: "text-[var(--blue-dark)]" };
}

function CityPass({
  href,
  accent,
  kicker,
  title,
  live,
  children,
}: {
  href: string;
  accent: string;
  kicker: string;
  title: string;
  live?: boolean;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full min-h-[9.2rem] overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-[var(--blue-primary)] hover:shadow-md"
    >
      <span className="w-1.5 shrink-0" style={{ background: accent }} aria-hidden="true" />
      <div className="flex min-w-0 flex-1 flex-col px-3.5 py-3">
        <div className="mb-2.5 flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-[var(--yellow-primary)]">
              {live ? "Ao vivo · " : ""}
              {kicker}
            </p>
            <h3
              className="truncate text-sm font-black leading-tight"
              style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
            >
              {title}
            </h3>
          </div>
          <span
            className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-md text-white transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            style={{ backgroundColor: "var(--blue-primary)" }}
          >
            <ArrowUpRight className="size-3.5" strokeWidth={2.6} />
          </span>
        </div>
        {children}
      </div>
    </a>
  );
}

function LicensePlate({ plates, hours }: { plates: string; hours: string }) {
  if (!plates) {
    return (
      <div className="text-center">
        <p className="text-[11px] font-bold tracking-wide text-[var(--blue-primary)]">Sem rodízio hoje</p>
      </div>
    );
  }

  return (
    <div className="flex w-[7.5rem] shrink-0 flex-col items-center">
      <div className="w-[7.5rem] overflow-hidden rounded-[4px] border border-[var(--blue-primary)] bg-white">
        <div className="flex h-2.5 items-center justify-between bg-[var(--blue-primary)] px-1.5 text-[6px] font-black tracking-[0.16em] text-white">
          <span>BRASIL</span>
          <span>SP</span>
        </div>
        <p
          className="whitespace-nowrap py-0.5 text-center text-[11px] font-black leading-none tracking-[0.22em] text-[#111]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {plates}
        </p>
      </div>
      {hours ? (
        <p className="mt-0.5 whitespace-nowrap text-[9px] font-bold text-gray-600">{hours}</p>
      ) : null}
    </div>
  );
}

function ZoneMeters({ regions }: { regions: CetRegion[] }) {
  const byName = new Map(regions.map((region) => [region.name, region]));

  return (
    <div className="grid grid-cols-5 gap-1">
      {ZONE_ORDER.map((name) => {
        const region = byName.get(name);
        const percent = region?.percent ?? 0;
        const km = region?.km ?? 0;
        const label = zoneLabel(name);
        return (
          <div key={name} className="min-w-0 text-center" title={`${label}: ${km} km (${percent}%)`}>
            <div className="flex h-7 items-end overflow-hidden rounded-sm bg-black/5">
              <div
                className="w-full rounded-sm bg-[var(--blue-primary)]"
                style={{ height: `${Math.max(12, Math.min(100, percent))}%` }}
              />
            </div>
            <p className="mt-0.5 truncate text-[8px] font-black leading-none text-[var(--blue-primary)]">
              {label}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function VotingPlaceCard() {
  return (
    <CityPass href={TSE_LOCAL_VOTACAO} accent="var(--yellow-primary)" kicker="Eleições 2026" title="Meu local de votação">
      <p className="mb-2 text-[11px] font-semibold leading-snug text-gray-700">
        Ache sua seção no TSE com um destes dados:
      </p>
      <div className="grid grid-cols-3 gap-1">
        {["Título", "CPF", "Nome"].map((field) => (
          <span
            key={field}
            className="rounded-md border border-[var(--blue-primary)]/30 bg-white px-1 py-1.5 text-center text-[10px] font-black uppercase tracking-wide text-[var(--blue-primary)]"
          >
            {field}
          </span>
        ))}
      </div>
    </CityPass>
  );
}

function TransportCard({ data, loading }: { data?: LocalNowResult; loading: boolean }) {
  const artesp = data?.artesp;
  const modes = artesp?.live ? artesp.modes : [];
  const lineColor: Record<string, string> = {
    Metrô: "#0057A8",
    Trens: "#EE3E34",
    "Ônibus": "#E3B505",
  };
  const lineIcon: Record<string, LucideIcon> = {
    Metrô: TrainFront,
    Trens: Train,
    "Ônibus": Bus,
  };

  return (
    <CityPass
      href={ARTESP_TRANSIT_PAGE}
      accent="var(--blue-primary)"
      kicker="ARTESP ao vivo"
      title="Transporte público"
      live={Boolean(artesp?.live)}
    >
      {modes.length > 0 ? (
        <ul className="space-y-1.5">
          {modes.map((item) => {
            const Icon = lineIcon[item.mode] ?? Bus;
            const tone = statusTone(item.status);
            return (
              <li
                key={item.mode}
                className="flex min-w-0 items-center gap-2"
              >
                <span
                  className="h-4 w-[3px] shrink-0 rounded-full"
                  style={{ background: lineColor[item.mode] ?? "var(--blue-primary)" }}
                />
                <Icon className="size-3.5 shrink-0" style={{ color: lineColor[item.mode] }} aria-hidden="true" />
                <p className={`min-w-0 flex-1 truncate text-[11px] font-bold ${tone.ink}`}>
                  {item.status} · {item.mode}
                  {item.note ? ` · ${item.note}` : ""}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-[11px] font-semibold text-gray-600">
          {loading ? "Atualizando metrô, trens e ônibus…" : "Abra o painel da ARTESP para ver o status."}
        </p>
      )}
    </CityPass>
  );
}

function TrafficCard({ data, loading }: { data?: LocalNowResult; loading: boolean }) {
  const traffic = data?.traffic;
  const live = Boolean(traffic?.live && traffic.regions.length);
  const worst = traffic?.regions.slice().sort((a, b) => b.percent - a.percent)[0];

  return (
    <CityPass href={CET_PAGE} accent="var(--yellow-primary)" kicker="CET ao vivo" title="Trânsito agora" live={live}>
      {live && traffic ? (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[22px] font-black leading-none" style={{ color: "var(--blue-primary)" }}>
              {traffic.totalKm}
              <span className="ml-1 text-[10px] font-bold tracking-wide text-gray-500">km lentos</span>
            </p>
            <LicensePlate plates={traffic.rodizioPlates} hours={traffic.rodizioHours} />
          </div>
          <ZoneMeters regions={traffic.regions} />
          {worst ? (
            <p className="truncate text-[10px] font-bold text-gray-600">
              Maior lentidão: {zoneLabel(worst.name)} {worst.percent}%
            </p>
          ) : null}
        </div>
      ) : (
        <div className="space-y-1.5">
          <LicensePlate plates={traffic?.rodizioPlates ?? ""} hours={traffic?.rodizioHours ?? ""} />
          <p className="text-[11px] font-semibold text-gray-600">
            {loading ? "Atualizando o trânsito em São Paulo…" : "Abra o mapa da CET para ver as zonas."}
          </p>
        </div>
      )}
    </CityPass>
  );
}

function WeatherCard({ data, loading }: { data?: LocalNowResult; loading: boolean }) {
  const weather = data?.weather;
  const info = weather ? weatherLabel(weather.code) : { label: "Carregando…", Icon: CloudSun };
  const WeatherIcon = info.Icon;
  const range = weather ? Math.max(1, weather.max - weather.min) : 1;
  const marker = weather ? Math.min(100, Math.max(0, ((weather.temp - weather.min) / range) * 100)) : 0;

  return (
    <CityPass href={WEATHER_PAGE} accent="var(--blue-primary)" kicker="São Paulo agora" title="Previsão do tempo" live={Boolean(weather)}>
      {weather ? (
        <div className="space-y-2.5">
          <div className="flex items-center gap-2.5">
            <span className="inline-flex size-8 items-center justify-center rounded-md bg-[var(--blue-primary)] text-white">
              <WeatherIcon className="size-4" strokeWidth={2.4} />
            </span>
            <p className="text-[22px] font-black leading-none" style={{ color: "var(--blue-primary)" }}>
              {weather.temp}°
              <span className="ml-1.5 text-[11px] font-bold text-gray-600">{info.label}</span>
            </p>
          </div>
          <div>
            <div className="relative h-1.5 rounded-full bg-gradient-to-r from-[var(--blue-primary)] to-[var(--yellow-primary)]">
              <span
                className="absolute top-1/2 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-[var(--blue-primary)]"
                style={{ left: `${marker}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-[10px] font-bold text-gray-500">
              <span>Mín. {weather.min}°</span>
              <span>Máx. {weather.max}°</span>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-[11px] font-semibold text-gray-600">
          {loading ? "Atualizando o tempo em São Paulo…" : "Abra a previsão completa de São Paulo."}
        </p>
      )}
    </CityPass>
  );
}

export function HeroServiceCards() {
  const localQuery = useQuery({
    queryKey: ["local-now", "sao-paulo"],
    queryFn: () => getLocalNow({ data: { lat: SP_LAT, lon: SP_LON } }),
    staleTime: LOCAL_REFRESH_MS,
    refetchInterval: LOCAL_REFRESH_MS,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  const loading = localQuery.isLoading;
  const data = localQuery.data;

  return (
    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <VotingPlaceCard />
      <TransportCard data={data} loading={loading} />
      <TrafficCard data={data} loading={loading} />
      <WeatherCard data={data} loading={loading} />
    </div>
  );
}
