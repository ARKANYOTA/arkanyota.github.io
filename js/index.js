document.cookie = /*document.cookie ? document.cookie : */"0000"
function changemode(){
    console.log("Change mode")
}
function changelang(){
    console.log("Change lang")
}
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
