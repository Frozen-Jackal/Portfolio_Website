export default async function sitemap() {
  const baseUrl = process.env.SITE_URL || "http://localhost:3000";
  const routes = ["", "/about", "/pricing", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
