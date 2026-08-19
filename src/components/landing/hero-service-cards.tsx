import {
  ArrowUpRight,
  Cloud,
  CloudFog,
  CloudLightning,
  CloudRain,
  CloudSnow,
  CloudSun,
  Landmark,
  MapPin,
  ShieldCheck,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useState } from "react";

const TSE_AUTOATENDIMENTO =
  "https://www.tse.jus.br/servicos-eleitorais/autoatendimento-eleitoral#/";

const WEATHER_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current=temperature_2m,weather_code,relative_humidity_2m,wind_speed_10m&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&forecast_days=1";

type WeatherState = {
  temp: number;
  humidity: number;
  wind: number;
  code: number;
  min: number;
  max: number;
};

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

function WeatherCard() {
  const [weather, setWeather] = useState<WeatherState | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const res = await fetch(WEATHER_URL);
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        if (cancelled) return;
        setWeather({
          temp: Math.round(data.current.temperature_2m),
          humidity: Math.round(data.current.relative_humidity_2m),
          wind: Math.round(data.current.wind_speed_10m),
          code: Number(data.current.weather_code),
          min: Math.round(data.daily.temperature_2m_min[0]),
          max: Math.round(data.daily.temperature_2m_max[0]),
        });
        setFailed(false);
      } catch {
        if (!cancelled) setFailed(true);
      }
    }

    load();
    const id = window.setInterval(load, 5 * 60 * 1000);
    return () => {
      cancelled = true;
      window.clearInterval(id);
    };
  }, []);

  const info = weather ? weatherLabel(weather.code) : { label: "Carregando…", Icon: CloudSun };
  const WeatherIcon = info.Icon;

  return (
    <article className="flex h-full min-h-[11.5rem] flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-3 flex items-center gap-2.5">
        <span
          className="inline-flex size-10 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: "var(--blue-primary)" }}
        >
          <WeatherIcon className="size-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--yellow-primary)]">
            Tempo real
          </p>
          <h3
            className="text-sm font-black leading-tight"
            style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
          >
            Previsão do tempo
          </h3>
        </div>
      </div>

      {weather ? (
        <>
          <p className="text-3xl font-black leading-none" style={{ color: "var(--blue-primary)" }}>
            {weather.temp}°
            <span className="ml-1 text-sm font-semibold text-gray-500">São Paulo</span>
          </p>
          <p className="mt-1 text-sm font-medium text-gray-700">{info.label}</p>
          <p className="mt-auto pt-3 text-xs text-gray-500">
            Máx. {weather.max}° · Mín. {weather.min}° · Umidade {weather.humidity}% · Vento{" "}
            {weather.wind} km/h
          </p>
        </>
      ) : (
        <p className="mt-auto text-sm text-gray-500">
          {failed ? "Não foi possível carregar o clima agora." : "Atualizando o tempo em São Paulo…"}
        </p>
      )}
    </article>
  );
}

function TseCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: LucideIcon;
}) {
  return (
    <a
      href={TSE_AUTOATENDIMENTO}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full min-h-[11.5rem] flex-col rounded-2xl border-2 border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md sm:p-5"
    >
      <div className="mb-3 flex items-center gap-2.5">
        <span
          className="inline-flex size-10 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: "var(--blue-primary)" }}
        >
          <Icon className="size-5" aria-hidden="true" />
        </span>
        <h3
          className="text-sm font-black leading-tight"
          style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
        >
          {title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
      <span
        className="mt-auto inline-flex items-center gap-1 pt-3 text-xs font-bold"
        style={{ color: "var(--blue-primary)" }}
      >
        Consultar no TSE
        <ArrowUpRight className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

export function HeroServiceCards() {
  return (
    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <WeatherCard />
      <TseCard
        title="Autoatendimento eleitoral"
        description="Acesse os serviços do TSE: título, justificativa, regularização e demais atendimentos online."
        Icon={Landmark}
      />
      <TseCard
        title="Local de votação"
        description="Consulte onde votar nas eleições de 2026 pelo Autoatendimento Eleitoral do TSE."
        Icon={MapPin}
      />
      <TseCard
        title="Situação eleitoral"
        description="Confira se o título está regular e quite pendências antes de votar."
        Icon={ShieldCheck}
      />
    </div>
  );
}
