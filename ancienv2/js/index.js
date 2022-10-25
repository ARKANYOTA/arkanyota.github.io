document.cookie = /*document.cookie ? document.cookie : */"0000"

function changemode() {
    console.log("Change mode")
}

function changelang() {
    console.log("Change lang")
}

function isLight() {
    return localStorage.getItem("light-mode")
}

function toggleRootClass() {
    document.querySelector(":root").classList.toggle("light")
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
            trigger: ".not-home", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse"
        }, left: "1%", transform: "translate(0, -50%)", rotation: 0, duration: 1
    })
    gsap.to(".page1-bg-img", {
        scrollTrigger: {
            trigger: ".not-home", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse"
        }, rotation: 360, duration: 1, opacity: 0,
    })
    gsap.to(".a-menu", {
        scrollTrigger: {
            trigger: ".not-home", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse",
        }, opacity: 0.1, duration: 1, display: "none"
    })
    if (isLight()) {
        toggleRootClass();
    }

    document.querySelector(".theme-icon").addEventListener("click", () => {
        toggleLocalStorageItem();
        toggleRootClass();
    });
    magnifier_code_image();
}


function change_codes_box(number) {
    const elements = document.getElementsByClassName("box-preview-elt");
    if (!elements) return;
    for (let item of elements) {
        item.style.display = "none";
    }
    const proj = document.getElementById("project" + number);
    if (!proj) return;
    proj.style.display = "block";
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

function magnifier_code_image() {
    const IMAGE_SCALE = 2;
    const Personnages = {
        minion: {
            image: "minion.png", out: "-80px", id: "character",
            lefteye: {
                image: "eye2.png",
                l: 85,
                L: 25,
                img_id: "left-eye-img",
                id: "left-eye",
                top: "40px",
                left: "26px",
                width: "24px",
                height: "24px"
            }, righteye: {
                image: "eye2.png",
                l: 85,
                L: 25,
                img_id: "right-eye-img",
                id: "right-eye",
                top: "40px",
                left: "56px",
                width: "24px",
                height: "24px"   // mettre l: 118 pour le faire loucher
            }
        }, morty: {
            image: "morty.png", out: "-100px", id: "character",

            lefteye: {
                image: "eye.png",
                l: 85,
                L: 25,
                img_id: "left-eye-img",
                id: "left-eye",
                top: "38px",
                left: "16px",
                width: "24px",
                height: "24px"
            }, righteye: {
                image: "eye.png",
                l: 85,
                L: 25,
                img_id: "right-eye-img",
                id: "right-eye",
                top: "38px",
                left: "56px",
                width: "24px",
                height: "24px"   // mettre l: 118 pour le faire loucher
            }
        }
    }

    let elements = Personnages.morty;
    // Scale x and Scale y
    let x = 0;
    let y = 0;
    document.getElementById("character-img").src = "images/" + elements.image;

    const Box_Preview_elts = document.getElementsByClassName("box-preview-elt");
    if (!Box_Preview_elts) return;
    for (let Box_Preview_elt of Box_Preview_elts) {
        for (let element of [elements.lefteye, elements.righteye]) {
            if(document.getElementById(element.img_id)) document.getElementById(element.img_id).src = "images/" + element.image;
            document.getElementById(element.id).style.top = element.top;
            document.getElementById(element.id).style.left = element.left;
            document.getElementById(element.id).style.width = element.width;
            document.getElementById(element.id).style.height = element.height;

            let container = Box_Preview_elt.children[0];
            if (container.style.display === "none") continue;
            const Image = container.children[0];
            if (!Image) continue;
            Image.addEventListener("mousemove", (event) => {
                let bounding = adjustedBoundingRect(event.target);
                y = event.clientY - bounding.top;
                x = event.clientX - bounding.left;
                Image.style.transformOrigin = `${Math.floor(x)}px ${Math.floor(y)}px`
                document.getElementById(element.id).style.transform = `rotate(${-calcule_eye_angle(x, y, element.l, element.L)}deg)`;
                document.getElementById("character").style.top = elements.out;

            });
            Image.addEventListener("mouseout", () => {
                Image.style.transform = "scale(1)";
                document.getElementById("character").style.top = "0px";
            })
            Image.addEventListener("mouseover", () => {
                Image.style.transform = `scale(${IMAGE_SCALE})`;
            })
        }
    }


}
