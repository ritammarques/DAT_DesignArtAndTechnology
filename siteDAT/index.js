var animacao= [
    document.querySelector(".svg1"), document.querySelector(".svg2"),document.querySelector(".svg3A"), document.querySelector(".svg3B"),document.querySelector(".svg4"), document.querySelector(".svg5"), document.querySelector(".svg6"), document.querySelector(".svg7"), document.querySelector(".svg8"), document.querySelector(".svg9")
]
function Tempo(max) {

        return Math.floor(Math.random() * Math.floor(max));
        // site mozilla Math.random

}
function Tempo2(min, max) {
    return Math.random() * (max - min) + min;
    //site mozilla Math.random
}

var Temporizador=0;
temporizador();

function temporizador(){

    setTimeout("mudarFrame()", 300);
}


function mudarFrame(){
    Temporizador++;
    if(Temporizador >= Tempo2(8, 40)){
        Temporizador=0;
        animacao[0].classList.replace("visivel","invisivel");
        animacao[1].classList.replace("visivel","invisivel");
        animacao[2].classList.replace("visivel","invisivel");
        animacao[3].classList.replace("visivel","invisivel");
        animacao[4].classList.replace("visivel","invisivel");
        animacao[5].classList.replace("visivel","invisivel");
        animacao[6].classList.replace("visivel","invisivel");
        animacao[7].classList.replace("visivel","invisivel");
        animacao[8].classList.replace("visivel","invisivel");
        animacao[9].classList.replace("visivel","invisivel");



        document.querySelector(".principal").style.backgroundColor="white";



    }else{
        document.querySelector(".principal").style.backgroundColor="black";

    animacao[Tempo(10)].classList.replace("invisivel","visivel");


   }

    temporizador();
}
