<script lang="ts">
    import {onMount} from "svelte";

    function load_age(){
        const date = new Date(2004, 11, 26);
        let diff = Date.now() - date.getTime();
        let age = new Date(diff);
        let age_elt = document.getElementById("age");
        if (!age_elt) return;
        age_elt.innerHTML = Math.abs(age.getUTCFullYear() - 1970).toString();
    }

    let old_position = $state({ x: 0, y: 0 });

    function abs(value: number): number {
        return value < 0 ? -value : value;
    }

    onMount(() => {
        load_age();
    });

</script>

<div class="preview">
    <div class="description">
        <p>
            J'ai <span id="age">18</span> ans.
            Passionné par l'informatique, je suis actuellement étudiant ingénieur en sciences du
            numérique. <br/>
            Mes intérêts portent sur la cybersécurité et le développement de jeux. <br/>
            Curieux et avide d'apprendre, j'aime explorer de nouvelles technologies et relever des défis
            complexes. <br/>
        </p>
    </div>
    <div class="path">
        <div class="education" id="joffre">
            <img src="images/aboutme/joffre.png" alt="joffre"/>
            <div class="text">
                <p>Lycée Joffre</p>
                <p>Baccalauréat, Informatics</p>
                <p>Sep 2019 - Jul 2022</p>
                <p>Grade: 2nd, 1re, Tle</p>
            </div>
        </div>
        <div class="education" id="thiers">
            <img src="images/aboutme/thiers.jpg" alt="thiers"/>
            <div class="text">
                <p>CPGE Thiers</p>
                <p>Grande école</p>
                <p>Sep 2022 - Jul 2024</p>
                <p>Grade: Prépa</p>
            </div>
        </div>
        <div class="education" id="n7">
            <img src="images/aboutme/n7.png" alt="thiers"/>
            <div class="text">
                <p>ENSEEIHT</p>
                <p>Ingénieur</p>
                <p>Sep 2022 - Jul 2025</p>
                <p>Grade: Bac+2 to Bac+5</p>
            </div>
        </div>
    </div>
    <div class="cv" id="cv">
        <a href="files/cv/cv_nolan_carlisi_normal.pdf" target="_blank" class="cv-box" >
            <p class="cv-text">CV Normal</p>
            <!--<img src="files/cv/cv_nolan_carlisi_normal@3x.png" alt="cv" class="mini-cv-image"/>-->
        </a>
        <a href="files/cv/cv_nolan_carlisi_print.pdf" target="_blank" class="cv-box">
            <p class="cv-text">CV Web 2</p>
            <!--<img src="files/cv/cv_nolan_carlisi_print@3x.png" alt="cv" class="mini-cv-image"/>-->
        </a>
    </div>
</div>

<style>
    /*
    CV
    */

    .cv-text {
        text-align: center;
        margin: 0 auto;
        padding: 20px ;
        font-size: 20px;
        color: var(--text-color);
        border-left: 2px solid #902923;
        border-right: 2px solid #902923;
        border-radius: 3px;
        background-color: var(--background-color-no-transp);

    }

    .cv-text:hover {
        background-color: #902923;
    }

    .mini-cv-image:hover {
        display: block;
        /* transition: all 0.5s ease-in-out; */
    }

    .cv-text:hover + .mini-cv-image {
        display: block;
        /* transition: all 0.5s ease-in-out; */
    }


    .mini-cv-image {
        display: none;
        position: absolute;
        width: 300px;
        pointer-events: none;
        transform: translate(-50%, -50%);
    }

    .cv {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        height: 50%;
    }







    .preview {
        min-height: calc(100vh - 64px);
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    div {
        display: flex;
        height: 50%;
    }

    .description {
        display: flex;
        height: 50%;
    }

    .description > p {
        text-align: center;
        margin: 0 auto;
        padding: 20px ;
    }

    .path {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        height: 50%;
    }

    /*.path > .education {
        background: rgba( 152, 22, 22, 0.65 );
        box-shadow: 0 8px 32px 0 rgba(255, 0, 0, 0.37);
        backdrop-filter: blur( 8.5px );
        -webkit-backdrop-filter: blur( 8.5px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
    }*/

    /*https://leonardo.ai*/
    .path > .education:hover {
        background: linear-gradient(#0e1011, #0f1012) padding-box, linear-gradient(to bottom, rgba(219, 81, 81, 0.28), rgba(244, 75, 75, 0.32), #6e7bfc2b) border-box;
        border-radius: 22px;
        box-shadow: 2px 2px 9px 3px rgba(255, 128, 128, 0.3);
    }
    .path > .education {
        /*background: linear-gradient(#0e1011, #09090a) padding-box, linear-gradient(to bottom, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.08)) border-box;*/
        border-radius: 22px;
        /*border: 2px solid transparent;*/
        transition: all 0.1s ease-in-out;
        text-align: center;
        width: 400px;
        height: 200px;
        margin: 10px auto;
        overflow: hidden;
        --x: 0;
        --y: 0;
        background-color: var(--background-color);
        border: 1px solid rgba(255, 255, 255, 0.18);
    }


    /*.path > .education:hover > .moving-element {
        position: relative;
        top: var(--y);
        left: var(--x);
        background-image: radial-gradient(circle, rgba(219, 81, 81, 0.28) 0%, rgba(244, 75, 75, 0.32) 17%, rgba(0,0,0,0) 41%);
        border-radius: 60px;
        width: 120px;
        height: 120px;
        transform: translate(-50%, -50%);
        filter: blur(10px);
    }

    .path > .education > .moving-element {
        width: 10px;
        height: 10px;
        transition: width 0.7s, height 0.7s;
    }*/



    /*
    .education::after {
        background: var(--back-color);
        opacity: 0.6;
        content: "";
        display: inline-block;
        position: relative;
        margin: 2px;
        width: calc(100% - 4px);
        height: calc(100% - 4px);
        transform: translateY(calc(-50% - 2px));
        border-radius: 9px;
        z-index: 1;
    }*/

    .path > .education > img {
        position: relative;
        width: 100px;
        height: 100px;
        top: 50%;
        transform: translate(0, -50%);
        border-radius: 50%;
        float: left;
        margin: 0 auto 0 30px;
        z-index: 2;
    }

    .path > .education > .text {
        text-align: right;
        float: right;
        margin-right: 30px;
        position: relative;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }

    @media (max-width: 700px) {
        .path > .education {
            transform: scale(0.7);
        }

        .path > .education > .text {
            font-size: 12px;
        }

    }
</style>