<!-- Gallery -->

<script lang="ts">
  import type { PageProps } from './$types';

  let { data }: PageProps = $props();
</script>

<div class="grid">
  {#each data.items as { slug, meta }}
    <a class="card" href="/{data.section}/{slug}">
      {#if meta.thumbnail}
        <img src={meta.thumbnail} alt="" loading="lazy" />
      {:else}
        <div class="placeholder">{meta.title}</div>
      {/if}

      <div class="overlay">
        <h2>{meta.title}</h2>
        {#if meta.description}<p>{meta.description}</p>{/if}
      </div>
    </a>
  {/each}
</div>

<style>
  .grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;   /* this centers the incomplete last row */
    gap: 1.25rem;
    max-width: 1200px;
    margin: 0 auto;
		align-self: start;
  }

  .card {
    height: 250px;
    flex: 0 0 auto;
    max-width: 100%;
    position: relative;
    display: block;
    /* aspect-ratio: 1;          same size for every card */
    border-radius: 1rem;
    overflow: hidden;             /* clips the image to the rounded corners */
    background: var(--surface, #1c1c1c);
    text-decoration: none;
    box-shadow: 0 2px 8px rgb(0 0 0 / 0.4);
    transition: box-shadow 0.2s; /* transform 0.2s, */
  }

  .card:hover,
  .card:focus-visible {
    /* transform: scale(2); */
    z-index: 1;
    box-shadow: 0 8px 20px rgb(0 0 0 / 0.5);
  }

  .card img {
    width: 100%;
    height: 100%;
    object-fit: cover;            /* crops any thumbnail shape to fit */
    display: block;
    transition: transform 0.2s;
  }

  .card:hover img,
  .card:focus-visible img {
    transform: scale(1.15);
  }

  .placeholder {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
    padding: 1rem;
    text-align: center;
    opacity: 0.4;
  }

  .overlay {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 1rem;
    background: linear-gradient(to top, rgb(0 0 0 / 0.85), rgb(0 0 0 / 0.2) 70%);
    opacity: 0;
    transition: opacity 0.2s;
  }

  .card:hover .overlay,
  .card:focus-visible .overlay {
    opacity: 1;
  }

  .overlay h2 { margin: 0; font-size: 1.2rem; }
  .overlay p {
    margin: 0.35rem 0 0;
    font-size: 1.0rem;
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 3;        /* long descriptions get cut off */
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  /* touch screens have no hover, so always show the text */
  @media (hover: none) {
    .overlay { opacity: 1; }
  }
</style>

<svelte:head>
  <title>{data.section === 'games' ? 'games' : 'projects'} | spacecat</title>
</svelte:head>
