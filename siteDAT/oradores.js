var x = window.matchMedia("(min-width: 860px");

D(x);

function D(x) {
    if (x.matches) {
        var right = document.querySelector(".right").clientWidth;
        var midle = document.querySelector(".midle").clientWidth;
        var left = document.querySelector(".colOradores").clientWidth;
        document.querySelector(".fotografia2").style.width = right - 6 + 'px';
        var f2 = right - 6;
        console.log(f2);
        document.querySelector(".fotografia2>img").setAttribute("width", f2);
        document.querySelector(".fotografia2").style.height = f2 + 'px';
        document.querySelector(".fotografia1>img").setAttribute("width", midle);

        document.querySelector(".fotografia3>img").setAttribute("width", left);

//ter acesso aos valores
        var altura_texto1 = document.querySelector(".textoA").clientHeight;
        console.log(altura_texto1);
        var altura_texto2 = document.querySelector(".textoB").clientHeight;
        var altura_texto3 = document.querySelector(".textoC").clientHeight;
        var altura_linha5 = document.querySelector(".linha5").clientHeight;

        var foto2 = document.querySelector(".fotografia2").clientHeight;
        console.log(foto2);
        var h2 = document.querySelector(".titulo").clientHeight;
        var T = document.querySelector(".T1").clientHeight;
        var D = document.querySelector(".D1").clientWidth;
        var linha3= document.querySelector(".linha3").clientHeight;


        // algumas funçoes
        console.log(h2);
        var metade_foto2 = foto2 / 2;
        var altura_texto1_2 = altura_texto1 / 2 + 17;
        var valor = altura_texto1 - 10;
        var valor1 = altura_texto1 - 20;
        var valor4 = valor + 10;
        var valor2 = valor4 + altura_linha5;
        var valor3 = valor4 + altura_linha5;
        var top_foto2 = valor3 + 20;
        var valor5 = top_foto2 + metade_foto2;
        var valor6 = metade_foto2 + 20;
        var valor7 = altura_texto1_2 + ((valor4 - altura_texto1_2) / 4.2);
        var valor8 = top_foto2 + foto2 + 10;
        var valor9= linha3 + metade_foto2;
// dar valores alturas
        document.querySelector(".textoB").style.top = valor5 - 20 - h2  + 'px';
        document.querySelector(".textoC").style.top = valor8 - 40 + altura_texto2 + 'px';
        document.querySelector(".D1").style.marginTop = altura_texto1 + 'px';
        document.querySelector(".D1").style.marginLeft = right - (D / 1.2) + 'px';


        document.querySelector(".A2").style.marginTop = valor + 'px';
        document.querySelector(".linha4").style.marginTop = valor4 + 'px';
        document.querySelector(".linha3").style.height = valor2 + 'px';
        document.querySelector(".linha1").style.height = altura_texto1_2 + 'px';
        document.querySelector(".linha2").style.marginTop = altura_texto1_2 + 'px';
        document.querySelector(".linha5").style.marginTop = valor4 + 'px';
        document.querySelector(".linha6").style.marginTop = valor3 + 'px';
        document.querySelector(".fotografia2").style.marginTop = top_foto2 + 'px';
        document.querySelector(".linha11").style.marginTop = valor3 + 'px';
        document.querySelector(".linha7").style.marginTop = valor5 + 'px';
        document.querySelector(".fotografia1").style.marginTop = valor7 + 'px';
        document.querySelector(".linha8").style.marginTop = valor8 + 'px';
        document.querySelector(".linha9").style.marginTop = valor8 + 'px';
        document.querySelector(".linha10").style.marginTop = valor8 + 'px';
        document.querySelector(".T1").style.marginTop = valor8 + 20 + 'px';
        document.querySelector(".A3").style.marginTop = valor8 + 20 + 'px';


        document.querySelector(".titulo").style.marginBottom = metade_foto2 - h2 + 20 + 'px';
        document.querySelector(".linha13").style.marginTop = valor8 - 40 + altura_texto2 -160 + 'px';
        document.querySelector(".linha12").style.marginTop = valor8 - 37 + altura_texto2  -160+ 'px';
        document.querySelector(".linha10").style.marginTop = valor8 + 3 + 'px';
        document.querySelector(".linha10").style.height = altura_texto2 + altura_texto3 - 60 + 'px';
        document.querySelector(".linha12").style.height = altura_texto3 + 'px';

        // dar valores larguras
        document.querySelector(".linha2").style.width = midle + 'px';
        document.querySelector(".linha3").style.left = midle + 'px';
        document.querySelector(".fotografia1").style.width = midle + 'px';
        document.querySelector(".linha4").style.width = midle + 'px';
        document.querySelector(".linha6").style.width = midle + 'px';
        document.querySelector(".linha11").style.width = right + 'px';
        document.querySelector(".linha7").style.width = right + 'px';
        document.querySelector(".linha8").style.width = right + 'px';
        document.querySelector(".linha9").style.width = midle + 'px';
        document.querySelector(".linha13").style.width = right + 'px';
        document.querySelector(".linha12").style.left = midle - 3 + 'px';
        document.querySelector(".fotografia3 .molduraB").style.width = left - 20 + 'px';
        document.querySelector(".molduraA").style.width = left - 20 + 'px';








    }

}
