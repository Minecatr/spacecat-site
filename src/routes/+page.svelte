<!-- Homepage -->

<script lang="ts">
  import LerpText from '#lib/LerpText.svelte';
  let { children } = $props();
  
</script>

<div class="center"><LerpText /></div>

<style>
  .center { display: grid; place-items: center; flex: 1; }
</style>

<svelte:head><title>home | spacecat</title></svelte:head>