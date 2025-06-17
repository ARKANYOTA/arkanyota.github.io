<script lang="ts">
    import {onMount} from "svelte";
    import IconButton from "$lib/components/Competances/IconButton.svelte";
    import { writable } from "svelte/store";
    import { button_bg_color, active_button } from "$lib/stores";
    import { onDestroy } from "svelte";

    let button_bg_color_value:string = "";  // Valeur initiale
    let active_button_value:string = "";  // Valeur initiale

    // S'abonner au store pour suivre les changements
    const unsubscribe = button_bg_color.subscribe(value => {
        button_bg_color_value = value;  // Mettre à jour la valeur de la distance
    });
    const unsubscribe2 = active_button.subscribe(value => {
        active_button_value = value;  // Mettre à jour la valeur de la distance
    });

    onDestroy(() => {
        unsubscribe();  // Nettoyage de l'abonnement lors de la destruction du composant
        unsubscribe2();  // Nettoyage de l'abonnement lors de la destruction du composant
    });


    let distance_prog_web: number = 200; // a third of real value

    function position() {
        const lists = document.querySelectorAll('.list');
        lists.forEach((list, index) => {
            let n = list.children.length;
            for (let i = 0; i < n; i++) {
                const lang = list.children[i] as HTMLElement;
                lang.style.setProperty('--dx', `${Math.cos(2*i*Math.PI/n) * distance_prog_web}px`);
                lang.style.setProperty('--dy', `${Math.sin(2*i*Math.PI/n) * distance_prog_web}px`);
                lang.style.setProperty('--angle', `${i * 360 / n}deg`);
            }
        });
    }


    function change_distance_prog_web() {
        const prog = document.querySelector('.classe:nth-child(1)') as HTMLElement;
        const web = document.querySelector('.classe:nth-child(2)') as HTMLElement;
        if (prog && web) {
            const progRect = prog.getBoundingClientRect();
            const webRect = web.getBoundingClientRect();

            const progCenterX = progRect.left + progRect.width / 2;
            const progCenterY = progRect.top + progRect.height / 2;

            const webCenterX = webRect.left + webRect.width / 2;
            const webCenterY = webRect.top + webRect.height / 2;

            const distance = Math.sqrt(
                Math.pow(webCenterX - progCenterX, 2) + Math.pow(webCenterY - progCenterY, 2)
            );
            distance_prog_web = distance / 3;
        }
    }

    onMount(() => {
        window.addEventListener('resize', () => {
            position();
        });
        position();
    });


</script>

