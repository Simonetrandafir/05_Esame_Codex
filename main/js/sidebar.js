// Ottieni tutti gli elementi con classe "eventoNav"
const links = document.querySelectorAll(".eventoNav");
// Aggiungi un gestore di eventi a ciascun link
links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        // Impedisci il comportamento predefinito del link
        event.preventDefault();
        // Rimuovi la classe "active" da tutti i link
        links.forEach(function (link) {
            link.classList.add("link-body-emphasis");
            link.classList.remove("active");
        });
        // Aggiungi la classe "active" al padre del link cliccato
        this.classList.add("active");
        this.classList.remove("link-body-emphasis");
    });
});

let btnMenu = document.querySelector(".btnSide");
let sideBar = document.querySelector(".sideBar");
let contenuto = document.querySelector(".contenuto");
let spanMenu = document.querySelectorAll(".bar span");
let tema = document.querySelector(".tema");
let navLinks = document.querySelectorAll(".navLink");
let navList = document.getElementById("sideList");
let navBar = document.querySelector(".navBarSpec");

btnMenu.addEventListener("click", function (event) {
    event.preventDefault();
    if (sideBar.classList.contains("mini")) {
        sideBar.classList.remove("mini");
        sideBar.classList.add("maxi");
        spanMenu.forEach(function (span) {
            setTimeout(function () {
                contenuto.classList.add("col-md-10");
                sideBar.classList.remove("col-md-1");
                sideBar.classList.add("col-md-2");
                contenuto.classList.remove("contMaxi");
                contenuto.classList.add("contMini");
                navBar.classList.remove("contMaxi");
                navBar.classList.add("contMini");
                navList.classList.remove("align-items-center");
                navLinks.forEach(function (navLink) {
                    navLink.classList.remove("justify-content-center");
                });
            }, 100);
            setTimeout(function () {
                contenuto.classList.remove("col-md-11");
                span.classList.remove("d-none");
                span.classList.add("ms-2");
                tema.classList.add("dropdown-toggle");
            }, 0);
        });
    } else {
        sideBar.classList.remove("maxi");
        sideBar.classList.add("mini");
        spanMenu.forEach(function (span) {
            setTimeout(function () {
                span.classList.add("d-none");
                span.classList.remove("ms-2");
                tema.classList.remove("dropdown-toggle");
                contenuto.classList.remove("col-md-10");
                navList.classList.add("align-items-center");
                setTimeout(function () {
                    sideBar.classList.remove("col-md-2");
                    sideBar.classList.add("col-md-1");
                    contenuto.classList.add("contMaxi");
                    contenuto.classList.remove("contMini");
                    navBar.classList.add("contMaxi");
                    navBar.classList.remove("contMini");
                    contenuto.classList.add("col-md-11");
                    navLinks.forEach(function (navLink) {
                        navLink.classList.add("justify-content-center");
                    });
                }, 0);
            }, 0);
        });
    }
});

/* Tooltip sidebar */
(() => {
    "use strict";
    const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
        new bootstrap.Tooltip(tooltipTriggerEl);
    });
})();
