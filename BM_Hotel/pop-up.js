
let $popupSignIn = document.getElementById("box-sign-in");
let $popupLogin = document.getElementById("box-login");

function openboxSignIn(){
    $popupSignIn.classList.add("boxSignIn-popup");
    $popupLogin.classList.remove("boxLogin-popup");
}

function closeboxSignIn(){
    $popupSignIn.classList.remove("boxSignIn-popup");
}

function openboxLogin(){
    $popupLogin.classList.add("boxLogin-popup");
    $popupSignIn.classList.remove("boxSignIn-popup");
}

function closeboxLogin(){
    $popupLogin.classList.remove("boxLogin-popup");
}

