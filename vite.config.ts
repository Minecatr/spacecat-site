import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';
import type { Plugin } from 'vite';

const crossOriginIsolation = (): Plugin => {
  const apply = (server: { middlewares: any }) => {
    server.middlewares.use((_req: unknown, res: any, next: () => void) => {
      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
      res.setHeader('Cross-Origin-Resource-Policy', 'same-origin');
      next();
    });
    // intentionally returns nothing
  };

  return {
    name: 'cross-origin-isolation',
    configureServer(server) {
      apply(server);
    },
    configurePreviewServer(server) {
      apply(server);
    }
  };
};

export default defineConfig({
  plugins: [
    crossOriginIsolation(),
    sveltekit({
      extensions: ['.svelte', '.md'],
      preprocess: [vitePreprocess(), mdsvex({ extensions: ['.md'] })],
      adapter: adapter({ fallback: '404.html' })
    })
  ],
  server: {
    allowedHosts: [
      'www.spct.xyz',
      'spct.xyz',
			'dev.spct.xyz'
    ],
    headers: {
      "Cross-Origin-Embedder-Policy": "credentialless",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
  preview: {
    headers: {
      'Cross-Origin-Embedder-Policy': 'credentialless',
      'Cross-Origin-Opener-Policy': 'same-origin'
    }
  }
});
