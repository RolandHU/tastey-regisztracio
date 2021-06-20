window.addEventListener("load", meretezes);
window.addEventListener("resize", meretezes);
window.addEventListener("orientationchange", meretezes);
var szel = window.outerWidth;
var mag = window.outerHeight;
var logo = document.getElementById("logo");
var fnev = document.getElementById("fnev");
var email = document.getElementById("email");
var jszo = document.getElementById("jszo");
var gomb = document.getElementById("gomb");

function meretezes() {
    var meret = window.outerWidth + window.outerHeight;
    document.body.style.width = window.outerWidth + "px";
    document.body.style.height = window.outerHeight + "px";
    if (szel != window.outerWidth) {
        logo.style.width = meret / 5 + "px";
        fnev.style.width = meret / 5 + "px";
        email.style.width = meret / 5 + "px";
        jszo.style.width = meret / 5 + "px";
        gomb.style.width = (meret / 5) + 22 + "px";
    } else if (window.outerWidth > 920) {
        logo.style.width = window.outerWidth / 3.5 + "px";
        fnev.style.width = window.outerWidth / 3.5 + "px";
        email.style.width = window.outerWidth / 3.5 + "px";
        jszo.style.width = window.outerWidth / 3.5 + "px";
        gomb.style.width = (window.outerWidth / 3.5) + 22 + "px";
    } else {
        logo.style.width = window.outerWidth / 1.5 + "px";
        fnev.style.width = window.outerWidth / 1.5 + "px";
        email.style.width = window.outerWidth / 1.5 + "px";
        jszo.style.width = window.outerWidth / 1.5 + "px";
        gomb.style.width = (window.outerWidth / 1.5) + 22 + "px";
    }
}