<!-- DevIcons: https://icon-sets.iconify.design -->
<div class="preview" style="--distance: {distance_prog_web}px;">
    <div class="classe">
        <div class="button-container">
            {#if button_bg_color_value === "" || active_button_value !== "programation"}
                <p class="button">Programation</p>
            {:else}
                <p class="button selected-button" style="--border-color: {button_bg_color_value}">Programation</p>
            {/if}
        </div>
        <ul class="list" style="--number-of-items: 5;">
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="programation" bg_color="#3776AB" dev_icon_simple="python" dev_icon="python">Python</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="programation" bg_color="#616bba" dev_icon_simple="c" dev_icon="c">C</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="programation" bg_color="#e39139" dev_icon_simple="ocaml" dev_icon="ocaml">Ocaml</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="programation" bg_color="#007396" dev_icon_simple="java" dev_icon="java">Java</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="programation" bg_color="#425893" dev_icon_simple="file-icons:nasm" dev_icon="logos:nasm">ASM</IconButton></li>
        </ul>
    </div>

    <div class="classe">
        <div class="button-container">
            {#if button_bg_color_value === "" || active_button_value !== "web"}
                <p class="button">Web</p>
            {:else}
                <p class="button selected-button" style="--border-color: {button_bg_color_value}">Web</p>
            {/if}
        </div>
        <ul class="list" style="--number-of-items: 6;">
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="web" bg_color="#E44D26" dev_icon_simple="html5" dev_icon="html5">HTML</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="web" bg_color="#1572B6" dev_icon_simple="css3" dev_icon="css3">CSS</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="web" bg_color="#3178C6" dev_icon_simple="typescript" dev_icon="typescript">Typescript</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="web" bg_color="#FF3E00" dev_icon_simple="svelte" dev_icon="svelte">Svelte</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="web" bg_color="#5D2F8E" dev_icon_simple="file-icons:prisma" dev_icon="prisma">Prisma</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="web" bg_color="#336791" dev_icon_simple="postgresql" dev_icon="postgresql">Postgresql</IconButton></li>
        </ul>
    </div>

    <div class="classe">

        <div class="button-container">
            {#if button_bg_color_value === "" || active_button_value !== "devops"}
                <p class="button">Annexe</p>
            {:else}
                <p class="button selected-button" style="--border-color: {button_bg_color_value}">Annexe</p>
            {/if}
        </div>
        <ul class="list" style="--number-of-items: 8;">
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#F1502F" dev_icon_simple="git" dev_icon="git">Git</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#2496ED" dev_icon_simple="docker" dev_icon="docker">Docker</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#326CE5" dev_icon_simple="kubernetes" dev_icon="kubernetes">Kubernetes</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#00A300" dev_icon_simple="linux" dev_icon="linux">Linux</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#F5792A" dev_icon_simple="file-icons:blender" dev_icon="blender">Blender</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#5586b5" dev_icon_simple="godot" dev_icon="godot">Godot</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#e9415b" dev_icon_simple="jetbrains" dev_icon="jetbrains">Jetbrains</IconButton></li>
            <li class="lang" style='--dx: 0px; --dy: 0px;'><IconButton active_button_name="devops" bg_color="#019733" dev_icon_simple="vim" dev_icon="vim">Vim</IconButton></li>
        </ul>
    </div>
</div>

<style>
    :root {
        --angle: 30deg;
    }

    .preview {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        min-height: calc(100vh - 64px);
        height: auto;
        gap: 20px;
        padding: 30px 94px 30px 30px;
    }

    @media (max-width: 752px) {
        .preview {
            flex-direction: row;
            gap: 100px;
        }
    }


    .button-container{
        position: relative;
        height: 60px;
        width: 300px;
        margin-top: 16px;
    }
    .button {
        height: 60px;
        width: 300px;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        text-align: center;
        border-radius: 3px;
        /*background-image: linear-gradient(to right, #902923 0%, var(--background-color-no-transp) 1%, var(--background-color-no-transp), var(--background-color-no-transp)99%, #902923 100%) ;*/
        grid-column-start: span 5;
        grid-column-end: auto;
        /*border: var(--border-color) 1px solid;*/
        z-index: 100;
    }

    .button:not(.selected-button){
        border-left: #902923 2px solid;
        border-right: #902923 2px solid;
        background-color: var(--background-color-no-transp);
    }

    .selected-button{
        border-left: var(--border-color) 2px solid;
        border-right: var(--border-color) 2px solid;
        background-image: linear-gradient(to right, var(--border-color) 0%, var(--background-color-no-transp) 10%, var(--background-color-no-transp),
        var(--background-color-no-transp)90%, var(--border-color) 100%) ;

    }


    .classe {
        transform: translateY(0);
    }
    @media (min-width: 752px) {
        .classe:nth-child(1) {
            transform: translateY(-100%);
        }

        .classe:nth-child(2) {
            transform: translateY(100%);
        }

        .classe:nth-child(3) {
            transform: translateY(-100%);
        }
    }


    .button-container:hover + ul, ul:has(>.lang:hover), .list:hover {
        display: block;
    }
    ul {
        display: none;
    }

    .lang {
        color: var(--text-color);
        list-style: none;
        position: absolute;
        transform: translate(var(--dx), var(--dy));
        text-align: center;
        top: -22px;
        left: -30px;
        z-index: 10;

    }

    .list {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
    }

    .list::after {
        content: '';
        position: absolute;
        width: 500px;
        height: 500px;
        border: 1px solid green; /*rgba(255, 255, 255, 0.18);*/
        z-index: 1;
        left: 0;
        top: 0;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        opacity: 0;
    }

     .lang::before {
        content: '';
        position: absolute;
        width: var(--distance);
        /* background-color: var(--background-color); */
        border: 1px dotted rgba(255, 255, 255, 1); /*rgba(255, 255, 255, 0.18);*/
        z-index: -1;

        rotate: var(--angle);
        left: -70px;
        top: 29px;
        transform: translateX(-50%);
    }

    /*.lang::after {
        content: '';
        position: absolute;
        width: var(--distance);
        z-index: 10;
        opacity: 0;

        height: 58px;
        rotate: var(--angle);
        left: -70px;
        top: 0;
        transform: translateX(-50%);
    }*/
</style>