valores();
var alturalinha15= document.querySelector(".linha15").clientHeight;
var alturalinha16=document.querySelector(".linha16").clientHeight;


var value1= 150;
var value2= value1 + alturalinha15 + alturalinha16;
var value3= value1+ alturalinha15;


console.log(value1);
console.log(value3);
    console.log(value2);
console.log(alturalinha16);
console.log(alturalinha15);
function valores(){
    var alturalinha15= document.querySelector(".linha15").clientHeight;
    var alturalinha16=document.querySelector(".linha16").clientHeight;
    var value1= 145;
    var value2= value1 + alturalinha15 + alturalinha16;
    var value3= value1+ alturalinha15;

    document.querySelector(".linha16").style.top=value3 - 6 +  'px';
    document.querySelector(".linha17").style.top= value2 - 6 + 'px';
}
