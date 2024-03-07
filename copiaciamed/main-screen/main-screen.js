let menuHamburguer = document.getElementById("menu-hamburguer");
let btnHamburguer = document.getElementById("btn-hamburguer");
let sidebar = document.querySelector(".sidebar")

btnHamburguer.addEventListener("click", function(){
    if(menuHamburguer.style.display === "block") {
        menuHamburguer.style.display = "none"
    } else {
        menuHamburguer.style.display = "block"
    }
})