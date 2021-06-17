var fnev = document.getElementById("fnev");
var email = document.getElementById("email");
var jszo = document.getElementById("jszo");
var gomb = document.getElementById("gomb")

jszo.addEventListener("focusin", valtas);
jszo.addEventListener("focusout", valtas2);

function valtas() {
    gomb.style.backgroundColor = "white";
    gomb.style.color = "#ef3e57";
}

function valtas2() {
    gomb.style.backgroundColor = "#ef3e57";
    gomb.style.color = "white";
}

function nezet() {
    if (jszo.type == "password" && jszo.value != "") {
        jszo.type = "text";
    } else {
        jszo.type = "password";
    }
}

function ellenorzes() {
    if (fnev.value != "" && email.value != "" && jszo.value != "") {
        window.alert("Felhasználónév: " + fnev.value + "\nEmail cím: " + email.value + "\nJelszó: " + jszo.value);
    } else {
        window.alert("Sikeretelen regisztráció.");
    }
}