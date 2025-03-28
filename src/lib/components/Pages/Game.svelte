<script lang="ts">
    function goto_href(link: string){
        window.location.href = link;
        const loading_bar = document.getElementById("loading_bar");
        if (loading_bar === null) return;
        loading_bar.style.transition = "ease 3s";
        loading_bar.style.width = "80vw";
        setInterval(() => {
            loading_bar.style.transition = "none";
            loading_bar.style.width = "0px"}, 3000)
    }
</script>

<div class="preview">
<button class="games" id="game1" onclick={() => goto_href('https://yolwoocle.itch.io/anchorsandminers')} style="display: none">
    <img src="images/games/logo-anchorsMiners.png" alt="anchorsMiners" class="image" id="anchorsMiners-image">
    <p class="cadre-image-titre cadre-titre">
        <span class="game-title">anchorsMiners</span>
        <a href="https://github.com/ARKANYOTA/LudumDare48_DeeperAndDeeper" class="cadre-github-link">
            <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
        </a>
    </p>
</button>
<button class="games" id="game4" onclick={() => goto_href('https://ninesliced.itch.io/globs')}>
    <img src="images/games/globs_animated.gif" alt="globs_animated" class="animated-gif" id="globs-image">
    <p class="cadre-image-titre cadre-titre">
        <span class="game-title">Globs</span>
        <a href="https://github.com/ARKANYOTA/gmtk2024" class="cadre-github-link">
            <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
        </a>
    </p>
</button>
<button class="games" id="game2" onclick={() => goto_href('https://yolwoocle.itch.io/chaser-of-dawn')}>
    <img src="images/games/logo-chaserOfDawn.png" alt="chaserOfDawn" class="image" id="chaserOfDawn-image">
    <p class="cadre-image-titre cadre-titre">
        <span class="game-title">chaserOfDawn</span>
        <a href="https://github.com/ARKANYOTA/ludumdare47" class="cadre-github-link">
            <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
        </a>
    </p>
</button>
<button class="games" id="game5" onclick={() => goto_href('https://ninesliced.itch.io/the-legend-of-the-goldfish')}>
    <img src="images/games/logo-thelegend-of-the-goldfish.png" alt="the-legend-of-the-goldfish"
         class="image" id="tlogf-image">
    <p class="cadre-image-titre cadre-titre">
        <span class="game-title">The legend of the goldfish</span>
        <a href="https://github.com/Ninesliced/globalgamejam2025" class="cadre-github-link">
            <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
        </a>
    </p>
</button>
<button class="games" id="game3" onclick={() => goto_href('https://yolwoocle.itch.io/octoboom')}>
    <img src="images/games/logo-octoboom.png" alt="Octoboom" class="image" id="Octoboom-image">
    <p class="cadre-image-titre cadre-titre">
        <span class="game-title">Octoboom</span>
        <a href="https://github.com/ARKANYOTA/ludumdare49" class="cadre-github-link">
            <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
        </a>
    </p>
</button>
</div>


<style>
    .preview {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        min-height: calc(100vh - 64px);
        height:auto;
        gap: 20px;
        padding: 30px;
    }

    @media (max-width: 700px) {
        .preview {
            flex-direction: row;
            gap: 100px;
        }
    }

    .games {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        background-color: var(--text-color);
        width: 260px;
        height: auto;
        text-align: center;
        border-radius: 3px;
    }

    .games:hover {
        box-shadow: 2px 2px 9px 3px rgba(255, 128, 128, 0.3);
    }
    .games {
        border: 2px solid transparent;
        transition: all 0.1s ease-in-out;
    }


    .games > .image {
        width: 200px;
        height: 200px;
        margin: 10px 10px 0;
        padding: 20px;
        image-rendering: pixelated;

    }

    .games > #globs-image {
        width: 200px;
        height: auto;
        margin: 10px 10px 0;
        padding: 86px 20px 86px 20px;
    }

    @media (max-width: 700px) {
        .games {
            transform: scale(0.7);
        }
    }

    .games > #anchorsMiners-image {
        background: #7E2553;
    }

    .games > #tlogf-image {
        background: #313358;
    }

    .games > #chaserOfDawn-image {
        background: black;
    }

    .games > #globs-image {
        background: rgb(27, 33, 72);
    }


    .games > #Octoboom-image {
        background: rgb(85, 98, 180);
        background: linear-gradient(9deg, rgba(85, 98, 180, 1) 0%, rgba(99, 155, 255, 1) 100%);
    }

    span.game-title {
        color: var(--back-color);
        padding-bottom: 10px;
        vertical-align: 5px;
        font-weight: bold;
    }

    .games:nth-child(1) {
        transform: scale(0.5) rotate(-5deg);
    }
    .games:nth-child(4) {
        transform: scale(0.9) rotate(5deg);
    }
    .games:nth-child(3) {
        transform: scale(1) rotate(-4deg);
    }

    .games:nth-child(2) {
        transform: scale(1.3) rotate(8deg);
    }
</style>