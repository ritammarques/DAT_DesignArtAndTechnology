


document.querySelector("#divvideo").addEventListener("mouseover", play);
document.querySelector("#divvideo").addEventListener("mouseleave", pause);


function play(){
    console.log("play");
    document.getElementById("video").play();



}

function pause() {
    document.getElementById("video").pause();
    console.log("pause");
}
