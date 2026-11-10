// Writes dist/sitemap.xml from the built pages (no extra dependencies).
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const SITE = 'https://www.hinterlandtrailerhire.com.au';
const urls = [];
const walk = (dir, base = '') => {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, `${base}/${f}`);
    else if (f === 'index.html' && !base.startsWith('/404')) urls.push(`${SITE}${base}/`);
  }
};
walk('dist');
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.sort().map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}\n</urlset>\n`);
console.log(`sitemap: ${urls.length} urls`);
