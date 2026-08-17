import { Play } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { YOUTUBE_HIGHLIGHTS, type YoutubeHighlight } from "@/data/youtube-highlights";

const FEATURED_VIDEO_SRC = "/videos/video-destaque-padre-kelmon.mp4";
const FEATURED_VIDEO_TITLE = "Padre Kelmon — vídeo em destaque";

const SIDE_PAGE_SIZE = 4;
/** 1 minuto em cada conjunto de cards laterais antes de trocar. */
const SIDE_ROTATE_MS = 60_000;
/** Cards laterais em rotação. */
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
  large = false,
}: {
  video: YoutubeHighlight;
  onOpen: (video: YoutubeHighlight) => void;
  large?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className={`group flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white text-left shadow-sm transition hover:border-blue-500 hover:shadow-md ${
        large ? "sm:rounded-2xl" : ""
      }`}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={large ? `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg` : video.thumbnail}
          alt=""
          width={480}
          height={360}
          loading={large ? "eager" : "lazy"}
          decoding="async"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/25 transition group-hover:bg-black/35">
          <span
            className={`inline-flex items-center justify-center rounded-full bg-red-600 text-white shadow-lg ${
              large ? "size-14 sm:size-16" : "size-9 sm:size-10"
            }`}
          >
            <Play
              className={`fill-current ${large ? "size-7 sm:size-8" : "size-4 sm:size-5"}`}
              aria-hidden="true"
            />
          </span>
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${large ? "gap-1.5 p-3 sm:p-4" : "gap-1 p-2 sm:p-2.5"}`}>
        <h3
          className={`truncate font-bold leading-snug ${
            large ? "text-base sm:text-lg" : "text-xs sm:text-sm"
          }`}
          style={{ color: "var(--blue-primary)" }}
          title={video.title}
        >
          {video.title}
        </h3>
        <p
          className={`line-clamp-3 text-gray-600 ${
            large ? "text-sm leading-relaxed" : "text-[11px] leading-snug sm:text-xs"
          }`}
        >
          {video.description}
        </p>
      </div>
    </button>
  );
}

function FeaturedLocalVideo() {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-xl border-2 border-gray-200 bg-white shadow-sm sm:rounded-2xl">
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <video
          className="absolute inset-0 h-full w-full object-contain"
          src={FEATURED_VIDEO_SRC}
          controls
          playsInline
          preload="metadata"
          title={FEATURED_VIDEO_TITLE}
        >
          Seu navegador não reproduz vídeo.{" "}
          <a href={FEATURED_VIDEO_SRC} className="underline">
            Baixar o vídeo em destaque
          </a>
          .
        </video>
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-3 sm:p-4">
        <h3
          className="truncate text-base font-bold leading-snug sm:text-lg"
          style={{ color: "var(--blue-primary)" }}
        >
          {FEATURED_VIDEO_TITLE}
        </h3>
        <p className="text-sm leading-relaxed text-gray-600">
          Assista ao vídeo em destaque da campanha.
        </p>
      </div>
    </div>
  );
}

export function VideoHighlights() {
  const ranked = useMemo(() => rankVideos(YOUTUBE_HIGHLIGHTS), []);
  const [page, setPage] = useState(0);
  const [active, setActive] = useState<YoutubeHighlight | null>(null);

  const sideVideos = useMemo(() => ranked.slice(0, SIDE_ROTATION_LIMIT), [ranked]);
  const pageCount = Math.max(1, Math.ceil(sideVideos.length / SIDE_PAGE_SIZE));

  useEffect(() => {
    if (active || pageCount <= 1) return;
    const id = window.setInterval(() => {
      setPage((current) => (current + 1) % pageCount);
    }, SIDE_ROTATE_MS);
    return () => window.clearInterval(id);
  }, [active, pageCount]);

  const sidePage = sideVideos.slice(
    page * SIDE_PAGE_SIZE,
    page * SIDE_PAGE_SIZE + SIDE_PAGE_SIZE,
  );

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
          Entrevistas, lives e podcasts — clique para assistir.
        </p>
      </div>

      <div className="grid items-stretch gap-3 lg:grid-cols-5 lg:gap-4">
        <div className="lg:col-span-3">
          <FeaturedLocalVideo />
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-3 lg:col-span-2 lg:gap-3">
          {Array.from({ length: SIDE_PAGE_SIZE }, (_, index) => {
            const video = sidePage[index];
            if (!video) {
              return <div key={`empty-${index}`} className="rounded-xl bg-gray-50" />;
            }
            return <VideoCard key={`${video.id}-${page}`} video={video} onOpen={setActive} />;
          })}
        </div>
      </div>

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
