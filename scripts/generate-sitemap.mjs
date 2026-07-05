import { execSync } from "node:child_process";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, "..");
const publicDir = resolve(rootDir, "public");
const outputPath = resolve(publicDir, "sitemap.xml");
const siteUrl = "https://samar-asiri-portfolio.vercel.app";

const routes = [
  {
    path: "/",
    priority: "1.0",
    changefreq: "weekly",
    sourceFile: "src/pages/Index.tsx",
  },
];

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function getGitLastModified(relativePath) {
  try {
    const result = execSync(`git log -1 --format=%cI -- "${relativePath}"`, {
      cwd: rootDir,
      stdio: ["ignore", "pipe", "ignore"],
      encoding: "utf8",
    }).trim();

    return result || null;
  } catch {
    return null;
  }
}

function getFallbackLastModified(relativePath) {
  const absolutePath = resolve(rootDir, relativePath);
  return statSync(absolutePath).mtime.toISOString();
}

function getLastModified(relativePath) {
  return getGitLastModified(relativePath) ?? getFallbackLastModified(relativePath);
}

function buildUrl(route) {
  const loc = route.path === "/" ? `${siteUrl}/` : `${siteUrl}${route.path}`;
  const lastmod = getLastModified(route.sourceFile);

  return [
    "  <url>",
    `    <loc>${escapeXml(loc)}</loc>`,
    `    <lastmod>${escapeXml(lastmod)}</lastmod>`,
    `    <changefreq>${route.changefreq}</changefreq>`,
    `    <priority>${route.priority}</priority>`,
    "  </url>",
  ].join("\n");
}

function writeSitemap() {
  mkdirSync(publicDir, { recursive: true });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...routes.map(buildUrl),
    "</urlset>",
    "",
  ].join("\n");

  writeFileSync(outputPath, xml, "utf8");
}

writeSitemap();
