<script lang="ts">
    import Icon from "@iconify/svelte";
    import {onMount} from "svelte";
    import cookie from "cookie";

    export let dev_icon: string;
    export let dev_icon_simple: string;

    let is_simple: boolean;
    is_simple = cookie.parse(document.cookie)["dev-icon-simple"]==="true";

    function get_icon() {
        if(is_simple) {
            if (dev_icon_simple.includes(":")) return dev_icon_simple;
            return `devicon-plain:${dev_icon_simple}`;
        } else {
            if (dev_icon.includes(":")) return dev_icon;
            return `devicon:${dev_icon}`;
        }

    }

    // let is_simple = document.documentElement.style.getPropertyValue("--dev-icon-simple");
</script>

<div id="main">
    <div class="inside">
        <Icon icon={get_icon()} width="38" height="38"/>
        <span class="icon-text">
            <slot></slot>
        </span>
    </div>
</div>

<style>
    #main {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-color);
        border: 1px solid rgba(255, 255, 255, 0.18);
        height: 58px;
        width: 58px;
    }

    .inside {
        border: red;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-direction: column;
    }

    .icon-text {
        font-size: 1.5em;
        font-weight: bolder;
    }
    #main:hover .icon-text {
        display: block;
    }

    .icon-text {
        font-size: 1.5em;
        font-weight: bolder;
        display: none;
    }
</style>