<script lang="ts">
    import Icon from "@iconify/svelte";
    import {onDestroy, onMount} from "svelte";
    import cookie from "cookie";
    import { button_bg_color, active_button } from "$lib/stores";


    export let dev_icon: string;
    export let dev_icon_simple: string;
    export let bg_color: string;
    export let active_button_name: string;

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

    function get_icon_inverse() {
        if(!is_simple) {
            if (dev_icon_simple.includes(":")) return dev_icon_simple;
            return `devicon-plain:${dev_icon_simple}`;
        } else {
            if (dev_icon.includes(":")) return dev_icon;
            return `devicon:${dev_icon}`;
        }
    }


    function handleHoverEnter() {
        button_bg_color.set(bg_color);
        active_button.set(active_button_name);
    }

    function handleHoverLeave() {
        button_bg_color.set("");
        active_button.set("");
    }

    // let is_simple = document.documentElement.style.getPropertyValue("--dev-icon-simple");
</script>

<div id="main" style="--bg-color: {bg_color}" on:mouseenter={handleHoverEnter} on:mouseleave={handleHoverLeave} aria-label="icon-button" aria-roledescription="icon show" role="button" tabindex="0">
    <div class="inside">
        <div class="normal-icon">
            <Icon icon={get_icon()} width="38" height="38"/>
        </div>
        <div class="hover-icon">
            <Icon icon={get_icon_inverse()} width="38" height="38"/>
        </div>
    </div>

    <span class="icon-text">
            <slot></slot>
        </span>
</div>

<style>

    #main {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-color-no-transp);

        /*border: 1px solid rgba(255, 255, 255, 1);*/
        height: 58px;
        width: 58px;
        border-radius: 50%;
        z-index: 1000;
        padding: 3px;
        position: absolute;
    }

    @media screen and (max-width: 751px) {
        #main {
            border-radius: 3px;
            margin: 10px;
            border-right: var(--bg-color) 2px solid;
            border-left: var(--bg-color) 2px solid;
        }

    }


    .inside {
        border: red;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        flex-direction: column;
    }

    #main:hover {
        background-color: var(--bg-color);
    }

    #main > .inside > .normal-icon {
        display: block;
    }
    #main:hover > .inside > .normal-icon {
        display: none;
    }
    #main > .inside > .hover-icon {
        display: none;
    }
    #main:hover > .inside > .hover-icon {
        display: block;
    }

    .icon-text {
        display: none;
    }

    #main:hover > .icon-text {
        display: block;
        position: absolute;
        top: -40px;
        background-color: var(--bg-color);
        border-radius: 5px;
        min-width: 100px;
        padding: 5px;
    }

    .icon-text::before {
        content: '';
        position: absolute;
        top: 100%;
        left: 50%;
        margin-left: -5px;
        border-width: 5px;
        border-style: solid;
        border-color: var(--bg-color) transparent transparent transparent;
    }
</style>

<!--
<style>
    #main {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--background-color-no-transp);

        /*border: 1px solid rgba(255, 255, 255, 1);*/
        height: 58px;
        width: 58px;
        border-radius: 50%;
        z-index: 1000;
        padding: 3px;
        position: absolute;
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
-->