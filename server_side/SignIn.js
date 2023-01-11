const form = document.getElementById("form");

form.addEventListener("submit",function(e){
    e.verifForm();
});

var pwd = document.getElementById('pwd');
var pt = document.getElementById('post_id');
var em = document.getElementById('email');

// Function valide Post id
function validePostId(champ){
    var i,count = 0;
    champ.value = champ.value.toUpperCase();
    let post = champ.value;
    let tab = ["ASSIS_DIR_G", "DIR_COM", "ASSIS_DIR_COM", "CHEF_REC", "ASSIS_CHEF_REC", "DIR_ALI_BOI", "DIR_LOGISTIQUE"];
    for(i in tab) {
        if (tab[i] === post){
            count++;
            break;
        }
    }
    
    if(count != 0){
        pt.style.borderBottom = "green 2px solid";
        return 1;
    }
    pt.style.borderBottom = "red 2px solid";
    return 0;
}


// Function valide Password
function validePwd(champ){
    let Pwd = champ.value.length;
    if (Pwd >= 8){
        pwd.style.borderBottom = "green 2px solid";
        return 1;
    }
    pwd.style.borderBottom = "red 2px solid";
    return 0;
}


// Function valide Email
function valideEmail(champ){
    let email = champ.value;
    email = email.toLowerCase();
    champ.value = email;
}


// Function Main
function verifForm(f){
    var postId = validePostId(f.postId);
    var pwd = validePwd(f.pwd);
    if(postId && pwd){
        return true;
    }else{
        return false;
    }
}