window.addEventListener("load", meretezes);
window.addEventListener("resize", meretezes);
window.addEventListener("orientationchange", meretezes);
var logo = document.getElementById("logo");
var fnev = document.getElementById("fnev");
var email = document.getElementById("email");
var jszo = document.getElementById("jszo");
var gomb = document.getElementById("gomb");

function meretezes() {
    document.body.style.width = window.outerWidth + "px";
    document.body.style.height = window.innerHeight + "px";
    console.log(window.outerHeight)
    meret = window.innerWidth + window.innerHeight;
    console.log(meret)
    logo.style.width = meret / 5.5 + "px";
    fnev.style.width = meret / 5.5 + "px";
    email.style.width = meret / 5.5 + "px";
    jszo.style.width = meret / 5.5 + "px";
    gomb.style.width = (meret / 5.5) + 22 + "px";  
}