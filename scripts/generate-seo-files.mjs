import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

function readEnvFile(filePath) {
  if (!existsSync(filePath)) return {};
  const out = {};
  for (const line of readFileSync(filePath, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const i = trimmed.indexOf("=");
    if (i === -1) continue;
    const key = trimmed.slice(0, i).trim();
    let value = trimmed.slice(i + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    out[key] = value;
  }
  return out;
}

const env = {
  ...readEnvFile(resolve(process.cwd(), ".env")),
  ...readEnvFile(resolve(process.cwd(), ".env.local")),
  ...process.env,
};

const siteUrl = String(env.VITE_SITE_URL || "")
  .trim()
  .replace(/\/$/, "");

const loc = siteUrl ? `${siteUrl}/` : "/";
const sitemapUrl = siteUrl ? `${siteUrl}/sitemap.xml` : "/sitemap.xml";

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const robots = `User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;

writeFileSync(resolve(process.cwd(), "public/sitemap.xml"), sitemap, "utf8");
writeFileSync(resolve(process.cwd(), "public/robots.txt"), robots, "utf8");

if (!siteUrl) {
  console.warn(
    "[seo] VITE_SITE_URL não definido. Defina no .env para canonical, Open Graph e sitemap absolutos.",
  );
} else {
  console.log(`[seo] sitemap e robots gerados para ${siteUrl}`);
}
