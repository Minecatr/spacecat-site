<script lang="ts">
  import { onMount } from 'svelte';
  import { textLerp, clamp01, easeInCubic } from '#lib/lerp.ts';

  // `start` is when each stage begins, in seconds. Each stage lasts 1s.
  const steps = [
    { to: 'spct.xyz', start: 0 },
    { to: 'spacecat', start: 0.75 },
    { to: 'emmett hardiman', start: 1.75 }
  ];
  const final = steps[steps.length - 1].to;

  let text = $state('');

  onMount(() => {
    const startTime = performance.now();
    let raf = 0;

    const frame = (time: number) => {
      const a = (time - startTime) / 1000;
      // chain: each stage lerps from the previous stage's output
      text = steps.reduce(
        (from, { to, start }) => textLerp(from, to, easeInCubic(clamp01(a - start))),
        ''
      );
      if (text !== final) raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  });
</script>

<h1 aria-label={final}>{text}</h1>

<style>
  h1 {
    /* font-family: ui-monospace, monospace; */
    font-size: clamp(2rem, 8vw, 5rem);
    white-space: pre;
    margin: 0;
    min-height: 1.2em; /* keeps height while the text is still empty */
  }
</style>