window.addEventListener("load", meretezes);
window.addEventListener("resize", meretezes);
window.addEventListener("orientationchange", meretezes);
var szel = window.innerWidth;
var mag = window.innerHeight;
var logo = document.getElementById("logo");
var fnev = document.getElementById("fnev");
var email = document.getElementById("email");
var jszo = document.getElementById("jszo");
var gomb = document.getElementById("gomb");

function meretezes() {
    var meret = window.innerWidth + window.innerHeight;
    document.body.style.width = window.innerWidth + "px";
    document.body.style.height = window.innerHeight + "px";
    console.log(window.innerWidth, window.innerHeight)
    if (szel != window.innerWidth) {
        logo.style.width = meret / 5 + "px";
        fnev.style.width = meret / 5 + "px";
        email.style.width = meret / 5 + "px";
        jszo.style.width = meret / 5 + "px";
        gomb.style.width = (meret / 5) + 22 + "px";
    } else if (window.innerWidth > 920) {
        logo.style.width = window.innerWidth / 3.5 + "px";
        fnev.style.width = window.innerWidth / 3.5 + "px";
        email.style.width = window.innerWidth / 3.5 + "px";
        jszo.style.width = window.innerWidth / 3.5 + "px";
        gomb.style.width = (window.innerWidth / 3.5) + 22 + "px";
    } else {
        logo.style.width = window.innerWidth / 1.5 + "px";
        fnev.style.width = window.innerWidth / 1.5 + "px";
        email.style.width = window.innerWidth / 1.5 + "px";
        jszo.style.width = window.innerWidth / 1.5 + "px";
        gomb.style.width = (window.innerWidth / 1.5) + 22 + "px";
    }
}