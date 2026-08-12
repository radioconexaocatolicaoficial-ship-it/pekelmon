import { createServerFn } from "@tanstack/react-start";

import facebookPostsSeed from "@/data/facebook-posts.json";
import instagramPostsSeed from "@/data/instagram-posts.json";
import tiktokPostsSeed from "@/data/tiktok-posts.json";
import xPostsSeed from "@/data/x-posts.json";
import { CANDIDATE } from "@/lib/campaign-data";

/** Página oficial do Facebook — fonte única */
const FACEBOOK_PAGE_URL = CANDIDATE.facebook; // https://www.facebook.com/PadreKelmon
const FACEBOOK_PAGE_SLUG = "PadreKelmon";

export type SocialNetworkId = "instagram" | "youtube" | "tiktok" | "x" | "facebook";

export type SocialPost = {
  id: string;
  url: string;
  embedUrl: string;
  title?: string;
  thumbnail?: string;
  /** Tipo da publicação (Instagram: post/reel/story). */
  kind?: "post" | "reel" | "story";
};

export type SocialNetworkFeed = {
  id: SocialNetworkId;
  name: string;
  handle: string;
  profileUrl: string;
  color: string;
  posts: SocialPost[];
};

export type SocialFeedsResult = {
  networks: SocialNetworkFeed[];
  featuredVideoId: string | null;
  updatedAt: string;
};

const YOUTUBE_CHANNEL_ID = "UCA0aqdkBHj5G4eS0raaeZhg";
/** YouTube "long-form videos" playlist (excludes Shorts): UULF + channelId without UC */
const YOUTUBE_LONG_FORM_PLAYLIST_ID = `UULF${YOUTUBE_CHANNEL_ID.slice(2)}`;
/** Cache curto para novos posts/reels aparecerem rápido no site. */
const CACHE_TTL_MS = 60 * 1000;
const POSTS_PER_NETWORK = 8;

const NETWORK_META: Record<
  SocialNetworkId,
  { name: string; handle: string; profileUrl: string; color: string }
> = {
  instagram: {
    name: "Instagram",
    handle: "@pekelmon",
    profileUrl: "https://www.instagram.com/pekelmon/",
    color: "#E4405F",
  },
  youtube: {
    name: "YouTube",
    handle: "@PadreKelmonBr",
    profileUrl: "https://www.youtube.com/@PadreKelmonBr",
    color: "#FF0000",
  },
  tiktok: {
    name: "TikTok",
    handle: "@pekelmon",
    profileUrl: "https://www.tiktok.com/@pekelmon",
    color: "#000000",
  },
  x: {
    name: "X",
    handle: "@PeKelmon",
    profileUrl: "https://x.com/PeKelmon",
    color: "#000000",
  },
  facebook: {
    name: "Facebook",
    handle: "facebook.com/PadreKelmon",
    profileUrl: FACEBOOK_PAGE_URL,
    color: "#1877F2",
  },
};

/** Last-known posts used when a live fetch is temporarily blocked. */
const FALLBACK_POSTS: Record<SocialNetworkId, SocialPost[]> = {
  instagram: (instagramPostsSeed as Array<{
    id: string;
    url: string;
    embedUrl: string;
    thumbnail?: string;
    kind?: "post" | "reel" | "story";
  }>).map((post) => ({
    id: post.id,
    url: post.url,
    embedUrl: post.embedUrl,
    ...(post.thumbnail ? { thumbnail: post.thumbnail } : {}),
    ...(post.kind ? { kind: post.kind } : {}),
  })),
  youtube: [],
  tiktok: (tiktokPostsSeed as Array<{
    id: string;
    url: string;
    embedUrl: string;
    thumbnail?: string;
  }>).map((post) => ({
    id: post.id,
    url: post.url,
    embedUrl: post.embedUrl,
    ...(post.thumbnail ? { thumbnail: post.thumbnail } : {}),
  })),
  x: (xPostsSeed as Array<{
    id: string;
    url: string;
    embedUrl: string;
    thumbnail?: string;
    title?: string;
  }>).map((post) => ({
    id: post.id,
    url: post.url,
    embedUrl: post.embedUrl,
    ...(post.thumbnail ? { thumbnail: post.thumbnail } : {}),
    ...(post.title ? { title: post.title } : {}),
  })),
  facebook: (facebookPostsSeed as Array<{
    id: string;
    url: string;
    embedUrl: string;
    thumbnail?: string;
    title?: string;
  }>).map((post) => ({
    id: post.id,
    url: post.url,
    embedUrl: post.embedUrl,
    ...(post.thumbnail ? { thumbnail: post.thumbnail } : {}),
    ...(post.title ? { title: post.title } : {}),
  })),
};

