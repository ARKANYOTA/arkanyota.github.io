<script>
    export let title = '';
</script>

<section id={title} class="page">
    {#if title==="home"}
        <h1>ARKANYOTA</h1>
    {:else}
        <h2>{title}</h2>
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