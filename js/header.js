const headerMenu = document.getElementById("header-menu");
const headerNav = document.getElementById("header-nav");

headerMenu.addEventListener("click", ()=> {
    headerNav.classList.toggle("display");
});

// display-none //Hacer el hr aparecer