document.addEventListener("DOMContentLoaded", function() {
    let btnHamburguer = document.getElementById("btn-hamburguer");
    let sidebar = document.querySelector(".sidebar");
    let main = document.getElementById("main");
    let header = document.getElementById("header")
    

    btnHamburguer.addEventListener("click", function() {
            sidebar.classList.toggle("open");
            main.classList.toggle("shifted");
            header.classList.toggle("shifted");
            btnHamburguer.classList.toggle("open"); 
    });

    btnBack.addEventListener("click", function(){
        sidebar.classList.remove("open")
        main.classList.remove("shifted")
    })
});
