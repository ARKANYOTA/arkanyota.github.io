let activeIndex = 0;
const IMAGE_SCALE = 2;
const slides = document.getElementsByTagName("article");
let eyel = 0, eyeL = 0, eyeOut = 0;
const Personnages = {
    minion: {
        image: "minion.png",
        out: "-80px",
        width: "100px",
        id: "character",
        l: 44,
        L: 100,
        lefteye: {
            image: "eye-minion.png",
            img_id: "left-eye-img",
            id: "left-eye",
            top: "40px",
            left: "26px",
            width: "24px",
            height: "24px"
        },
        righteye: {
            image: "eye-minion.png",
            img_id: "right-eye-img",
            id: "right-eye",
            top: "40px",
            left: "56px",
            width: "24px",
            height: "24px"
        }
    }, morty: {
        width: "100px",
        image: "morty.png",
        out: "-85px",
        id: "character",
        l: 24,
        L: 100,
        lefteye: {
            image: "eye-random.png",
            img_id: "left-eye-img",
            id: "left-eye",
            top: "38px",
            left: "16px",
            width: "24px",
            height: "24px"
        },
        righteye: {
            image: "eye-random.png",
            img_id: "right-eye-img",
            id: "right-eye",
            top: "38px",
            left: "56px",
            width: "24px",
            height: "24px"
        }
    }, pingun: {
        width: "200px",
        image: "pingun.png",
        out: "-85px",
        id: "character",
        l: 74,
        L: 100,
        lefteye: {
            image: "eye-pingun.png",
            img_id: "left-eye-img",
            id: "left-eye",
            top: "34px",
            left: "76px",
            width: "18px",
            height: "18px"
        },
        righteye: {
            image: "eye-pingun.png",
            img_id: "right-eye-img",
            id: "right-eye",
            top: "34px",
            left: "102px",
            width: "18px",
            height: "18px"
        }
    }
}

/* Discord kill streak easter egg */
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

/* Slides dans la section Code */
function handle_SelectSlide(nextIndex) {
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "inactive";
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
    return 0;
}

function nextSlide() {
    const nextSlideId = (activeIndex + 1) % slides.length
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextSlideId}"]`);

    currentSlide.dataset.status = "inactive";
    nextSlide.dataset.status = "active";
    activeIndex = nextSlideId;


}

function previousSlide() {
    const nextSlideId = (activeIndex <= 0) ? slides.length - 1 : activeIndex - 1
    console.log(nextSlideId)
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextSlideId}"]`);

    currentSlide.dataset.status = "inactive";
    nextSlide.dataset.status = "active";
    activeIndex = nextSlideId;
}


function load_gasp() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#navigation-bar", {
        scrollTrigger: {
            trigger: "section:not(#home)", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse"
        }, left: "4px", transform: "translate(0, -50%)", rotation: 0, duration: 1
    })
    /*gsap.to(".page1-bg-img", {
        scrollTrigger: {
            trigger: ".not-home", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse"
        }, rotation: 360, duration: 1, opacity: 0,
    })*/
    gsap.to(".nav-text", {
        scrollTrigger: {
            trigger: "section:not(#home)", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse",
        }, opacity: 0.1, duration: 1, display: "none"
    })
}

/* Trigonométrie pour calculer l'angle de l'œil, (j'ai fait le calcul, mais je ne sais plus trop pk ça marche) */
function calcule_eye_angle(mouse_x, mouse_y, l, L) {
    return Math.atan2/*voir*/(-mouse_y - L, mouse_x - l) * 180 / Math.PI;
}

// https://stackoverflow.com/questions/27745438/how-to-compute-getboundingclientrect-without-considering-transforms (Btw je n'ai pas cherché à comprendre, ça marche)
function adjustedBoundingRect(el) {
    var rect = el.getBoundingClientRect();
    var style = getComputedStyle(el);
    var tx = style.transform;

    if (tx) {
        var sx, sy, dx, dy;
        if (tx.startsWith('matrix3d(')) {
            var ta = tx.slice(9, -1).split(/, /);
            sx = +ta[0];
            sy = +ta[5];
            dx = +ta[12];
            dy = +ta[13];
        } else if (tx.startsWith('matrix(')) {
            var ta = tx.slice(7, -1).split(/, /);
            sx = +ta[0];
            sy = +ta[3];
            dx = +ta[4];
            dy = +ta[5];
        } else {
            return rect;
        }

        var to = style.transformOrigin;
        var x = rect.x - dx - (1 - sx) * parseFloat(to);
        var y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(' ') + 1));
        var w = sx ? rect.width / sx : el.offsetWidth;
        var h = sy ? rect.height / sy : el.offsetHeight;
        return {
            x: x, y: y, width: w, height: h, top: y, right: x + w, bottom: y + h, left: x
        };
    } else {
        return rect;
    }
}

