
const form = document.getElementById("form");

form.addEventListener("submit",function(e){
    e.verifForm();
});


var p = document.getElementById("pwd");
var cp = document.getElementById("cpwd");

// Functions valide password
function validePwd(champ){
    let valeur = champ.value;
    return valeur;
}

function valideCPwd(champ){
    let valeur = champ.value;
    return valeur;
}

// Function Main
function verifForm(f){
    var pwd = validePwd(f.pwd);
    var cpwd = valideCPwd(f.cpwd);
    if(pwd === cpwd){
        return true;
    }else{
        p.style.borderBottom = "red 1px solid";
        cp.style.borderBottom = "red 1px solid";
        return false;
    }
}