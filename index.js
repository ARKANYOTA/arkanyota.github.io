let activeIndex = 0;
const slides = document.getElementsByTagName("article");

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

function load_gasp() {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to("#navigation-bar", {
        scrollTrigger: {
             trigger: "section:not(#home)", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse", invalidateOnRefresh: true
        }, left: "4px", transform: "translate(0, -50%)", rotation: 0, duration: 1
    })
    /*gsap.to(".page1-bg-img", {
        scrollTrigger: {
            trigger: ".not-home", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse"
        }, rotation: 360, duration: 1, opacity: 0,
    })*/
    gsap.to(".nav-text", {
        scrollTrigger: {
            trigger: "section:not(#home)", scrub: true, end: "top 20%", toggleActions: "play reverse play reverse", invalidateOnRefresh: true
        }, opacity: 0.1,
        duration: 1,
        display: "none",
        onComplete: () => {
            // Set datahover to true after the animation completes
            document.querySelectorAll(".nav-text").forEach(element => {
                element.setAttribute("datahover", "true");
            });
        },
        onUpdate: () => {
            // Reset datahover when animation reverses
            document.querySelectorAll(".nav-text").forEach(element => {
                element.setAttribute("datahover", "false");
            });
        }

    })
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
        navigator.clipboard.writeText("https://discord.com/users/315241140464910349").then(r => {
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
    loading_bar.style.transition = "ease 3s";
    loading_bar.style.width = "80vw";
    setInterval(() => {
        loading_bar.style.transition = "none";
        loading_bar.style.width = "0px"}, 3000)
}
function load_age(){
    const date = new Date(2004, 11, 26);
    let diff = Date.now() - date.getTime();
    let age = new Date(diff); 
    let age_elt = document.getElementById("age");
    age_elt.innerHTML = Math.abs(age.getUTCFullYear() - 1970);
}

function load_moving_elements_path(){
    const education = document.querySelectorAll(".education");
    education.forEach(element => {
        element.addEventListener("mousemove", (event) => {
            const x = event.clientX - element.getBoundingClientRect().left
            const y = event.clientY - element.getBoundingClientRect().top
            element.style.setProperty("--x", x + "px");
            element.style.setProperty("--y", y + "px");
        });
    });
}


function on_load() {
    load_age();
    load_gasp();
    // load_magnifier_code_image();
    // load_easter_egg();
    load_kill_streak();
    load_moving_elements_path();
}

on_load();


