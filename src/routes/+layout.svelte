<!-- All Pages -->

<script lang="ts">
  import Nav from '#lib/Nav.svelte';
  import Footer from '#lib/Footer.svelte';
  let { children } = $props();
</script>

<div class="shell">
  <Nav />
  <main>{@render children()}</main>
  <Footer />
</div>

<style>
  :global(body) { margin: 0; font-size: 12px; font-family: inter, system-ui, sans-serif; background: #000; color: #fff; }
  :global(a) { color: inherit; }
  :global(:root) {
  --bg: #000;
  --border: #333;
  --accent: #1fa58a;
  }
  .shell { min-height: 100vh; display: flex; flex-direction: column; }
  main { flex: 1; padding: 1.5rem; display: flex; }
</style>

<svelte:head>
  <link rel="icon" href="/favicon.svg" />
  <title>spacecat</title>
</svelte:head>
