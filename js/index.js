document.cookie = /*document.cookie ? document.cookie : */"0000"
function changemode(){
    console.log("Change mode")
}
function changelang(){
    console.log("Change lang")
}
/*
function menu_goto(elt){
    if(elt === 'home'){
        document.getElementById('menu2').style.left = '50%';
        document.getElementById('menu2').style.transform = 'translate(-50%, -50%)';
    } else{
        document.getElementById('menu2').style.left = '5px';
        document.getElementById('menu2').style.transform = 'translate(0, -50%)';
    }
    location.href = "#"+elt;
}
function load_page(){
    let href = location.href.split("#")[1];
    if(!(
        href === 'home' ||
        href === undefined
    )){
        menu_goto(href)
        console.log("i goto to ", href)
    }
}
// https://developer.mozilla.org/fr/docs/Web/API/Document/scroll_event
/*window.addEventListener('scroll', function(e) {
    derniere_position_de_scroll_connue = window.scrollY;
    console.log(derniere_position_de_scroll_connue)
    if(derniere_position_de_scroll_connue <= window.innerHeight){
        document.getElementById('menu2').style.left = (window.innerWidth/2)-derniere_position_de_scroll_connue;
        document.getElementById('menu2').style.transform = 'translate(-50%, -50%)';
        console.log(document.getElementById('menu2').style.left)
    }else{
        document.getElementById('menu2').style.left = '5px';
        document.getElementById('menu2').style.transform = 'translate(0, -50%)';
    }
})*/

function isLight() {
    return localStorage.getItem("light-mode");
}

function toggleRootClass() {
    document.querySelector(":root").classList.toggle("light");
}

function toggleLocalStorageItem() {
    if (isLight()) {
        localStorage.removeItem("light-mode");
    } else {
        localStorage.setItem("light-mode", "set");
    }
}


function load_page() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".menu2", {
        scrollTrigger: {
            trigger: ".not-home",
            scrub: true,
            end: "top 20%",
            toggleActions: "play reverse play reverse"
        },
        left: "1%",
        transform: "translate(0, -50%)",
        rotation: 0,
        duration: 1
    })
    gsap.to(".page1-bg-img", {
        scrollTrigger: {
            trigger: ".not-home",
            scrub: true,
            end: "top 20%",
            toggleActions: "play reverse play reverse"
        },
        rotation: 360,
        duration: 1,
        opacity: 0,
    })
    /*gsap.to(".page2-bg-img", {
        scrollTrigger: {
            trigger: ".not-home",
            scrub: true,
            end: "top 20%",
            toggleActions: "play reverse play reverse"
        },
        duration: 1,
        opacity: 0,
    })*/
    gsap.to(".a-menu", {
        scrollTrigger: {
            trigger: ".not-home",
            scrub: true,
            end: "top 20%",
            toggleActions: "play reverse play reverse",
        },
        opacity: 0.1,
        duration: 1,
        display: "none"
    })
    if (isLight()) {
        toggleRootClass();
    }

    document.querySelector(".theme-icon").addEventListener("click", () => {
        toggleLocalStorageItem();
        toggleRootClass();
    });
}