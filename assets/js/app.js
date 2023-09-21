//Funcion up-arrow

const up = document.querySelector("#up");
up.addEventListener("click", ()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
});

//Activar la barra hamburguesa
const burguer = document.querySelector("#menu-hamburguesa");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

burguer.addEventListener("click", () => {
    ul.classList.toggle("show");
});

//Cerrar menú cuando se hace click en un enlace
//Seleccionar enlace de navegación

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        ul.classList.remove("show");
    })
})

/* Crear el dark mode */

const toggleButton = document.getElementById('toggle-button');
toggleButton.addEventListener('change', () => {    
    document.body.classList.toggle('dark')
})
