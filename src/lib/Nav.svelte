<script lang="ts">
  import { page } from '$app/state';
  import { Gamepad2, House, Folder } from '@lucide/svelte';

  const links = [
    { href: '/games', label: 'Games', icon: Gamepad2 },
    { href: '/', label: 'Home', icon: House },
    { href: '/projects', label: 'Projects', icon: Folder }
  ];

  // Home matches only "/", the others also match subpages like /games/my-game
  const isActive = (href: string) =>
    href === '/'
      ? page.url.pathname === '/'
      : page.url.pathname === href || page.url.pathname.startsWith(href + '/');
</script>

<nav>
  {#each links as link}
    <a href={link.href} class:active={isActive(link.href)} aria-current={isActive(link.href) ? 'page' : undefined}>
      <link.icon size={20} />
      <span>{link.label}</span>
    </a>
  {/each}
</nav>

<style>
  nav {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    background: color-mix(in srgb, var(--bg, #111) 85%, transparent);
    backdrop-filter: blur(8px);
    /* border-bottom: 1px solid var(--border, #333); */
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    opacity: 0.8;
    transition: background 0.15s, opacity 0.15s;
  }

  a:hover {
    opacity: 1;
    background: rgb(255 255 255 / 0.08);
  }

  a.active {
    opacity: 1;
    background: var(--accent, #1fa58a);
    color: #fff;
  }
</style>
