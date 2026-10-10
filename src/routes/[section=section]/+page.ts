import type { PageLoad } from './$types';
import { listEntries, type Section } from '#lib/content.js';

export function entries() {
  return [{ section: 'games' }, { section: 'projects' }];
}

export const load: PageLoad = ({ params }) => {
  const section = params.section as Section;
  return { section, items: listEntries(section) };
};