<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="error">
    <h1>{page.status}</h1>
    <h2>{page.error?.message}</h2>
</div>

<style>
    .error {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        width: 100vw;
        color: var(--text-color);
        font-size: 2rem;
    }
</style>
