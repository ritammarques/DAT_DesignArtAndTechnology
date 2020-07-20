

document.querySelector(".ver").addEventListener("click",function(){
    console.log("abrir");
    document.querySelector(".footer").classList.replace("volta", "volta2");
    document.querySelector(".setaD").style.zIndex="0";
    document.querySelector(".setaE").style.zIndex="0";
    document.querySelector(".molduraB").style.zIndex="0";
});
document.querySelector(".voltar").addEventListener("click", function(){
    document.querySelector(".footer").classList.replace("volta2", "volta");
    document.querySelector(".setaD").style.zIndex="1";
    document.querySelector(".setaE").style.zIndex="1";
    document.querySelector(".molduraB").style.zIndex="1";
    console.log("voltar");
});


