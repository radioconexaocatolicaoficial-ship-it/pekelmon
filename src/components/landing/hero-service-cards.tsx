import type { ReactNode } from "react";
import {
  Bus,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Fuel,
  IdCard,
  LineChart,
  MapPin,
  Sun,
  Train,
  TrainFront,
  type LucideIcon,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";

import type { CetRegion } from "@/lib/cet-traffic";
import { getLocalNow, type LocalNowResult } from "@/lib/local-now";
import { getMarketFuel, type FuelPrices, type MarketQuote } from "@/lib/market-fuel";
import { cn } from "@/lib/utils";

const SP_LAT = -23.5505;
const SP_LON = -46.6333;
const TSE_LOCAL_VOTACAO =
  "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/";
const CET_PAGE =
  "https://www.cetsp.com.br/transito-agora/transito-nas-principais-vias.aspx";
const ARTESP_TRANSIT_PAGE = "https://ccm.artesp.sp.gov.br/metroferroviario/status-linhas/";
const WEATHER_PAGE = "https://www.climatempo.com.br/previsao-do-tempo/cidade/558/saopaulo-sp";
const MARKET_PAGE = "https://www.infomoney.com.br/ferramentas/cambio/";
const FUEL_PAGE = "https://precos.petrobras.com.br/";
const LOCAL_REFRESH_MS = 2 * 60 * 1000;
const ZONE_ORDER = ["Norte", "Oeste", "Centro", "Leste", "Sul"] as const;

function zoneLabel(name: string) {
  if (name === "Centro") return "Centro";
  return `Zona ${name}`;
}

function weatherLabel(code: number): { label: string; Icon: LucideIcon } {
  if (code === 0) return { label: "Céu limpo", Icon: Sun };
  if (code === 1) return { label: "Principalmente limpo", Icon: CloudSun };
  if (code <= 2) return { label: "Parcialmente nublado", Icon: CloudSun };
  if (code === 3) return { label: "Nublado", Icon: Cloud };
  if (code === 45 || code === 48) return { label: "Neblina", Icon: CloudFog };
  if (code >= 51 && code <= 67) return { label: "Chuva", Icon: CloudRain };
  if (code >= 71 && code <= 77) return { label: "Neve", Icon: CloudSnow };
  if (code >= 80 && code <= 82) return { label: "Pancadas de chuva", Icon: CloudRain };
  if (code >= 95) return { label: "Tempestade", Icon: CloudLightning };
  return { label: "Tempo instável", Icon: Cloud };
}

function PulseCard({
  href,
  icon,
  title,
  children,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col rounded-xl border border-[#d7e4f2] bg-white px-3.5 py-2 shadow-[0_6px_16px_rgba(30,91,184,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(30,91,184,0.12)]"
    >
      <div className="mb-1 flex items-center gap-1.5">
        {icon}
        <h3
          className="text-[11px] font-bold uppercase tracking-[0.08em]"
          style={{ color: "var(--blue-primary)" }}
        >
          {title}
        </h3>
      </div>
      <div>{children}</div>
      <span className="mt-1.5 text-[11px] font-semibold" style={{ color: "var(--blue-primary)" }}>
        Ver detalhes →
      </span>
    </a>
  );
}

function VotingCard() {
  return (
    <PulseCard
      href={TSE_LOCAL_VOTACAO}
      title="Votação"
      icon={<IdCard className="size-4 text-sky-600" aria-hidden="true" />}
    >
      <p className="mb-1 text-[12px] font-bold" style={{ color: "var(--blue-primary)" }}>
        Meu local de votação
      </p>
      <ul className="flex flex-wrap gap-1">
        {["Título", "CPF", "Nome"].map((field) => (
          <li
            key={field}
            className="rounded-md border border-[#d7e4f2] px-2 py-0.5 text-[11px] font-semibold"
            style={{ color: "var(--blue-primary)" }}
          >
            {field}
          </li>
        ))}
      </ul>
    </PulseCard>
  );
}

function TransportCard({ data, loading }: { data?: LocalNowResult; loading: boolean }) {
  const modes = data?.artesp?.live ? data.artesp.modes : [];
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
    <PulseCard
      href={ARTESP_TRANSIT_PAGE}
      title="Transporte"
      icon={<TrainFront className="size-4 text-sky-600" aria-hidden="true" />}
    >
      {modes.length > 0 ? (
        <ul className="space-y-0.5">
          {modes.map((item) => {
            const Icon = lineIcon[item.mode] ?? Bus;
            return (
              <li key={item.mode} className="flex items-center gap-2">
                <Icon
                  className="size-3.5 shrink-0"
                  style={{ color: lineColor[item.mode] }}
                  aria-hidden="true"
                />
                <p className="shrink-0 text-[13px] font-semibold" style={{ color: "var(--blue-primary)" }}>
                  {item.mode}
                </p>
                <span className="min-w-0 flex-1 text-right text-[11px] font-bold leading-snug text-gray-500">
                  {item.status}
                </span>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-[11px] font-semibold text-gray-500">
          {loading ? "Atualizando metrô, trens e ônibus…" : "Abra o painel da ARTESP para ver o status."}
        </p>
      )}
    </PulseCard>
  );
}

function zoneTone(percent: number) {
  if (percent >= 40) return "text-amber-500";
  if (percent >= 20) return "text-amber-400";
  return "text-emerald-600";
}

function TrafficCard({ data, loading }: { data?: LocalNowResult; loading: boolean }) {
  const traffic = data?.traffic;
  const live = Boolean(traffic?.live && traffic.regions.length);
  const byName = new Map((traffic?.regions ?? []).map((region: CetRegion) => [region.name, region]));

  return (
    <PulseCard
      href={CET_PAGE}
      title="Trânsito"
      icon={<MapPin className="size-4 text-sky-600" aria-hidden="true" />}
    >
      {live && traffic ? (
        <div>
          <div className="mb-1 flex items-baseline justify-between gap-2">
            <p className="text-[12px] font-bold" style={{ color: "var(--blue-primary)" }}>
              São Paulo · {traffic.totalKm} km
            </p>
            <p className="text-[10px] text-gray-500">
              {traffic.rodizioPlates ? `Rodízio ${traffic.rodizioPlates}` : "Sem rodízio"}
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-3 gap-y-0.5">
            {ZONE_ORDER.map((name) => {
              const region = byName.get(name);
              const percent = region?.percent ?? 0;
              return (
                <li key={name} className="flex items-center justify-between gap-1">
                  <span className="text-[11px] font-semibold" style={{ color: "var(--blue-primary)" }}>
                    {zoneLabel(name)}
                  </span>
                  <span className={`text-[11px] font-bold ${zoneTone(percent)}`}>
                    {percent}%
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <p className="text-[11px] font-semibold text-gray-500">
          {loading ? "Atualizando o trânsito em São Paulo…" : "Abra o mapa da CET para ver as zonas."}
        </p>
      )}
    </PulseCard>
  );
}

function WeatherCard({ data, loading }: { data?: LocalNowResult; loading: boolean }) {
  const weather = data?.weather;
  const info = weather ? weatherLabel(weather.code) : { label: "Carregando…", Icon: CloudSun };
  const WeatherIcon = info.Icon;

  return (
    <PulseCard
      href={WEATHER_PAGE}
      title="Tempo"
      icon={<CloudSun className="size-4 text-sky-500" aria-hidden="true" />}
    >
      {weather ? (
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[12px] font-bold leading-tight" style={{ color: "var(--blue-primary)" }}>
              São Paulo
            </p>
            <p className="text-[11px] leading-snug text-gray-500">
              {info.label} · {weather.min}°/{weather.max}°
            </p>
            <p className="mt-1 inline-flex items-center gap-1 text-[11px] text-gray-500">
              <WeatherIcon className="size-3.5 text-sky-500" aria-hidden="true" />
              Umidade {weather.humidity}%
            </p>
          </div>
          <p className="text-[22px] font-black leading-none" style={{ color: "var(--blue-primary)" }}>
            {weather.temp}°
          </p>
        </div>
      ) : (
        <p className="text-[11px] font-semibold text-gray-500">
          {loading ? "Atualizando o tempo em São Paulo…" : "Abra a previsão completa de São Paulo."}
        </p>
      )}
    </PulseCard>
  );
}

function MarketCard({ market, loading }: { market: MarketQuote[]; loading: boolean }) {
  const icons = [
    { bg: "#22c55e", label: "$", color: "#fff" },
    { bg: "var(--blue-primary)", label: "€", color: "#fff" },
    { bg: "var(--yellow-primary)", label: "↗", color: "var(--blue-primary)" },
  ];

  return (
    <PulseCard
      href={MARKET_PAGE}
      title="Mercado"
      icon={<LineChart className="size-4 text-sky-600" aria-hidden="true" />}
    >
      {market.length > 0 ? (
        <ul className="space-y-1">
          {market.map((item, index) => (
            <li key={item.name} className="flex items-center gap-1.5">
              <span
                className="inline-flex size-4 shrink-0 items-center justify-center rounded-full text-[9px] font-black"
                style={{ background: icons[index]?.bg, color: icons[index]?.color }}
              >
                {icons[index]?.label}
              </span>
              <p className="shrink-0 text-[12px] font-semibold" style={{ color: "var(--blue-primary)" }}>
                {item.name}
              </p>
              <p className="ml-auto shrink-0 text-[12px] font-black" style={{ color: "var(--blue-primary)" }}>
                {item.value}
              </p>
              <p className="w-11 shrink-0 text-right text-[11px] text-gray-500">{item.change}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[11px] font-semibold text-gray-500">
          {loading ? "Atualizando cotações…" : "Abra o mercado para ver dólar, euro e bolsa."}
        </p>
      )}
    </PulseCard>
  );
}

function FuelCard({ fuel }: { fuel: FuelPrices }) {
  const rows = [
    ["Gasolina", fuel.saoPaulo.gasolina, fuel.brasil.gasolina],
    ["Aditivada", fuel.saoPaulo.aditivada, fuel.brasil.aditivada],
    ["Etanol", fuel.saoPaulo.etanol, fuel.brasil.etanol],
  ] as const;

  return (
    <PulseCard
      href={FUEL_PAGE}
      title="Combustível"
      icon={<Fuel className="size-4 text-amber-500" aria-hidden="true" />}
    >
      <div className="grid grid-cols-2 gap-2">
        {(["São Paulo", "Brasil"] as const).map((title, col) => (
          <div key={title}>
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-[var(--yellow-dark)]">
              {title}
            </p>
            <ul className="space-y-1">
              {rows.map((row) => (
                <li key={row[0]} className="flex items-baseline justify-between gap-1">
                  <span className="text-[11px] text-gray-500">{row[0]}</span>
                  <span className="whitespace-nowrap text-[12px] font-black" style={{ color: "var(--blue-primary)" }}>
                    {row[col + 1]}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </PulseCard>
  );
}

export function HeroServiceCards({ className }: { className?: string }) {
  const localQuery = useQuery({
    queryKey: ["local-now", "sao-paulo"],
    queryFn: () => getLocalNow({ data: { lat: SP_LAT, lon: SP_LON } }),
    staleTime: LOCAL_REFRESH_MS,
    refetchInterval: LOCAL_REFRESH_MS,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  const marketQuery = useQuery({
    queryKey: ["market-fuel"],
    queryFn: () => getMarketFuel(),
    staleTime: LOCAL_REFRESH_MS,
    refetchInterval: LOCAL_REFRESH_MS,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
  });

  const loading = localQuery.isLoading;
  const data = localQuery.data;
  const market = marketQuery.data?.market ?? [];
  const fuel = marketQuery.data?.fuel ?? {
    saoPaulo: { gasolina: "—", aditivada: "—", etanol: "—" },
    brasil: { gasolina: "—", aditivada: "—", etanol: "—" },
  };

  return (
    <div
      className={cn(
        "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      <VotingCard />
      <TransportCard data={data} loading={loading} />
      <TrafficCard data={data} loading={loading} />
      <WeatherCard data={data} loading={loading} />
      <MarketCard market={market} loading={marketQuery.isLoading} />
      <FuelCard fuel={fuel} />
    </div>
  );
}
