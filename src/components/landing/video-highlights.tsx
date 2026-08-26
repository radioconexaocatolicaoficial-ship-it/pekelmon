import { Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import featuredVideoUrl from "@/assets/video-destaque-padre-kelmon.mp4?url";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { YOUTUBE_HIGHLIGHTS, YOUTUBE_PINNED_GRID_IDS, type YoutubeHighlight } from "@/data/youtube-highlights";

const FEATURED_VIDEO_TITLE = "Padre Kelmon, vídeo em destaque";

const KICK_LIVE = {
  slug: "brunoaiubshowlive",
  url: "https://kick.com/brunoaiubshowlive",
  embedUrl: "https://player.kick.com/brunoaiubshowlive",
  title: "Bruno Aiub Show Live",
  description: "Transmissão ao vivo na Kick. Clique para assistir.",
  thumbnail:
    "https://files.kick.com/images/user/123489094/profile_image/conversion/35d82f83-d637-4964-a2cb-5a4e25845960-fullsize.webp",
} as const;

const SIDE_PAGE_SIZE = 4;
const KICK_SLOT_COUNT = 1;
const PINNED_SLOT_COUNT = YOUTUBE_PINNED_GRID_IDS.length;
const ROTATING_SLOT_COUNT = SIDE_PAGE_SIZE - KICK_SLOT_COUNT - PINNED_SLOT_COUNT;
/** 1 minuto em cada conjunto de cards laterais antes de trocar. */
const SIDE_ROTATE_MS = 60_000;
/** Cards laterais em rotação (além dos vídeos fixos). */
const SIDE_ROTATION_LIMIT = 16;

function rankScore(
  video: YoutubeHighlight,
  maxViews: number,
  minDate: number,
  maxDate: number,
) {
  const viewsScore = maxViews > 0 ? video.views / maxViews : 0;
  const published = Date.parse(video.published || "") || minDate;
  const dateRange = Math.max(maxDate - minDate, 1);
  const recencyScore = (published - minDate) / dateRange;
  return viewsScore * 0.55 + recencyScore * 0.45;
}

function rankVideos(videos: YoutubeHighlight[]) {
  if (videos.length === 0) return [];
  const maxViews = Math.max(...videos.map((v) => v.views), 1);
  const dates = videos.map((v) => Date.parse(v.published || "") || 0);
  const minDate = Math.min(...dates);
  const maxDate = Math.max(...dates);
  return [...videos].sort(
    (a, b) => rankScore(b, maxViews, minDate, maxDate) - rankScore(a, maxViews, minDate, maxDate),
  );
}

function VideoCard({
  video,
  onOpen,
}: {
  video: YoutubeHighlight;
  onOpen: (video: YoutubeHighlight) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white text-left shadow-sm transition hover:border-blue-500 hover:shadow-md"
    >
      <div className="relative min-h-0 w-full flex-1 overflow-hidden bg-gray-100">
        <img
          src={video.thumbnail}
          alt=""
          width={480}
          height={360}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-red-600 text-white shadow-lg sm:size-10">
            <Play className="size-4 fill-current sm:size-5" aria-hidden="true" />
          </span>
        </span>
      </div>
      <div className="flex shrink-0 flex-col gap-1 p-2 sm:p-2.5">
        <h3
          className="line-clamp-2 text-xs font-bold leading-snug sm:text-sm"
          style={{ color: "var(--blue-primary)" }}
          title={video.title}
        >
          {video.title}
        </h3>
        <p className="line-clamp-2 text-[11px] leading-snug text-gray-600 sm:text-xs">
          {video.description}
        </p>
      </div>
    </button>
  );
}

function KickLiveCard({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex h-full min-h-0 w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white text-left shadow-sm transition hover:border-[#53FC18] hover:shadow-md"
    >
      <div className="relative min-h-0 w-full flex-1 overflow-hidden bg-neutral-950">
        <img
          src={KICK_LIVE.thumbnail}
          alt=""
          width={480}
          height={360}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/35 transition group-hover:bg-black/45">
          <span className="inline-flex size-9 items-center justify-center rounded-full bg-[#53FC18] text-black shadow-lg sm:size-10">
            <Play className="size-4 fill-current sm:size-5" aria-hidden="true" />
          </span>
        </span>
        <span className="absolute left-2 top-2 rounded bg-[#53FC18] px-1.5 py-0.5 text-[10px] font-black uppercase tracking-wide text-black sm:text-[11px]">
          Kick
        </span>
      </div>
      <div className="flex shrink-0 flex-col gap-1 p-2 sm:p-2.5">
        <h3
          className="line-clamp-2 text-xs font-bold leading-snug sm:text-sm"
          style={{ color: "var(--blue-primary)" }}
          title={KICK_LIVE.title}
        >
          {KICK_LIVE.title}
        </h3>
        <p className="line-clamp-2 text-[11px] leading-snug text-gray-600 sm:text-xs">
          {KICK_LIVE.description}
        </p>
      </div>
    </button>
  );
}

function FeaturedLocalVideo() {
  return (
    <div className="mx-auto w-[min(100%,20rem)] shrink-0 overflow-hidden rounded-xl md:mx-0 md:w-full">
      <div className="relative aspect-[1080/1920] w-full overflow-hidden rounded-xl bg-neutral-900">
        <video
          className="absolute inset-0 h-full w-full object-cover object-[center_18%]"
          src={featuredVideoUrl}
          width={1080}
          height={1920}
          controls
          playsInline
          preload="auto"
          title={FEATURED_VIDEO_TITLE}
        >
          Seu navegador não reproduz vídeo.{" "}
          <a href={featuredVideoUrl} className="underline">
            Baixar o vídeo em destaque
          </a>
          .
        </video>
      </div>
    </div>
  );
}

export function VideoHighlights() {
  const ranked = useMemo(() => rankVideos(YOUTUBE_HIGHLIGHTS), []);
  const [page, setPage] = useState(0);
  const [active, setActive] = useState<YoutubeHighlight | null>(null);
  const [kickOpen, setKickOpen] = useState(false);

  const pinned = useMemo(() => {
    const byId = new Map(YOUTUBE_HIGHLIGHTS.map((video) => [video.id, video]));
    return YOUTUBE_PINNED_GRID_IDS.map((id) => byId.get(id)).filter(
      (video): video is YoutubeHighlight => Boolean(video),
    );
  }, []);
  const pinnedIds = useMemo(() => new Set(pinned.map((video) => video.id)), [pinned]);

  const rotatingVideos = useMemo(
    () => ranked.filter((video) => !pinnedIds.has(video.id)).slice(0, SIDE_ROTATION_LIMIT),
    [ranked, pinnedIds],
  );
  const pageCount = Math.max(1, Math.ceil(rotatingVideos.length / ROTATING_SLOT_COUNT));

  useEffect(() => {
    if (active || kickOpen || pageCount <= 1) return;
    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, SIDE_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [active, kickOpen, pageCount]);

  const rotatingPage = rotatingVideos.slice(
    page * ROTATING_SLOT_COUNT,
    page * ROTATING_SLOT_COUNT + ROTATING_SLOT_COUNT,
  );
  const sidePage = [...pinned, ...rotatingPage];

  return (
    <div className="mb-8 space-y-4 sm:mb-10">
      <div>
        <h2
          className="text-xl font-black sm:text-2xl"
          style={{ fontFamily: "var(--font-display)", color: "var(--blue-primary)" }}
        >
          Padre Kelmon no YouTube
        </h2>
        <p className="mt-1 text-sm text-gray-600">
          Entrevistas, lives e podcasts. Clique para assistir.
        </p>
      </div>

      <div className="grid items-stretch gap-4 md:grid-cols-[20rem_minmax(0,1fr)] md:gap-5">
        <FeaturedLocalVideo />

        <div className="grid min-h-0 min-w-0 grid-cols-2 grid-rows-2 gap-2 sm:gap-3 md:h-[calc(20rem*16/9)]">
          <KickLiveCard onOpen={() => setKickOpen(true)} />
          {Array.from({ length: SIDE_PAGE_SIZE - KICK_SLOT_COUNT }, (_, index) => {
            const video = sidePage[index];
            if (!video) {
              return <div key={`empty-${index}`} className="rounded-xl bg-gray-50" />;
            }
            return (
              <VideoCard
                key={pinnedIds.has(video.id) ? video.id : `${video.id}-${page}`}
                video={video}
                onOpen={setActive}
              />
            );
          })}
        </div>
      </div>

      <Dialog open={kickOpen} onOpenChange={(open) => !open && setKickOpen(false)}>
        <DialogContent className="max-w-3xl gap-3 border-0 bg-white p-3 sm:p-4">
          <DialogHeader className="pr-8 text-left">
            <DialogTitle className="line-clamp-2 text-base sm:text-lg">
              {KICK_LIVE.title}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Reprodução da transmissão ao vivo na Kick
            </DialogDescription>
          </DialogHeader>
          {kickOpen ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={KICK_LIVE.embedUrl}
                title={KICK_LIVE.title}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : null}
          <a
            href={KICK_LIVE.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold underline-offset-2 hover:underline"
            style={{ color: "var(--blue-primary)" }}
          >
            Assistir em kick.com/{KICK_LIVE.slug}
          </a>
        </DialogContent>
      </Dialog>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-3xl gap-3 border-0 bg-white p-3 sm:p-4">
          <DialogHeader className="pr-8 text-left">
            <DialogTitle className="line-clamp-2 text-base sm:text-lg">
              {active?.title ?? "Vídeo"}
            </DialogTitle>
            <DialogDescription className="sr-only">
              Reprodução do vídeo do YouTube
            </DialogDescription>
          </DialogHeader>
          {active ? (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-black">
              <iframe
                key={active.id}
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0`}
                title={active.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