let cache: { data: SocialFeedsResult; expiresAt: number } | null = null;
const FEEDS_CACHE_VERSION = 16; // bump: force pinned reel + faster auto-refresh
let cacheVersion = FEEDS_CACHE_VERSION;
/** Reel fixo — SEMPRE o primeiro card da seção Instagram. */
const INSTAGRAM_PINNED_REELS = ["Db53OtOxsZL"] as const;

const UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function fetchText(url: string, init?: RequestInit): Promise<string> {
  const res = await fetch(url, {
    ...init,
    headers: {
      "User-Agent": UA,
      "Accept-Language": "pt-BR,pt;q=0.9,en;q=0.8",
      ...(init?.headers ?? {}),
    },
    signal: AbortSignal.timeout(15000),
  });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

function uniqueLimit(ids: Array<string | undefined>, limit = POSTS_PER_NETWORK): string[] {
  return [...new Set(ids.filter((id): id is string => Boolean(id)))].slice(0, limit);
}

function extractMatches(text: string, pattern: RegExp): string[] {
  return [...text.matchAll(pattern)].map((m) => m[1]).filter((id): id is string => Boolean(id));
}

/** Returns true when the ID is a YouTube Short (must never appear in the grid). */
async function isYouTubeShort(videoId: string): Promise<boolean> {
  try {
    const res = await fetch(`https://www.youtube.com/shorts/${videoId}`, {
      method: "GET",
      redirect: "manual",
      headers: { "User-Agent": UA },
      signal: AbortSignal.timeout(8000),
    });
    const location = res.headers.get("location") ?? "";
    // Regular videos redirect shorts URL → /watch?v=ID. Real Shorts stay on /shorts/.
    if (/\/watch\?v=/i.test(location)) return false;
    if (res.status >= 300 && res.status < 400 && location) return /\/shorts\//i.test(location);
    return res.status === 200;
  } catch {
    return false;
  }
}

async function fetchYouTubePosts(): Promise<SocialPost[]> {
  // Official long-form playlist (UULF…) — never the Shorts playlist / mixed channel feed
  const xml = await fetchText(
    `https://www.youtube.com/feeds/videos.xml?playlist_id=${YOUTUBE_LONG_FORM_PLAYLIST_ID}`,
  );

  const entries = [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)].map((m) => m[1]);
  const posts: SocialPost[] = [];

  for (const entry of entries) {
    const link = entry.match(/<link[^>]*rel="alternate"[^>]*href="([^"]+)"/)?.[1] ?? "";
    if (/\/shorts\//i.test(link)) continue;

    const id = entry.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1];
    if (!id) continue;
    if (await isYouTubeShort(id)) continue;

    const title = entry.match(/<media:title>([^<]*)<\/media:title>/)?.[1];
    const thumbnail = entry.match(/<media:thumbnail url="([^"]+)"/)?.[1];
    const post: SocialPost = {
      id,
      url: `https://www.youtube.com/watch?v=${id}`,
      embedUrl: `https://www.youtube.com/embed/${id}`,
    };
    if (title) post.title = title;
    if (thumbnail) post.thumbnail = thumbnail;
    posts.push(post);
    if (posts.length >= POSTS_PER_NETWORK) break;
  }

  return posts;
}

function isRealPostImage(url: string | undefined): url is string {
  if (!url) return false;
  if (url.startsWith("/instagram/") || url.startsWith("/facebook/") || url.startsWith("/x/") || url.startsWith("/tiktok/")) {
    return true;
  }
  return (
    /^https?:\/\//i.test(url) &&
    !/rsrc\.php|static\.cdninstagram\.com\/rsrc|data:image/i.test(url) &&
    /scontent|cdninstagram\.com\/v\/|fbcdn\.net|\.jpg|\.jpeg|\.png|stp=/i.test(url)
  );
}

