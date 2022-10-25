let activeIndex = 0;
const slides = document.getElementsByTagName("article");

const Personnages = {
    minion: {
        image: "minion.png", out: "-80px", width: "100px", id: "character", lefteye: {
            image: "eye-minion.png",
            l: 44,
            L: 100,
            img_id: "left-eye-img",
            id: "left-eye",
            top: "40px",
            left: "26px",
            width: "24px",
            height: "24px"
        }, righteye: {
            image: "eye-minion.png",
            l: 44,
            L: 100,
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
        lefteye: {
            image: "eye-random.png",
            l: 24,
            L: 100,
            img_id: "left-eye-img",
            id: "left-eye",
            top: "38px",
            left: "16px",
            width: "24px",
            height: "24px"
        }, righteye: {
            image: "eye-random.png",
            l: 24,
            L: 100,
            img_id: "right-eye-img",
            id: "right-eye",
            top: "38px",
            left: "56px",
            width: "24px",
            height: "24px"
        }
    }
}

function handle_SelectSlide(nextIndex) {
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextIndex}"]`);

    currentSlide.dataset.status = "inactive";
    nextSlide.dataset.status = "active";
    activeIndex = nextIndex;
    return 0;
}

function nextSlide(){
    const nextSlideId = (activeIndex+1)%slides.length
    const currentSlide = document.querySelector(`[data-index="${activeIndex}"]`);
    const nextSlide = document.querySelector(`[data-index="${nextSlideId}"]`);

    currentSlide.dataset.status = "inactive";
    nextSlide.dataset.status = "active";
    activeIndex = nextSlideId;


}
function previousSlide(){
    const nextSlideId = (activeIndex<=0) ?  slides.length-1 : activeIndex-1
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

function calcule_eye_angle(mouse_x, mouse_y, l, L) {
    return Math.atan2/*voir*/(-mouse_y - L, mouse_x - l) * 180 / Math.PI;
}

// https://stackoverflow.com/questions/27745438/how-to-compute-getboundingclientrect-without-considering-transforms
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

/*
function load_magnifier_code_image() {
    const IMAGE_SCALE = 2;

    let elements = Personnages.morty;
    // Scale x and Scale y
    let x = 0;
    let y = 0;
    // Mettre l'image du personnage
    document.getElementById("character-img").src = "images/codes/character/" + elements.image;
    const character_img = document.getElementById("character-img");
    character_img.src = "images/codes/character/" + elements.image;
    character_img.style.width = elements.width;
    // character_img.style.left = elements.out;

    const character = document.getElementById("character");

    const image_Selector = document.querySelector("#code > .page-content > .code-preview > article > .container");
    if (!image_Selector) return;
    // Left eye et right eye setup
    for (let element of [elements.lefteye, elements.righteye]) {
        if (document.getElementById(element.img_id))
            document.getElementById(element.img_id).src = "images/codes/character/" + element.image;
            document.getElementById(element.id).style.top = element.top;
            document.getElementById(element.id).style.left = element.left;
            document.getElementById(element.id).style.width = element.width;
            document.getElementById(element.id).style.height = element.height;

        if (image_Selector.style.display === "none") continue;
        const Image = image_Selector.querySelector(".illustration");
        if (!Image) continue;
        Image.addEventListener("mousemove", (event) => {
             let bounding = adjustedBoundingRect(event.target);
             y = event.clientY - bounding.top;
             x = event.clientX - bounding.left;
             if(x>1 && y>1) Image.style.transformOrigin = `${Math.floor(x)}px ${Math.floor(y)}px`
             document.getElementById(element.id).style.transform = `rotate(${-calcule_eye_angle(x, y, element.l, element.L)}deg)`;
        });
        Image.addEventListener("mouseout", () => {
            Image.style.transform = "scale(1)";
            character.style.top = "0px";
        })
        Image.addEventListener("mouseover", () => {
            Image.style.transform = `scale(${IMAGE_SCALE})`;
            character.style.top = elements.out;
        })
    }
}
 */

function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function load_magnifier_code_image() {
    const IMAGE_SCALE = 2;

    let elements = [Personnages.morty, Personnages.minion][randInt(0, 1)];
    // Scale x and Scale y
    let x = 0;
    let y = 0;
    // Mettre l'image du personnage
    document.getElementById("character-img").src = "images/codes/character/" + elements.image;
    const character_img = document.getElementById("character-img");
    character_img.src = "images/codes/character/" + elements.image;
    character_img.style.width = elements.width;
    // character_img.style.left = elements.out;

    const character = document.getElementById("character");

    const image_Selectors = document.querySelectorAll("#code > .page-content > .code-preview > article > .container");
    if (!image_Selectors) return;
    for(let image_Selector of image_Selectors) {
        // Left eye et right eye setup
        for (let element of [elements.lefteye, elements.righteye]) {
            if (document.getElementById(element.img_id))
                document.getElementById(element.img_id).src = "images/codes/character/" + element.image;
            document.getElementById(element.id).style.top = element.top;
            document.getElementById(element.id).style.left = element.left;
            document.getElementById(element.id).style.width = element.width;
            document.getElementById(element.id).style.height = element.height;

            if (image_Selector.style.display === "none") continue;
            const Image = image_Selector.querySelector(".illustration");
            if (!Image) continue;
            Image.addEventListener("mousemove", (event) => {
                let bounding = adjustedBoundingRect(event.target);
                y = event.clientY - bounding.top;
                x = event.clientX - bounding.left;
                if (x > 1 && y > 1) Image.style.transformOrigin = `${Math.floor(x)}px ${Math.floor(y)}px`
                document.getElementById(element.id).style.transform = `rotate(${-calcule_eye_angle(x, y, element.l, element.L)}deg)`;
            });
            Image.addEventListener("mouseout", () => {
                Image.style.transform = "scale(1)";
                character.style.top = "0px";
            })
            Image.addEventListener("mouseover", () => {
                Image.style.transform = `scale(${IMAGE_SCALE})`;
                character.style.top = elements.out;
            })
        }
    }


}

function on_load() {
    load_gasp();
    load_magnifier_code_image();
}

on_load();

