<script>
    import WakeyWakey from "$lib/components/Eggs/WakeyWakey/WakeyWakey.svelte";

    export let title = '';
</script>

<section id={title} class="page {title}">

    {#if title==="home"}
        <h1 class="title title-arkanyota">ARKANYOTA</h1>
    {:else}
        <h2 class="title title-global">{title}
        {#if title==="games"}
            <WakeyWakey />
        {/if}</h2>

    {/if}
    <div class="page-content">
        <slot></slot>
    </div>
</section>

<style lang="css">
    .page-content {
        min-height: calc(100vh - 64px);
        height: auto;
    }

    .page {
        min-height: 100vh;
        height: auto;
        padding-left: 64px; /* 64px = 32px (nav-image) + 32px (margin) */
    }

    .home {
        padding-left: 0;
    }


    .title {
        display: flex;
        justify-content: center;
        flex-direction: row;
        align-items: center;
    }

    .page > h1 {
        font-size: 3em;
        text-align: center;
        padding: 10px;
    }

    @media (max-width: 400px) {
        .page > h1 {
            font-size: 1.5em;
        }

    }

    .page > h2 {
        font-size: 2em;
        text-align: center;
        padding: 10px;
        text-transform: capitalize;
    }

    #contact {
        background: linear-gradient(var(--back-color), var(--main-color));
    }
</style>