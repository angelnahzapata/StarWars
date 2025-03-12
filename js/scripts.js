document.addEventListener("DOMContentLoaded", function () {
    console.log("Star Wars sitio web cargado!");

    // Configuración del carrusel
    let carousel = new bootstrap.Carousel(document.querySelector("#carouselExample"), {
        interval: 3000,
        pause: "hover"
    });

    // Validación del formulario
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombre = document.querySelector("#nombre").value.trim();
        const email = document.querySelector("#email").value.trim();
        const ladoFuerza = document.querySelector("#ladoFuerza").value;

        if (nombre === "" || email === "" || ladoFuerza === "Elige...") {
            alert("Por favor, completa todos los campos correctamente.");
        } else {
            alert(`¡Bienvenido, ${nombre}! Te has unido al lado ${ladoFuerza === "luz" ? "de la Luz" : "Oscuro"}.`);
            formulario.reset();
        }
    });

    // Cambia el tema de la tabla al pasar el mouse
    const tabla = document.querySelector(".table");
    tabla.addEventListener("mouseover", function () {
        tabla.classList.add("table-light");
        tabla.classList.remove("table-dark");
    });
    tabla.addEventListener("mouseout", function () {
        tabla.classList.add("table-dark");
        tabla.classList.remove("table-light");
    });

    // Animación de los iconos con FontAwesome
    const iconos = document.querySelectorAll(".fa");
    iconos.forEach(icono => {
        icono.addEventListener("mouseover", function () {
            icono.classList.add("fa-bounce");
        });
        icono.addEventListener("mouseout", function () {
            icono.classList.remove("fa-bounce");
        });
    });
});