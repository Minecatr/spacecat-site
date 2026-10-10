import { join } from 'node:path';

const root = join(import.meta.dir, 'build');
const headers = {
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Resource-Policy': 'same-origin'
};

Bun.serve({
  port: 7070,
  async fetch(req) {
    const pathname = decodeURIComponent(new URL(req.url).pathname);

    // prerendered pages are written as /games.html, /games/foo.html, etc.
    for (const rel of [`${pathname}.html`, `${pathname}/index.html`, pathname]) {
      const full = join(root, rel);
      if (!full.startsWith(root + '/')) continue; // block path traversal
      const file = Bun.file(full);
      if (await file.exists()) return new Response(file, { headers });
    }

    return new Response(Bun.file(join(root, '404.html')), { status: 404, headers });
  }
});