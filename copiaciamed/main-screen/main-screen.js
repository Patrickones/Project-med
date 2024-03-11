document.addEventListener("DOMContentLoaded", function () {
    let btnHamburguer = document.getElementById("btn-hamburguer");
    let sidebar = document.querySelector(".sidebar");
    let main = document.getElementById("main");
    let header = document.getElementById("header")
    let itemsWithSubList = document.querySelectorAll('.has-sublist')



    btnHamburguer.addEventListener("click", function () {
        sidebar.classList.toggle("open");
        main.classList.toggle("shifted");
        header.classList.toggle("shifted");
        btnHamburguer.classList.toggle("open");
    });

    // Adiciona um ouvinte de evento de clique a cada elemento
    itemsWithSubList.forEach(function (item) {
        item.addEventListener('click', function () {

            if (this.classList.contains('clicked')) {
                this.classList.remove('clicked');
            } else {
                this.classList.add('clicked');
            }
            let sublist = item.querySelector('.sublist')
            let upSet = item.querySelector('.has-sublist-span')
            sublist.classList.toggle('active');
            upSet.classList.toggle('open');


        })
    })
});
