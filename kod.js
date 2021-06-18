window.addEventListener("resize", meretezes);
window.addEventListener("load", meretezes);
var meret = window.innerWidth;
var logo = document.getElementById("logo");
var fnev = document.getElementById("fnev");
var email = document.getElementById("email");
var jszo = document.getElementById("jszo");
var gomb = document.getElementById("gomb");

function meretezes() {
    meret = window.innerWidth;
    if (meret > 960) {
        logo.style.width = meret / 3.5 + "px";  
        fnev.style.width = meret / 3.5 + "px";
        email.style.width = meret / 3.5 + "px";
        jszo.style.width = meret / 3.5 + "px";
        gomb.style.width = (meret / 3.5) + 22 + "px";  
    } else {
        logo.style.width = meret / 1.5 + "px"; 
        fnev.style.width = meret / 1.5 + "px";
        email.style.width = meret / 1.5 + "px";
        jszo.style.width = meret / 1.5 + "px";
        gomb.style.width = (meret / 1.5) + 22 + "px";
    }  
}