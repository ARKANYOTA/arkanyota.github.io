<script lang="ts">
    import {onMount} from "svelte";
    import * as LottiePlayer from "@lottiefiles/lottie-player";

    let kill_streak = 0;
    const KILLSTREAKMESSAGE = [
        {message: "Click to copy", color: "#000"},
        {message: "Copied!", color: "#0f0"},
        {message: "Double Copy!", color: "#0e0"},
        {message: "Triple Copy!", color: "#0d0"},
        {message: "Dominating!!", color: "#0c0"},
        {message: "Rampage!!", color: "#0c0"},
        {message: "Mega Copy!!", color: "#0c0"},
        {message: "Unstoppable!!", color: "#0c0"},
        {message: "Wicked Sick!!", color: "#0c0"},
        {message: "Monster Copy!!", color: "#0c0"},
        {message: "GODLIKE!!", color: "#f00", additional_style: "animation: tilt-n-move-shaking 0.15s infinite;"}
    ]

    function load_kill_streak() {
        const contactDiscord: HTMLInputElement | null = document.querySelector("#contact-discord") as HTMLInputElement;

        if(!contactDiscord) return;

        const triangle = contactDiscord.querySelector(".triangle") as HTMLInputElement;
        if(!triangle) return;
        const root = document.querySelector(":root") as HTMLElement;
        if(!root) return;

        contactDiscord.onclick = () => {
            navigator.clipboard.writeText("https://discord.gg/gRhHWXR4").then(r => {
                kill_streak++;
                triangle.innerHTML = KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].message
                // const additional_style = KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].additional_style;
                // if(additional_style){
                //     console.log(additional_style)
                //     triangle.style.animation = additional_style;
                // }else{
                //     triangle.style.cssText = "";
                // }
                root.style.setProperty('--kill-streak-color', KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].color)

            })
        }
        contactDiscord.addEventListener("mouseleave", () => {
            kill_streak = 0;
            triangle.innerHTML = KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].message
            root.style.setProperty('--kill-streak-color', KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].color)
            triangle.style.cssText = "";
        })
    }
    onMount(() => {
        load_kill_streak();
    })

</script>


<div class="preview">
    <a href="https://github.com/ARKANYOTA" id="contact-github" class="contact-box">
        <img class="contact-img" src="icons/contacts-icons/github-icon.svg" alt="github"/>
        <h3 class="link contact-link">ARKANYOTA</h3>
    </a>
    <a href="https://www.instagram.com/arkanyota" class="contact-instagram contact-box">
        <img class="contact-img" src="icons/contacts-icons/instagram-icon.svg" alt="instagram"/>
        <h3 class="link contact-link">ARKANYOTA</h3>
    </a>
    <a class="contact-discord contact-box" id="contact-discord">
        <img class="contact-img" src="icons/contacts-icons/discord-icon.svg" alt="discord"/>
        <h3 class="link selectable contact-link click-to-copy">arkanyota</h3>
        <div class="triangle" id="kill-streak-discord" data-shaking={KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].additional_style ? "true" : "false"} data-color="#000">Click to copy</div>
    </a>
    <a href="https://twitter.com/arkanyota" class="contact-twitter contact-box">
        <div id="twitterbox">
            <!--<img class="contact-img" id="x" src="icons/contacts-icons/icons8-x.svg" alt="X"/>-->
            <lottie-player class="contact-img"
                           src="icons/contacts-icons/lottie-animation/twitter_animation_v3.json"
                           background="transparent" speed="1" hover></lottie-player>
            <!--<img class="contact-img" id="twitter" src="icons/contacts-icons/twitter-icon.svg" alt="twitter"/>-->
        </div>
        <h3 class="link contact-link">arkanyota</h3>
    </a>
    <a href="mailto:arkanyota@icloud.com" class="contact-mail contact-box">
        <img class="contact-img" src="icons/contacts-icons/email-icon.svg" alt="mail"/>
        <h3 class="link contact-link">arkanyota@icloud.com</h3>
    </a>
    <a href="https://www.linkedin.com/in/nolan-carlisi" class="contact-linkedin contact-box">
        <img class="contact-img" src="icons/contacts-icons/linkedin-icon.svg" alt="linkedin"/>
        <h3 class="link contact-link">Nolan Carlisi</h3>
    </a>
</div>

<style>

     .preview {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 1fr);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        align-items: center;
        align-self: center;
        width: 100%;
        min-height: calc(100vh - 2em - 25px);
        height: auto;
    }

    @media (max-width: 768px) {
        .preview {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-column-gap: 0px;
            grid-row-gap: 0px;
            align-items: center;
            align-self: center;
            width: 100%;
            min-height: calc(100vh - 2em - 25px);
            height: auto;
        }

    }

    a {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: 0.5s ease;
    }

    /*a > */
    img.contact-img {
        width: 100px;
        padding-bottom: 10px;
        filter: invert();
        margin: 20px;
    }

    lottie-player.contact-img {
        width: 100px;
        padding-bottom: 10px;
        filter: invert();
    }


    a:hover {
        transform: translate(0px, -20px);
    }

    /**/a:active > .contact-img {
                                       width: 80px;
                                   }

    .triangle::after {
        content: "";
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translate(-50%, 0);
        border-width: 10px 10px 0;
        border-style: solid;
        border-color: var(--kill-streak-color) transparent;
        display: block;
        width: 0;
    }
    .triangle{
        display: none;
        position: absolute;
        padding: 15px;
        margin: 1em 0 3em;
        color: #fff;
        background: var(--kill-streak-color);
        -webkit-border-radius: 10px;
        -moz-border-radius: 10px;
        border-radius: 10px;
        top: 50%;
        transform: translate(0, calc(-50% - 140px));
        font-weight: bold;
    }

    #contact-discord:hover > .triangle{
        display: block;
    }

     .triangle[data-shaking="true"]{
        animation: tilt-n-move-shaking 0.15s infinite;
    }

    /* Sert en mod GODLIKE discord easter egg*/
    @keyframes tilt-n-move-shaking {
        0% { transform: translate(0, calc(-50% - 140px)) translate(0, 0) rotate(0deg); }
        25% { transform: translate(0, calc(-50% - 140px)) translate(5px, 5px) rotate(5deg); }
        50% { transform: translate(0, calc(-50% - 140px)) translate(0, 0) rotate(0deg); }
        75% { transform: translate(0, calc(-50% - 140px)) translate(-5px, 5px) rotate(-5deg); }
        100% { transform: translate(0, calc(-50% - 140px)) translate(0, 0) rotate(0deg); }
    }
</style>
