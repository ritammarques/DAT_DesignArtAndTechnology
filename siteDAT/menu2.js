document.querySelector(".topA>.menu").addEventListener("mouseover", aparecer);
document.querySelector(".topA>.menu").addEventListener("mouseover", aparecer1);
document.querySelector(".menuHamburguer").addEventListener("mouseleave", desaparecer);
document.querySelector(".menuHamburguer").addEventListener("mouseleave", desaparecer1);

function aparecer(){
    console.log("aparece");
    document.querySelector(".menuHamburguer").classList.replace("desaparecer", "aparecer");

}
function desaparecer(){
    console.log("desaparece");
    document.querySelector(".menuHamburguer").classList.replace("aparecer", "desaparecer");


}

function desaparecer1(){


    document.querySelector(".bottom1").style.top="0";
}



function aparecer1(){

    document.querySelector(".bottom1").style.top="160px";
}