// ça sert à rien, mais au cas où
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// Section Codes change personage
function changeCharacter(character) {
    document.getElementById("character-img").src = "images/codes/character/" + character.image;
    const character_img = document.getElementById("character-img");
    character_img.src = "images/codes/character/" + character.image;
    character_img.style.width = character.width;
    for (let element of [character.lefteye, character.righteye]) {
        if (document.getElementById(element.img_id)) document.getElementById(element.img_id).src = "images/codes/character/" + element.image;
        document.getElementById(element.id).style.top = element.top;
        document.getElementById(element.id).style.left = element.left;
        document.getElementById(element.id).style.width = element.width;
        document.getElementById(element.id).style.height = element.height;
    }
    eyel = character.l;
    eyeL = character.L;
    eyeOut = character.out;
}


function load_magnifier_code_image() {
    let x = 0;
    let y = 0;

    const elements = [Personnages.morty, Personnages.minion][randInt(0, 1)];
    const character = document.getElementById("character");
    changeCharacter(elements)

    // Left eye et right eye setup
    const image_Selectors = document.querySelectorAll("#code > .page-content > .code-preview > article > .container");
    if (!image_Selectors) return;
    for (let image_Selector of image_Selectors) {
        if (image_Selector.style.display === "none") continue;
        const Image = image_Selector.querySelector(".illustration");
        if (!Image) continue;
        Image.addEventListener("mousemove", (event) => {
            let bounding = adjustedBoundingRect(event.target);
            y = event.clientY - bounding.top;
            x = event.clientX - bounding.left;
            if (x > 1 && y > 1) Image.style.transformOrigin = `${Math.floor(x)}px ${Math.floor(y)}px`
        });
        Image.addEventListener("mouseout", () => {
            Image.style.transform = "scale(1)";
        })
        Image.addEventListener("mouseover", () => {
            Image.style.transform = `scale(${IMAGE_SCALE})`;
        })

        for (let element of [elements.lefteye, elements.righteye]) {
            Image.addEventListener("mousemove", (event) => {
                let bounding = adjustedBoundingRect(event.target);
                y = event.clientY - bounding.top;
                x = event.clientX - bounding.left;
                document.getElementById(element.id).style.transform = `rotate(${-calcule_eye_angle(x, y, eyel, eyeL)}deg)`;
            });
        }
        Image.addEventListener("mouseout", () => {
            character.style.top = "0px";
        })
        Image.addEventListener("mouseover", () => {
            character.style.top = eyeOut;
        })
    }
}

/*Easter egg*/
function load_easter_egg() {
    let lastKeyIsG = false;
    document.addEventListener("keydown", (event) => {
        if (event.key === "g") {
            if (lastKeyIsG) {
                window.scrollTo(0, 0);
                changeCharacter(Personnages.pingun)
            }

            lastKeyIsG = !lastKeyIsG
        }
    })


}

function load_kill_streak() {
    const contactDiscord = document.querySelector("#contact-discord");

    contactDiscord.onclick = () => {
        navigator.clipboard.writeText("arkanyota#3321").then(r => {
            kill_streak++;
            contactDiscord.querySelector(".triangle").innerHTML = KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].message
            if(KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].additional_style){
                contactDiscord.querySelector(".triangle").style = KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].additional_style
            }else{
                contactDiscord.querySelector(".triangle").style = "";
            }
            document.querySelector(":root").style.setProperty('--kill-streak-color', KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].color)

        })
    }
    contactDiscord.addEventListener("mouseleave", () => {
        kill_streak = 0;
        contactDiscord.querySelector(".triangle").innerHTML = KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].message
        document.querySelector(":root").style.setProperty('--kill-streak-color', KILLSTREAKMESSAGE[Math.min(kill_streak, KILLSTREAKMESSAGE.length - 1)].color)
        contactDiscord.querySelector(".triangle").style = "";
    })
}


/* Fix probleme de façon pas propre, (removable) href sur toute la carte */
function goto_href(link){
    window.location = link;
    const loading_bar = document.getElementById("loading_bar");
    loading_bar.style.width = "80vw"
}

function load_age(){
    const date = new Date(2004, 11, 26);
    let diff = Date.now() - date.getTime();
    let age = new Date(diff); 
    let age_elt = document.getElementById("age");
    age_elt.innerHTML = Math.abs(age.getUTCFullYear() - 1970);
}

function on_load() {
    load_age();
    load_gasp();
    load_magnifier_code_image();
    load_easter_egg();
    load_kill_streak()
}

on_load();


