
var butn = document.getElementById("flexSwitchCheckDefault");

butn.onclick = function(){
    document.body.classList.toggle("light-theme");
}

function openNav() {
document.getElementById("mySidenav").style.width = "300px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
document.getElementById("mySidenav").style.width = "0";
}
function home(){
    console.log("home");
    document.getElementById("home").style.display = "block";
    document.getElementById("portfolio").style.display = "none";
}
function portfolio(){
    document.getElementById("home").style.display = "none";
    document.getElementById("portfolio").style.display = "block";
}