import { error } from '@sveltejs/kit';
import { listEntries, type Meta, type Section } from '#lib/content.ts';
import type { Component } from 'svelte';

const modules = {
  games: import.meta.glob<{ default: Component; metadata: Meta }>('/src/content/games/*.md'),
  projects: import.meta.glob<{ default: Component; metadata: Meta }>('/src/content/projects/*.md')
};

export function entries() {
  return (['games', 'projects'] as Section[]).flatMap((section) =>
    listEntries(section).map(({ slug }) => ({ section, slug }))
  );
}

export async function load({ params }) {
  const section = params.section as Section;
  const loader = modules[section][`/src/content/${section}/${params.slug}.md`];
  if (!loader) error(404, 'Not found');
  const mod = await loader();
  return { section, content: mod.default, meta: mod.metadata };
}