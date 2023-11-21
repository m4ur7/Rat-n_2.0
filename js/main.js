document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.post1');
ScrollReveal().reveal('.post1', {delay: 250});
ScrollReveal().reveal('.post2', {delay: 500});
ScrollReveal().reveal('.post3', {delay: 500});


const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length-1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}
function Prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});
btnLeft.addEventListener('click', function(){
    Prev(); 
});

setInterval(function(){
    Next();
}, 4000);}, 4000);

/* FUNCIONALIDAD PARA LA PESTAÑA DE ACCESIBILIDAD */

// Funciones para las opciones de accesibilidad
function aumentarTexto() {
    // Lógica para aumentar el tamaño del texto
}

function disminuirTexto() {
    // Lógica para disminuir el tamaño del texto
}

function escalaGrises() {
    // Lógica para activar la escala de grises
}

// Agrega más funciones según tus necesidades

// Mostrar/ocultar opciones de accesibilidad al hacer clic en el botón
document.getElementById('btnAccesibilidad').addEventListener('click', function () {
    var opciones = document.getElementById('opcionesAccesibilidad');
    opciones.classList.toggle('oculto');
});
