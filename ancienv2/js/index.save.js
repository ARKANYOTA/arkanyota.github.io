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
    magnifier_code_image();
}


function change_codes_box(number){
    const elements = document.getElementsByClassName("box-preview-elt");
    if(!elements) return;
    for (let item of elements) {
        item.style.display = "none";
    }
    const proj = document.getElementById("project"+number);
    if(!proj) return;
    proj.style.display = "block";
}

function calcule_eye_angle(mouse_x, mouse_y, l, L){
    return Math.atan2/*voir*/(-mouse_y - L, mouse_x-l) * 180 / Math.PI;
}

// https://stackoverflow.com/questions/27745438/how-to-compute-getboundingclientrect-without-considering-transforms
function adjustedBoundingRect(el) {
    var rect = el.getBoundingClientRect();
    var style = getComputedStyle(el);
    var tx = style.transform;

    if (tx) {
        var sx, sy, dx, dy;
        if (tx.startsWith('matrix3d(')) {
            var ta = tx.slice(9,-1).split(/, /);
            sx = +ta[0];
            sy = +ta[5];
            dx = +ta[12];
            dy = +ta[13];
        } else if (tx.startsWith('matrix(')) {
            var ta = tx.slice(7,-1).split(/, /);
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
    const Grossissement = 2;
    const elements = [
        {
            l : 85,
            L : 25,
            name:"left-eye"
        }, {
            l: 85,   // mettre 118 pour le faire loucher
            L : 25,
            name:"right-eye"
        }
    ]   // mesurer
    // const l = 25; // axe x
    // const L = 85;  // axe y
    let x = 0;
    let y = 0;

    for(let element of elements) {
        const Box_Preview_elts = document.getElementsByClassName("box-preview-elt");
        console.log(Box_Preview_elts)
        if (!Box_Preview_elts) return;
        for (let Box_Preview_elt of Box_Preview_elts) {
            let container = Box_Preview_elt.children[0];
            console.log(container.style.display, "d")
            if(container.style.display === "none") continue;
            console.log("displayed")
            const Image = container.children[0];
            if (!Image) continue;
            Box_Preview_elt.addEventListener("mousemove", (event) => {

                let nbounding = adjustedBoundingRect(event.target);
                y = event.clientY - nbounding.top;
                x = event.clientX - nbounding.left;
                document.getElementById(element.name).style.transform = `rotate(${-calcule_eye_angle(x, y, element.l, element.L)}deg)`;
            });
            Image.addEventListener("mousemove", (event) => {

                let nbounding = adjustedBoundingRect(event.target);
                y = event.clientY - nbounding.top;
                x = event.clientX - nbounding.left;
                Image.style.transformOrigin = `${Math.floor(x)}px ${Math.floor(y)}px`
            });
            Image.addEventListener("mouseout", (event) => {
                Image.style.transform = "scale(1)";
            })
            Image.addEventListener("mouseover", (event) => {
                Image.style.transform = "scale(" + Grossissement + ")";
            })
        }
    }
}
/* V1
function magnifier_code_image(){
    const Grossissement = 2;
    const l = 25; // axe x
    const L = 85;  // axe y
    //
    // const l = 25; // axe x
    // const L = 85;  // axe y
    const Containers = document.getElementsByClassName("code-image-container");
    if(!Containers) return;
    for (let container of Containers) {
        const Image = container.children[0];
        if (!Image) continue;
        container.addEventListener("mousemove", (event) => {
            console.log(event.offsetY, event.offsetX, "minion eye");
            Image.style.transformOrigin = `${event.offsetX}px ${event.offsetY}px`;
            console.log(calcule_eye_angle(event.offsetX, event.offsetY), "minion eye");
            document.getElementById("mesuer").style.transform = `rotate(${-calcule_eye_angle(event.offsetX, event.offsetY, l, L)}deg)`;
        });
        container.addEventListener("mouseout", (event) => {
            Image.style.transform = "scale(1)";
        })
        container.addEventListener("mouseover", (event) => {
            Image.style.transform = "scale("+Grossissement+")";
        })
    }
}


V2


function magnifier_code_image() {
    const Grossissement = 2;
    const elements = [
        {
            l : 85,
            L : 25,
            name:"left-eye"
        }, {
            l: 85,   // mettre 118 pour le faire loucher
            L : 25,
            name:"right-eye"
        }
    ]   // mesurer
    // const l = 25; // axe x
    // const L = 85;  // axe y
    let x = 0;
    let y = 0;

    for(let element of elements) {
        const Containers = document.getElementsByClassName("code-image-container");
        console.log(Containers)
        if (!Containers) return;
        for (let container of Containers) {
            console.log(container.style.display, "d")
            if(container.style.display === "none") continue;
            const Image = container.children[0];
            if (!Image) continue;
            container.addEventListener("mousemove", (event) => {

                let bounding = event.target.getBoundingClientRect();
                let nbounding = adjustedBoundingRect(event.target);
                y = event.clientY - nbounding.top;
                x = event.clientX - nbounding.left;

                // console.log(event.clientY, bounding.top, bounding.x, bounding.y)
                // console.log("y, y =>", Math.floor(y), Math.floor(x), "minion eye => angle", calcule_eye_angle(x, y, l, L));
                Image.style.transformOrigin = `${Math.floor(x)}px ${Math.floor(y)}px`
                document.getElementById(element.name).style.transform = `rotate(${-calcule_eye_angle(x, y, element.l, element.L)}deg)`;
            });
            container.addEventListener("mouseout", (event) => {
                Image.style.transform = "scale(1)";
            })
            container.addEventListener("mouseover", (event) => {
                Image.style.transform = "scale(" + Grossissement + ")";
            })
        }
    }
}
 */
