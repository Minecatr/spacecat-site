<script lang="ts">
    import { Play, Maximize, Minimize } from "@lucide/svelte";

    let {
        src,
        title,
        poster,
    }: { src: string; title: string; poster?: string } = $props();

    let started = $state(false);
    let isFullscreen = $state(false);
    let box: HTMLDivElement;
    let frame: HTMLIFrameElement | undefined = $state();

    function start() {
        started = true;
    }

    function toggleFullscreen() {
        if (document.fullscreenElement) document.exitFullscreen();
        else box.requestFullscreen();
    }

    function onFullscreenChange() {
        isFullscreen = document.fullscreenElement === box;
        frame?.focus(); // keep keyboard input going to the game
    }
</script>

<svelte:document onfullscreenchange={onFullscreenChange} />

<div class="box" bind:this={box}>
    {#if started}
        <iframe
            bind:this={frame}
            {src}
            {title}
            allow="fullscreen; autoplay; gamepad"
            allowfullscreen
            onload={() => frame?.focus()}
        ></iframe>

        <button
            class="fs"
            onclick={toggleFullscreen}
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
            {#if isFullscreen}<Minimize size={20} />{:else}<Maximize
                    size={20}
                />{/if}
        </button>
    {:else}
        <button class="start" onclick={start} aria-label="Play {title}">
            {#if poster}<img src={poster} alt="" />{/if}
            <span class="play"><Play size={36} fill="currentColor" /></span>
        </button>
    {/if}
</div>

<style>
    .box {
        position: relative;
        width: 100%;
        aspect-ratio: 16 / 9;
        background: #000;
        border-radius: 0.75rem;
        overflow: hidden;
    }

    iframe {
        width: 100%;
        height: 100%;
        border: 0;
        display: block;
    }

    .start {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        border: 0;
        background: #000;
        color: #fff;
        cursor: pointer;
        display: grid;
        place-items: center;
    }

    .start img {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(8px); /*grayscale(100%); */
        opacity: 0.5;
        /* transition:
            opacity 0.2s,
            filter 0.2s; */
    }

    /* .start:hover img {
        opacity: 0.4;
        filter: blur(4px) grayscale(0%);
    } */

    .play {
        position: relative;
        display: grid;
        place-items: center;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        /* background: var(--accent, #1fa58a); */
        /* transition: transform 0.2s; */
    }

    /* .start:hover .play {
        transform: scale(1.2);
    } */

    .fs {
        position: absolute;
        right: 0.75rem;
        bottom: 0.75rem;
        display: grid;
        place-items: center;
        padding: 0.5rem;
        border: 0;
        border-radius: 0.5rem;
        background: rgb(0 0 0 / 0.6);
        color: #fff;
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.15s;
    }

    .fs:hover,
    .fs:focus-visible {
        opacity: 1;
    }
</style>
