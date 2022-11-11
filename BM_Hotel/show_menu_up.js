let showMenu = document.getElementById("bar");

showMenu.onclick = function(){
    navBar = document.getElementById("head2");
    navBar.classList.toggle("open-menu");
    contactelement = document.getElementById("ContactElements");
    contactelement.classList.toggle("off");
}