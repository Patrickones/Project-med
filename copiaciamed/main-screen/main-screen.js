document.addEventListener("DOMContentLoaded", function() {
    let btnHamburguer = document.getElementById("btn-hamburguer");
    let sidebar = document.querySelector(".sidebar");
    let main = document.getElementById("main");
    let btnBack = document.getElementById("btn-back")

    btnHamburguer.addEventListener("click", function() {
            sidebar.classList.toggle("open");
            main.classList.toggle("shifted"); // Adiciona ou remove a classe 'shifted' no conteúdo principal
            btnBack.style.display = sidebar.classList.contains("open") ? "block" : "none"; // Exibe ou oculta o botão de voltar conforme a abertura ou fechamento da barra lateral
    });

    btnBack.addEventListener("click", function(){
        sidebar.classList.remove("open")
        main.classList.remove("shifted")
        btnBack.style.display = sidebar.classList.contains("open") ? "block" : "none";
    })
});
