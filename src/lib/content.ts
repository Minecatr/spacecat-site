export type Section = 'games' | 'projects';
export type Meta = {
  title: string;
  description?: string;
  thumbnail?: string;
  game?: string; // path to a Godot export, e.g. /games/my-game/index.html
};
export type Entry = { slug: string; meta: Meta };

const globs = {
  games: import.meta.glob<{ metadata: Meta }>('/src/content/games/*.md', { eager: true }),
  projects: import.meta.glob<{ metadata: Meta }>('/src/content/projects/*.md', { eager: true })
};

export const slugOf = (path: string) => path.split('/').pop()!.replace(/\.md$/, '');

export function listEntries(section: Section): Entry[] {
  return Object.entries(globs[section]).map(([path, m]) => ({
    slug: slugOf(path),
    meta: m.metadata
  }));
}