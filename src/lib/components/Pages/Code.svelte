<div class="code-preview">
    <div class="code-element">
        <div class="container">
            <img src="images/codes/RayMarchingC.png" alt="RayMarchingC illustration" class="illustration">
        </div>
        <h3> ARKANYOTA <span class="slash">/</span> RayMarchingC </h3>
        <p class="code-desc">
            Un raymarching en C.
        </p>
        <div class="icons-links">
            <a href="https://github.com/ARKANYOTA/RayMarchingC">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
    <div class="code-element">
        <div class="container">
            <img src="images/codes/ProofTreeOcaml.png" alt="ProofTreeOcaml illustration"
                 class="illustration">
        </div>
        <h3> ARKANYOTA <span class="slash">/</span> ProofTreeOcaml </h3>
        <p class="code-desc">
            Permet de prouver des théorèmes en logique propositionnelle, et de le visualiser avec LaTeX.
            Ecrit en OCaml.
        </p>
        <div class="icons-links">
            <a href="https://github.com/ARKANYOTA/ProofTreeOcaml">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
    <div>
        <div class="container">
            <img src="images/codes/GalaxyBrainAndCoauthored.png" alt="GalaxyBrainAndCoauthored illustration"
                 class="illustration">
        </div>
        <h3> ARKANYOTA <span class="slash">/</span> GalaxyBrainValidator | ARKANYOTA <span
                class="slash">/</span> CoauthoredValidator </h3>
        <p class="code-desc">
            Permet de faire les achivements de GalaxyBrain et Coauthored sur Github.
        </p>
        <div class="icons-links">
            <a href="https://github.com/ARKANYOTA/GalaxyBrainValidator">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
            <a href="https://github.com/ARKANYOTA/CoauthoredValidator">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
    <div>
        <div class="container">
            <img src="images/codes/DrawOnGithubActivity.png" alt="DrawOnGithubActivity illustration"
                 class="illustration">
        </div>
        <h3>
            ARKANYOTA <span class="slash">/</span> DrawOnGithubActivity
        </h3>
        <p class="code-desc">
            Permet de dessiner sur son activité Github avec une image à une date donnée.
        </p>
        <div class="icons-links">
            <a href="https://github.com/ARKANYOTA/DrawOnGithubActivity">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
    <div>
        <div class="container">
            <img src="images/codes/doomineur.png" alt="doomineur illustration" class="illustration">
        </div>
        <h3>
            PouletRaphoo <span class="slash">/</span> Doomineur
        </h3>
        <p class="code-desc">
            Un raycaster ecrit en python et OpenGL.
        </p>
        <div class="icons-links">
            <a href="https://github.com/PouletRaphoo/Doomineur">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
    <div>
        <div class="container">
            <img src="images/codes/asm-minesweeper.png" alt="asm-minesweeper illustration"
                 class="illustration">
        </div>
        <h3>
            ARKANYOTA <span class="slash">/</span> ASM-Minesweeper
        </h3>
        <p class="code-desc">
            Un démineur en assembleur x86-64
        </p>
        <div class="icons-links">
            <a href="https://github.com/ARKANYOTA/ASM-Minesweeper">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
    <div>
        <div class="container">
            <img src="images/codes/venal.png" alt="venal illustration" class="illustration">
        </div>
        <h3>
            ARKANYOTA <span class="slash">/</span> Venal
        </h3>
        <p class="code-desc">
            Vlc player on terminal.
        </p>
        <div class="icons-links">
            <a href="https://github.com/ARKANYOTA/Venal">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
    <div>
        <div class="container">
            <img src="images/codes/fr-grid-clock.png" alt="fr grid clock" class="illustration">
        </div>
        <h3>
            ARKANYOTA <span class="slash">/</span> fr-grid-clock-screensaver
        </h3>
        <p class="code-desc">
            L'heure affichée avec du texte sous la forme d'une grille
        </p>
        <div class="icons-links">
            <a href="https://github.com/ARKANYOTA/fr-grid-clock-screensaver">
                <img src="icons/contacts-icons/github-icon.svg" alt="github" class="github-link"/>
            </a>
        </div>
    </div>
</div>

<style>
    /* Code page */
    .code-preview{
        columns: 400px;
        break-inside: avoid;
    }

    .code-preview > div {
        break-inside: avoid-column;
        margin: 20px;
        display: inline-block;
        padding: 0;
        border-radius: 9px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        position: relative;
        /*background: linear-gradient(#0e1011, #09090a) padding-box, linear-gradient(to bottom, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.08)) border-box;*/
        background-color: var(--background-color);
    }

    .code-preview > div:hover {
        background: linear-gradient(#0e1011, #0f1012) padding-box, linear-gradient(to bottom, rgba(219, 81, 81, 0.28), rgba(244, 75, 75, 0.32), #6e7bfc2b) border-box;
    }

    .code-preview > div::after {
        content: "";
        border-radius: 8px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 10px;
    }

    .code-preview > div:hover::after {
        content: "";
        box-shadow: 2px 2px 9px 3px rgba(255, 128, 128, 0.3);
        border-radius: 8px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 10px;
    }

    .illustration {
        width: 100%;
        height: auto;
    }

    .code-preview > div > h3 {
        color: var(--text-color);
        padding: 0 10px 10px;
    }

    .code-preview > div > p {
        color: var(--text-color);
        padding: 10px;
        margin-right: 120px;
    }

    .github-link {
        z-index: 5;
        width: 48px;
        padding: 10px;
        filter: invert();
    }

    .icons-links {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 100;
    }
</style>