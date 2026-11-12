const btnsFavorite = document.getElementsByClassName("btn-favorito");

for (let i = 0; i < btnsFavorite.length; i++) {
    btnsFavorite.item(i).addEventListener("click", (e)=> {
        e.target.classList.toggle("favorite");
    });
}