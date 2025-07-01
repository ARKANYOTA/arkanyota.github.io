<script lang="ts">
    import gsap from "gsap";
    import ScrollTrigger from "gsap/ScrollTrigger";
    import {onMount} from "svelte";
    import Icon from "@iconify/svelte";

    let expanded = $state(false);

    function load_gasp() {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to("#navigation-bar", {
            scrollTrigger: {
                trigger: "section:not(#home)", scrub: true, end: "top 50%", toggleActions: "play reverse play reverse", invalidateOnRefresh: true,
            }, left: "4px", transform: "translate(0, -50%)", rotation: 0, duration: 1
        })
        /*gsap.to(".page1-bg-img", {
            scrollTrigger: {
                trigger: ".not-home", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse"
            }, rotation: 360, duration: 1, opacity: 0,
        })*/

      gsap.to(".nav-list", {
        scrollTrigger: {
          trigger: "section:not(#home)", scrub: true, end: "top 50%", toggleActions: "play reverse play reverse", invalidateOnRefresh: true,
          onLeave: () => expanded = true,
          onEnterBack: () => expanded = false,
        }, left: "4px", paddingRight: 0, rotation: 0, duration: 1
      })
    }

    onMount(() => {
        load_gasp();
    });
</script>

<nav id="navigation-bar">
    <ul class="nav-list" id="nav-list" class:expanded={expanded}>
        <li>
            <a href="#home" class="nav-container" data-name="Home">
              <div class="nav-text-container"><span class="nav-text">Home</span></div>
                <img class="nav-image" src="icons/nav-icons/home.svg" alt="Home">
            </a>
        </li>
        <li>
            <a href="#code" class="nav-container" data-name="Codes">
              <div class="nav-text-container"><span class="nav-text">Codes</span></div>
              <Icon icon="material-symbols:code" width="24" height="24" class="nav-image" color="black"/>
            </a>
        </li>
        <li>
            <a href="#games" class="nav-container" data-name="Games">
              <div class="nav-text-container"><span class="nav-text">Games</span></div>
              <img class="nav-image" src="icons/nav-icons/game.svg" alt="Game">
            </a>
        </li>
        <li>
            <a href="#flag" class="nav-container" data-name="Write Ups">
              <div class="nav-text-container"><span class="nav-text">Write Ups</span></div>
              <img class="nav-image" src="icons/nav-icons/flag.svg" alt="Flag">
            </a>
        </li>
        <li>
            <a href="#compétences" class="nav-container" data-name="Compétences">
              <div class="nav-text-container"><span class="nav-text">Compétences</span></div>
              <Icon icon="mdi:wrench" width="24" height="24" class="nav-image" color="black"/>
            </a>
        </li>
        <li>
            <a href="#about" class="nav-container" data-name="About me">
              <div class="nav-text-container"><span class="nav-text">About me</span></div>
              <img class="nav-image" src="icons/nav-icons/about.svg" alt="About">
            </a>
        </li>
        <li>
            <a href="#contact" class="nav-container" data-name="Contact">
              <div class="nav-text-container"><span class="nav-text">Contact</span></div>
              <img class="nav-image" src="icons/nav-icons/contact.svg" alt="Contact">
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

    #navigation-bar {
      transform: translate(-60px, -50%);
    }

    .nav-list {
        display: flex;
        flex-direction: column;
        list-style: none;
        text-shadow: #121113 2px 2px 2px;
        overflow: hidden;
      border-radius: 5px;
      border-left: #902923 2px solid;
      border-right: #902923 2px solid;
      background-color: var(--background-color);

      /* A transisitoner */
      padding-right: 130px;
    }

    .nav-list.expanded {
        overflow: inherit;
    }

    #nav-list.expanded > li > .nav-container > .nav-text-container > .nav-text {
        opacity: 0;
        width: 0;
        transition: width 0.3s linear;
    }

    #nav-list.expanded > li > .nav-container:hover > .nav-text-container > .nav-text {
        opacity: 1;
        position: absolute;
        border-right: #902923 2px solid;
        border-radius: 0 10px 10px 0;
        padding: 8px 0 8px 15px;
        left: 2px;
        background-color: rgba(42,41,43,0.8);
        display: block;
        width: 130px;
    }

    .nav-text-container {
      width: 130px;
      position: absolute;
      display: flex;
        align-items: center;
      height: calc(32px + 8px*2);
      padding-left: 8px;

      left: calc(32px + 8px*2);
    }

    .nav-text {
        font-weight: bolder;
      overflow: hidden;
      white-space: nowrap;

      /* A transisitoner */
      width: 130px;
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
      position: relative;
        width: 32px;
        height: 32px;
        padding: 8px;
    }

    .nav-image:active {
        width: 20px;
        height: 20px;
    }

    /* .nav-container:hover > .nav-text-container > .nav-text::after {
        position: absolute;
        top: 0;
        left: 0;
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
    } */

</style>