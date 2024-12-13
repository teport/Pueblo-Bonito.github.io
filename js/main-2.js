const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");
const enlaces = document.querySelectorAll(".nav-list a");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    document.body.classList.add("no-scroll");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
    document.body.classList.remove("no-scroll");
});


enlaces.forEach(enlace => {
    enlace.addEventListener("click", () => {
        nav.classList.remove("visible");
        document.body.classList.remove("no-scroll");
    });
});