async function fetchInstagramThumbnail(code: string): Promise<string | undefined> {
  const targets = [
    `https://www.instagram.com/reel/${code}/`,
    `https://www.instagram.com/p/${code}/`,
    `https://www.threads.com/@pekelmon/post/${code}`,
    `https://www.threads.net/@pekelmon/post/${code}`,
  ];

  for (const target of targets) {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await fetch(
          `https://api.microlink.io/?url=${encodeURIComponent(target)}${attempt ? "&force=true" : ""}`,
          {
            headers: { Accept: "application/json", "User-Agent": UA },
            signal: AbortSignal.timeout(15000),
          },
        );
        if (!res.ok) continue;
        const json = (await res.json()) as {
          status?: string;
          data?: { image?: { url?: string } | string };
        };
        if (json.status !== "success") continue;
        const image = json.data?.image;
        const url = typeof image === "string" ? image : image?.url;
        if (isRealPostImage(url)) return url;
      } catch {
        // try again / next target
      }
    }
  }
  return undefined;
}

function instagramPostFromCode(
  code: string,
  kind: "post" | "reel" | "story",
  seeded?: SocialPost,
  liveThumb?: string,
): SocialPost {
  const localThumb =
    seeded?.thumbnail?.startsWith("/instagram/") && isRealPostImage(seeded.thumbnail)
      ? seeded.thumbnail
      : undefined;
  const thumbnail =
    localThumb ||
    (isRealPostImage(liveThumb) ? liveThumb : undefined) ||
    (isRealPostImage(seeded?.thumbnail) ? seeded.thumbnail : undefined) ||
    `/instagram/${code}.jpg`;

  const isReelOrStory = kind === "reel" || kind === "story";
  return {
    id: code,
    url: isReelOrStory
      ? `https://www.instagram.com/reel/${code}/`
      : `https://www.instagram.com/p/${code}/`,
    embedUrl: isReelOrStory
      ? `https://www.instagram.com/reel/${code}/embed/`
      : `https://www.instagram.com/p/${code}/embed/`,
    thumbnail,
    kind,
  };
}

async function fetchInstagramPosts(): Promise<SocialPost[]> {
  const sources = [
    () =>
      fetchText("https://r.jina.ai/https://www.instagram.com/pekelmon/reels/", {
        headers: { Accept: "text/plain" },
      }),
    () =>
      fetchText("https://r.jina.ai/https://www.instagram.com/pekelmon/", {
        headers: { Accept: "text/plain" },
      }),
    () =>
      fetchText("https://r.jina.ai/https://www.threads.com/@pekelmon", {
        headers: { Accept: "text/plain" },
      }),
    () => fetchText("https://www.threads.com/@pekelmon"),
  ];

  const reelCodes: string[] = [];
  const postCodes: string[] = [];
  const storyCodes: string[] = [];

  for (const source of sources) {
    try {
      const text = await source();
      reelCodes.push(
        ...extractMatches(text, /instagram\.com\/reel\/([A-Za-z0-9_-]+)/g),
        ...extractMatches(text, /\/reel\/([A-Za-z0-9_-]+)/g),
      );
      postCodes.push(
        ...extractMatches(text, /instagram\.com\/p\/([A-Za-z0-9_-]+)/g),
        ...extractMatches(text, /\/@pekelmon\/post\/([A-Za-z0-9_-]+)/g),
        ...extractMatches(text, /threads\.com\/t\/([A-Za-z0-9_-]+)/g),
      );
      // Highlights / stories links quando expostos publicamente
      storyCodes.push(
        ...extractMatches(text, /instagram\.com\/stories\/pekelmon\/([A-Za-z0-9_-]+)/g),
        ...extractMatches(text, /\/stories\/highlights\/(\d+)/g),
      );
    } catch {
      // try next source
    }
  }

  const seedById = new Map(
    FALLBACK_POSTS.instagram.map((post) => [post.id, post] as const),
  );

  const kindById = new Map<string, "post" | "reel" | "story">();
  for (const code of INSTAGRAM_PINNED_REELS) kindById.set(code, "reel");
  for (const code of uniqueLimit(reelCodes, 20)) kindById.set(code, "reel");
  for (const code of uniqueLimit(storyCodes, 8)) {
    if (!kindById.has(code)) kindById.set(code, "story");
  }
  for (const code of uniqueLimit(postCodes, 20)) {
    if (!kindById.has(code)) kindById.set(code, seedById.get(code)?.kind ?? "post");
  }
  // seed fallbacks
  for (const seeded of FALLBACK_POSTS.instagram) {
    if (!kindById.has(seeded.id)) kindById.set(seeded.id, seeded.kind ?? "post");
  }

  const orderedCodes = uniqueLimit(
    [
      ...INSTAGRAM_PINNED_REELS,
      ...reelCodes,
      ...storyCodes,
      ...postCodes,
      ...FALLBACK_POSTS.instagram.map((p) => p.id),
    ],
    POSTS_PER_NETWORK + 4,
  );

  if (orderedCodes.length === 0) throw new Error("No Instagram posts/reels found");

  const posts = await Promise.all(
    orderedCodes.map(async (code) => {
      const seeded = seedById.get(code);
      const kind = kindById.get(code) ?? "post";
      const localThumb =
        seeded?.thumbnail?.startsWith("/instagram/") && isRealPostImage(seeded.thumbnail)
          ? seeded.thumbnail
          : undefined;
      const liveThumb = localThumb ? undefined : await fetchInstagramThumbnail(code);
      return instagramPostFromCode(code, kind, seeded, liveThumb);
    }),
  );

  const withImages = posts.filter((post) => isRealPostImage(post.thumbnail));
  return ensurePinnedInstagramPosts(
    withImages.length > 0 ? withImages : FALLBACK_POSTS.instagram,
  );
}

