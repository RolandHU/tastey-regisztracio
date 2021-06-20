window.addEventListener("load", meretezes);
window.addEventListener("resize", meretezes);
window.addEventListener("orientationchange", meretezes);
var szel = window.screen.availWidth;
var mag = window.screen.availHeight;
var logo = document.getElementById("logo");
var fnev = document.getElementById("fnev");
var email = document.getElementById("email");
var jszo = document.getElementById("jszo");
var gomb = document.getElementById("gomb");

function meretezes() {
    var meret = window.screen.availWidth + window.screen.availHeight;
    document.body.style.width = window.screen.availWidth + "px";
    document.body.style.height = window.screen.availHeight + "px";
    console.log(window.screen.availWidth, window.screen.availHeight)
    if (szel != window.screen.availWidth) {
        logo.style.width = meret / 5 + "px";
        fnev.style.width = meret / 5 + "px";
        email.style.width = meret / 5 + "px";
        jszo.style.width = meret / 5 + "px";
        gomb.style.width = (meret / 5) + 22 + "px";
    } else if (window.screen.availWidth > 920) {
        logo.style.width = window.screen.availWidth / 3.5 + "px";
        fnev.style.width = window.screen.availWidth / 3.5 + "px";
        email.style.width = window.screen.availWidth / 3.5 + "px";
        jszo.style.width = window.screen.availWidth / 3.5 + "px";
        gomb.style.width = (window.screen.availWidth / 3.5) + 22 + "px";
    } else {
        logo.style.width = window.screen.availWidth / 1.5 + "px";
        fnev.style.width = window.screen.availWidth / 1.5 + "px";
        email.style.width = window.screen.availWidth / 1.5 + "px";
        jszo.style.width = window.screen.availWidth / 1.5 + "px";
        gomb.style.width = (window.screen.availWidth / 1.5) + 22 + "px";
    }
}