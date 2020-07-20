var loja =[
    document.querySelector(".colecao1>.sweat"),
    document.querySelector(".colecao1>.t-shirt"),
    document.querySelector(".colecao1>.saco"),
    document.querySelector(".colecao2>.sweat"),
    document.querySelector(".colecao2>.t-shirt"),
    document.querySelector(".colecao2>.saco"),
    document.querySelector(".colecao3>.sweat"),
    document.querySelector(".colecao3>.t-shirt"),
    document.querySelector(".colecao3>.saco")
];


var number=1;
var x;
var setaEsq= document. querySelector(".setaE img");
var setaDir= document.querySelector(".setaD img");

setaEsq.addEventListener("click",function(){
    console.log(number);
    number= number-1;

    if(number<0){
        number=loja.length-1;
    }

loja[number].style.display="inherit";
    loja[number-1].style.display="none";
        loja[number-2].style.display="none";
        loja[number-3].style.display="none";
        loja[number-4].style.display="none";
        loja[number-5].style.display="none";
        loja[number-6].style.display="none";
        loja[number-7].style.display="none";
        loja[number-8].style.display="none";
        loja[number-9].style.display="none";

}
);

setaDir.addEventListener("click",function(){
        console.log(number);
        number= number+1;

        if(number>loja.length){
            number=1;
        }

        loja[number].style.display="inherit";
        loja[number-1].style.display="none";
        loja[number-2].style.display="none";
        loja[number-3].style.display="none";
        loja[number-4].style.display="none";
        loja[number-5].style.display="none";
        loja[number-6].style.display="none";
        loja[number-7].style.display="none";
        loja[number-8].style.display="none";
        loja[number-9].style.display="none";

    }
);
