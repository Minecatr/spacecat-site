<!-- Content -->

<script lang="ts">
  import type { PageProps } from './$types';
  import GameEmbed from '#lib/GameEmbed.svelte';

  let { data }: PageProps = $props();
  const Content = $derived(data.content);
</script>

<svelte:head><title>{data.meta.title} | spacecat</title></svelte:head>

<article>
  <header>
    <a class="back" href="/{data.section}">← Back</a>
    <h1>{data.meta.title}</h1>
  </header>

  {#if data.section === 'games' && data.meta.game}
    {#key data.meta.game}
      <GameEmbed
        src={data.meta.game}
        title={data.meta.title}
        poster={data.meta.thumbnail}
      />
    {/key}
  {/if}

  <div class="prose"><Content /></div>
</article>

<style>
  article {
    max-width: 800px;
    margin: 0 auto;
		flex-grow: 1;
  }
  header {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    gap: 1rem;
  }

  h1 {
    grid-column: 2;
    /* margin: 0; */
    text-align: center;
  }

  .back {
    justify-self: start;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    opacity: 0.8;
    transition: background 0.15s, opacity 0.15s;
  }

  .back:hover {
    opacity: 1;
    background: rgb(255 255 255 / 0.08);
  }

  /* iframe {
    width: 100%;
    aspect-ratio: 16/9;
    border: 0;
    background: #000;
    border-radius: 8px;
  } */
  .prose :global(img) {
    max-width: 100%;
    border-radius: 6px;
  }
</style>
