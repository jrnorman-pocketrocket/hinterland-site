// Makes a copy of dist/ with relative links, for previewing outside the live domain.
import { cpSync, readdirSync, statSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
const OUT = 'preview';
rmSync(OUT, { recursive: true, force: true });
cpSync('dist', OUT, { recursive: true });
const files = [];
const walk = (d) => readdirSync(d).forEach((f) => { const p = join(d, f); statSync(p).isDirectory() ? walk(p) : files.push(p); });
walk(OUT);
const pageRoots = ['trailers', 'how-it-works', 'towing-guide', 'contact', 'locations'];
for (const f of files) {
  if (!/\.(html|css)$/.test(f)) continue;
  const up = relative(dirname(f), OUT) || '.';
  let s = readFileSync(f, 'utf8');
  const fix = (path) => {
    let [p, hash = ''] = path.split('#');
    if (hash) hash = '#' + hash;
    if (p === '/' ) return `${up}/index.html${hash}`;
    if (p === '') return hash;
    if (pageRoots.some((r) => p.startsWith(`/${r}`)) && p.endsWith('/')) return `${up}${p}index.html${hash}`;
    return `${up}${p}${hash}`;
  };
  s = s.replace(/(href|src|action)="(\/[^"/][^"]*|\/)"/g, (m, a, p) => `${a}="${fix(p)}"`);
  s = s.replace(/srcset="([^"]+)"/g, (m, v) => `srcset="${v.split(',').map((x) => x.trim().replace(/^\//, `${up}/`)).join(', ')}"`);
  s = s.replace(/url\((['"]?)\/(_astro|images|fonts)\//g, (m, q, d) => `url(${q}${up}/${d}/`);
  writeFileSync(f, s);
}
// The artifact host reserves names starting with _, so rename _astro to assets.
import { renameSync } from 'node:fs';
renameSync(join(OUT, '_astro'), join(OUT, 'assets'));
for (const f of files) if (/\.html$/.test(f)) writeFileSync(f, readFileSync(f, 'utf8').replaceAll('/_astro/', '/assets/'));
console.log('preview ready');
