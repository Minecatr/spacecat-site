import { defineParams } from '@sveltejs/kit/params';

export const params = defineParams({
  section: (param: string) =>
    param === 'games' || param === 'projects' ? param : undefined
});