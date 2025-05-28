<script lang="ts">
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import {onMount} from "svelte";
    import Icon from "@iconify/svelte";

    function load_gasp() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#navigation-bar", {
            scrollTrigger: {
                trigger: "section:not(#home)", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse", invalidateOnRefresh: true
            }, left: "4px", transform: "translate(0, -50%)", rotation: 0, duration: 1
        })
        /*gsap.to(".page1-bg-img", {
            scrollTrigger: {
                trigger: ".not-home", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse"
            }, rotation: 360, duration: 1, opacity: 0,
        })*/
        gsap.to(".nav-text", {
            scrollTrigger: {
                trigger: "section:not(#home)", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse", invalidateOnRefresh: true
            }, opacity: 0.1,
            duration: 1,
            display: "none",
            onComplete: () => {
                // Set datahover to true after the animation completes
                document.querySelectorAll(".nav-text").forEach(element => {
                    element.setAttribute("datahover", "true");
                });
            },
            onUpdate: () => {
                // Reset datahover when animation reverses
                document.querySelectorAll(".nav-text").forEach(element => {
                    element.setAttribute("datahover", "false");
                });
            }

        })
    }

    onMount(() => {
        load_gasp();
    });
</script>

<nav id="navigation-bar">
    <ul class="nav-list">
        <li>
            <a href="#home" class="nav-container" data-name="Home">
                <img class="nav-image" src="icons/nav-icons/home.svg" alt="Home">
                <span class="nav-text">Home</span>
            </a>
        </li>
        <li>
            <a href="#code" class="nav-container" data-name="Codes">
                <Icon icon="material-symbols:code" width="24" height="24" class="nav-image" color="black"/>
                <span class="nav-text">Codes</span>
            </a>
        </li>
        <li>
            <a href="#games" class="nav-container" data-name="Games">
                <img class="nav-image" src="icons/nav-icons/game.svg" alt="Game">
                <span class="nav-text">Games</span>
            </a>
        </li>
        <li>
            <a href="#flag" class="nav-container" data-name="Write Ups">
                <img class="nav-image" src="icons/nav-icons/flag.svg" alt="Flag">
                <span class="nav-text">Write Ups</span>
            </a>
        </li>
        <li>
            <a href="#compétences" class="nav-container" data-name="Compétences">
                <Icon icon="mdi:wrench" width="24" height="24" class="nav-image" color="black"/>
                <span class="nav-text">Compétences</span>
            </a>
        </li>
        <li>
            <a href="#about" class="nav-container" data-name="About me">
                <img class="nav-image" src="icons/nav-icons/about.svg" alt="About">
                <span class="nav-text">About me</span>
            </a>
        </li>
        <li>
            <a href="#contact" class="nav-container" data-name="Contact">
                <img class="nav-image" src="icons/nav-icons/contact.svg" alt="Contact">
                <span class="nav-text">Contact</span>
            </a>
        </li>
    </ul>
</nav>

<style>
    nav {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
    }

    .nav-list {
        display: flex;
        flex-direction: column;
        list-style: none;
        text-shadow: #121113 2px 2px 2px;
    }

    .nav-text {
        vertical-align: middle;
        font-weight: bolder;
    }

    .nav-image {
        width: 24px;
        height: 24px;
        vertical-align: middle;
        padding: 12px;
        text-shadow: none;
        text-decoration: none;
        filter: invert();
    }

    .nav-container:hover > .nav-image {
        width: 32px;
        height: 32px;
        padding: 8px;
    }

    .nav-image:active {
        width: 20px;
        height: 20px;
    }

    .nav-container:hover:has(>.nav-text[datahover="true"])::after{
        content: attr(data-name);
        color: var(--text-color);
        text-shadow: var(--main-color) 2px 2px 4px;
        font-weight: bolder;
        vertical-align: middle;
        background: var(--back-color);
        padding: 8px;
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        box-shadow: 2px 2px 9px 3px rgba(255, 128, 128, 0.3);
    }
</style>