/** Garante o reel pedido pelo cliente como 1º item, depois reels/stories/posts. */
function ensurePinnedInstagramPosts(posts: SocialPost[]): SocialPost[] {
  const seedById = new Map(FALLBACK_POSTS.instagram.map((p) => [p.id, p] as const));
  const byId = new Map(posts.map((p) => [p.id, p] as const));

  const pinned: SocialPost[] = INSTAGRAM_PINNED_REELS.map((code) => {
    const existing = byId.get(code);
    if (existing) return { ...existing, kind: "reel" as const };
    return instagramPostFromCode(code, "reel", seedById.get(code));
  });

  const pinnedIds = new Set<string>(INSTAGRAM_PINNED_REELS);
  const rest = posts.filter((p) => !pinnedIds.has(p.id));
  rest.sort((a, b) => {
    const rank = (p: SocialPost) =>
      p.kind === "reel" ? 0 : p.kind === "story" ? 1 : 2;
    return rank(a) - rank(b);
  });

  return [...pinned, ...rest].slice(0, POSTS_PER_NETWORK);
}

async function fetchTikTokCover(videoUrl: string): Promise<{ thumbnail?: string; title?: string }> {
  try {
    const res = await fetch(`https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`, {
      headers: { "User-Agent": UA, Accept: "application/json" },
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) return {};
    const json = (await res.json()) as { thumbnail_url?: string; title?: string };
    const result: { thumbnail?: string; title?: string } = {};
    if (json.thumbnail_url) result.thumbnail = json.thumbnail_url;
    if (json.title) result.title = json.title;
    return result;
  } catch {
    return {};
  }
}

async function fetchTikTokPosts(): Promise<SocialPost[]> {
  const queries = [
    "site:tiktok.com/@pekelmon/video",
    "pekelmon tiktok.com/@pekelmon/video",
  ];

  let ids: string[] = [];
  for (const q of queries) {
    try {
      const html = await fetchText(
        "https://html.duckduckgo.com/html/?q=" + encodeURIComponent(q),
      );
      ids = uniqueLimit(extractMatches(html, /tiktok\.com\/@pekelmon\/video\/(\d+)/gi));
      if (ids.length > 0) break;
    } catch {
      // try next query
    }
  }

  if (ids.length === 0) {
    ids = FALLBACK_POSTS.tiktok.map((post) => post.id);
  }
  if (ids.length === 0) throw new Error("No TikTok posts found");

  const seedById = new Map(FALLBACK_POSTS.tiktok.map((post) => [post.id, post] as const));

  const posts = await Promise.all(
    ids.map(async (id) => {
      const url = `https://www.tiktok.com/@pekelmon/video/${id}`;
      const seeded = seedById.get(id);
      const localThumb =
        seeded?.thumbnail?.startsWith("/tiktok/") && seeded.thumbnail
          ? seeded.thumbnail
          : undefined;
      const live = localThumb ? {} : await fetchTikTokCover(url);
      const thumbnail = localThumb || live.thumbnail || seeded?.thumbnail || `/tiktok/${id}.jpg`;
      const post: SocialPost = {
        id,
        url,
        embedUrl: `https://www.tiktok.com/embed/v2/${id}`,
        thumbnail,
      };
      if (live.title) post.title = live.title;
      return post;
    }),
  );

  return posts.filter((post) => Boolean(post.thumbnail));
}

async function fetchXPostIds(): Promise<string[]> {
  const sources = [
    () => fetchText("https://zamantika.com/profile/PeKelmon"),
    () =>
      fetchText(
        "https://html.duckduckgo.com/html/?q=" +
          encodeURIComponent("site:x.com/PeKelmon/status"),
      ),
  ];

  for (const source of sources) {
    try {
      const html = await source();
      const ids = [
        ...new Set(
          [
            ...extractMatches(html, /(?:x|twitter)\.com\/PeKelmon\/status\/(\d{15,})/gi),
            ...extractMatches(html, /\/PeKelmon\/status\/(\d{15,})/gi),
            ...extractMatches(html, /status\/(\d{15,})/gi),
          ],
        ),
      ].sort((a, b) => (BigInt(b) > BigInt(a) ? 1 : -1));
      if (ids.length > 0) return ids;
    } catch {
      // try next source
    }
  }
  return [];
}

async function fetchFxTweet(id: string): Promise<{
  screenName?: string;
  title?: string;
  thumbnail?: string;
} | null> {
  try {
    const res = await fetch(`https://api.fxtwitter.com/status/${id}`, {
      headers: { "User-Agent": UA, Accept: "application/json" },
      signal: AbortSignal.timeout(12000),
    });
    if (!res.ok) return null;
    const json = (await res.json()) as {
      tweet?: {
        author?: { screen_name?: string; avatar_url?: string };
        text?: string;
        media?: {
          all?: Array<{ url?: string; thumbnail_url?: string }>;
          photos?: Array<{ url?: string }>;
          videos?: Array<{ thumbnail_url?: string; url?: string }>;
        };
      };
    };
    const tweet = json.tweet;
    if (!tweet) return null;
    const media = tweet.media?.all?.[0] || tweet.media?.photos?.[0] || tweet.media?.videos?.[0];
    const thumbnail =
      media?.thumbnail_url ||
      media?.url ||
      tweet.author?.avatar_url?.replace("_200x200", "_400x400") ||
      tweet.author?.avatar_url;
    const result: { screenName?: string; title?: string; thumbnail?: string } = {};
    if (tweet.author?.screen_name) result.screenName = tweet.author.screen_name;
    if (tweet.text) result.title = tweet.text.replace(/\s+/g, " ").slice(0, 100);
    if (thumbnail) result.thumbnail = thumbnail;
    return result;
  } catch {
    return null;
  }
}

async function fetchXPosts(): Promise<SocialPost[]> {
  const seedById = new Map(FALLBACK_POSTS.x.map((post) => [post.id, post] as const));
  let ids = await fetchXPostIds();
  if (ids.length === 0) ids = FALLBACK_POSTS.x.map((post) => post.id);
  if (ids.length === 0) throw new Error("No X posts found");

  const posts: SocialPost[] = [];
  for (const id of ids) {
    if (posts.length >= POSTS_PER_NETWORK) break;
    const live = await fetchFxTweet(id);
    if (live?.screenName && live.screenName.toLowerCase() !== "pekelmon") continue;

    const seeded = seedById.get(id);
    const localThumb =
      seeded?.thumbnail?.startsWith("/x/") && seeded.thumbnail ? seeded.thumbnail : undefined;
    const thumbnail =
      localThumb || live?.thumbnail || seeded?.thumbnail || `/x/${id}.jpg`;

    const post: SocialPost = {
      id,
      url: `https://x.com/PeKelmon/status/${id}`,
      embedUrl: `https://platform.twitter.com/embed/Tweet.html?id=${id}`,
      thumbnail,
    };
    if (live?.title) post.title = live.title;
    else if (seeded?.title) post.title = seeded.title;
    posts.push(post);
  }

  return posts.length > 0 ? posts : FALLBACK_POSTS.x;
}

function facebookPostUrl(page: string, id: string) {
  return `${page}/posts/${id}/`;
}

function extractFacebookPostIds(text: string): string[] {
  const numeric = [
    ...extractMatches(text, new RegExp(`${FACEBOOK_PAGE_SLUG}\\/posts\\/(\\d{10,})`, "g")),
    ...extractMatches(text, /fbid[=:](\d{10,})/g),
    ...extractMatches(text, /story_fbid[=:](\d{10,})/g),
    ...extractMatches(text, /multi_permalinks=(\d{10,})/g),
    ...extractMatches(text, /\/posts\/(\d{10,})/g),
  ];
  const pfbid = extractMatches(text, /\/posts\/(pfbid[A-Za-z0-9]+)/g);

  // Numeric IDs: newest first. pfbid has no sortable order — keep discovery order.
  const sortedNumeric = [...new Set(numeric)].sort((a, b) => {
    try {
      return BigInt(b) > BigInt(a) ? 1 : BigInt(b) < BigInt(a) ? -1 : 0;
    } catch {
      return b.localeCompare(a);
    }
  });

  return uniqueLimit([...sortedNumeric, ...pfbid], POSTS_PER_NETWORK * 3);
}

function buildFacebookPost(
  page: string,
  id: string,
  seeded?: SocialPost,
  liveThumb?: string,
): SocialPost {
  const url = seeded?.url?.includes(id) ? seeded.url : facebookPostUrl(page, id);
  const localThumb =
    seeded?.thumbnail?.startsWith("/facebook/") && isRealPostImage(seeded.thumbnail)
      ? seeded.thumbnail
      : undefined;

  const thumbnail =
    localThumb ||
    (isRealPostImage(liveThumb) ? liveThumb : undefined) ||
    (isRealPostImage(seeded?.thumbnail) ? seeded.thumbnail : undefined) ||
    `/facebook/${id}.jpg`;

  return {
    id,
    url,
    embedUrl:
      "https://www.facebook.com/plugins/post.php?href=" +
      encodeURIComponent(url) +
      "&show_text=false&width=500",
    thumbnail,
    title: seeded?.title ?? "Publicação no Facebook",
  };
}

/** Imagem oficial do post via Facebook Embed Plugin (não usa assets do site). */
async function fetchFacebookThumbnail(postUrl: string): Promise<string | undefined> {
  try {
    const embed =
      "https://www.facebook.com/plugins/post.php?href=" +
      encodeURIComponent(postUrl) +
      "&show_text=false&width=500";
    const html = await fetchText(embed, {
      headers: {
        Accept: "text/html,application/xhtml+xml",
        Referer: "https://www.facebook.com/",
      },
    });

    const urls = [...html.matchAll(/https:\/\/scontent[^"'\\\s>]+/g)].map((m) =>
      m[0].replace(/&amp;/g, "&"),
    );

    const postImgs = urls.filter(
      (u) =>
        !/s50x50|s100x100|s200x200/i.test(u) &&
        /t51\.82787|t39\.30808-6|p180x540|p394x394|p403x403|s720x720/i.test(u),
    );

    const preferred = postImgs.find((u) => /t51\.82787|t39\.30808-6/i.test(u));
    const picked = preferred || postImgs[0];
    return isRealPostImage(picked) ? picked : undefined;
  } catch {
    return undefined;
  }
}

/** Últimos 4 posts da página oficial https://www.facebook.com/PadreKelmon */
async function fetchFacebookPosts(): Promise<SocialPost[]> {
  const page = FACEBOOK_PAGE_URL.replace(/\/$/, "");
  const seed = FALLBACK_POSTS.facebook;
  const seedById = new Map(seed.map((post) => [post.id, post] as const));

  const sources = [
    () => fetchText(`https://r.jina.ai/${page}`, { headers: { Accept: "text/plain" } }),
    () => fetchText(`https://r.jina.ai/${page}/photos_by`, { headers: { Accept: "text/plain" } }),
    () => fetchText(`https://r.jina.ai/https://mbasic.facebook.com/${FACEBOOK_PAGE_SLUG}`, {
      headers: { Accept: "text/plain" },
    }),
    () =>
      fetchText(
        "https://html.duckduckgo.com/html/?q=" +
          encodeURIComponent(`site:facebook.com/${FACEBOOK_PAGE_SLUG}/posts`),
      ),
  ];

  let liveIds: string[] = [];
  for (const source of sources) {
    try {
      const text = await source();
      liveIds = extractFacebookPostIds(text);
      if (liveIds.length >= POSTS_PER_NETWORK) break;
    } catch {
      // try next source
    }
  }

  // Prioriza posts ao vivo; completa com seed para sempre ter 4
  const mergedIds = uniqueLimit(
    [...liveIds, ...seed.map((post) => post.id)],
    POSTS_PER_NETWORK,
  );

  if (mergedIds.length === 0) {
    return seed.slice(0, POSTS_PER_NETWORK);
  }

  const posts = await Promise.all(
    mergedIds.map(async (id) => {
      const seeded = seedById.get(id);
      const hasLocal =
        seeded?.thumbnail?.startsWith("/facebook/") && isRealPostImage(seeded.thumbnail);
      const liveThumb = hasLocal
        ? undefined
        : await fetchFacebookThumbnail(facebookPostUrl(page, id));
      return buildFacebookPost(page, id, seeded, liveThumb);
    }),
  );

  // Garante exatamente 4 cards no grid
  while (posts.length < POSTS_PER_NETWORK && seed[posts.length]) {
    const seeded = seed[posts.length];
    if (seeded && !posts.some((p) => p.id === seeded.id)) {
      posts.push(buildFacebookPost(page, seeded.id, seeded));
    } else {
      break;
    }
  }

  return posts.slice(0, POSTS_PER_NETWORK);
}

async function safeFetch(
  id: SocialNetworkId,
  fetcher: () => Promise<SocialPost[]>,
): Promise<SocialPost[]> {
  try {
    const posts = await fetcher();
    if (posts.length > 0) {
      FALLBACK_POSTS[id] =
        id === "instagram" ? ensurePinnedInstagramPosts(posts) : posts;
      return FALLBACK_POSTS[id];
    }
  } catch (error) {
    console.warn(`[social-feeds] ${id} fetch failed:`, error);
  }
  if (id === "instagram") {
    return ensurePinnedInstagramPosts(FALLBACK_POSTS.instagram);
  }
  return FALLBACK_POSTS[id] ?? [];
}

async function buildFeeds(): Promise<SocialFeedsResult> {
  const [instagram, youtube, tiktok, x, facebook] = await Promise.all([
    safeFetch("instagram", fetchInstagramPosts),
    safeFetch("youtube", fetchYouTubePosts),
    safeFetch("tiktok", fetchTikTokPosts),
    safeFetch("x", fetchXPosts),
    safeFetch("facebook", fetchFacebookPosts),
  ]);

  const byId: Record<SocialNetworkId, SocialPost[]> = {
    instagram: ensurePinnedInstagramPosts(instagram),
    youtube,
    tiktok,
    x,
    facebook,
  };

  const order: SocialNetworkId[] = ["instagram", "youtube", "tiktok", "x", "facebook"];

  return {
    networks: order.map((networkId) => ({
      id: networkId,
      ...NETWORK_META[networkId],
      posts: byId[networkId].slice(0, POSTS_PER_NETWORK),
    })),
    featuredVideoId: youtube[0]?.id ?? "EI-bTS70q0U",
    updatedAt: new Date().toISOString(),
  };
}

export const getSocialFeeds = createServerFn({ method: "GET" }).handler(async () => {
  if (cacheVersion !== FEEDS_CACHE_VERSION) {
    cache = null;
    cacheVersion = FEEDS_CACHE_VERSION;
  }

  const now = Date.now();
  if (cache && cache.expiresAt > now) {
    return cache.data;
  }

  const data = await buildFeeds();
  // Confirma o reel pinado mesmo se o scrape falhar parcialmente
  const ig = data.networks.find((network) => network.id === "instagram");
  if (ig) {
    ig.posts = ensurePinnedInstagramPosts(ig.posts);
  }
  const hasThumbs = ig?.posts.every((post) => isRealPostImage(post.thumbnail));
  if (hasThumbs) {
    cache = { data, expiresAt: now + CACHE_TTL_MS };
  }
  return data;
});
