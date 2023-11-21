// Función para aumentar el tamaño del texto
function aumentarTexto() {
    // Obtén el tamaño actual del texto
    var tamañoActual = window.getComputedStyle(document.body, null).fontSize;
    
    // Convierte el tamaño a un número y quítale las unidades (píxeles)
    var tamañoNum = parseFloat(tamañoActual);
    
    // Aumenta el tamaño, por ejemplo, en 2 píxeles
    var nuevoTamaño = tamañoNum + 3;
    
    // Asigna el nuevo tamaño al cuerpo del documento
    document.body.style.fontSize = nuevoTamaño + "px";
}

// Función para disminuir el tamaño del texto
function disminuirTexto() {
    // Obtén el tamaño actual del texto
    var tamañoActual = window.getComputedStyle(document.body, null).fontSize;
    
    // Convierte el tamaño a un número y quítale las unidades (píxeles)
    var tamañoNum = parseFloat(tamañoActual);
    
    // Disminuye el tamaño, por ejemplo, en 2 píxeles
    var nuevoTamaño = tamañoNum - 2;
    
    // Asigna el nuevo tamaño al cuerpo del documento
    document.body.style.fontSize = nuevoTamaño + "px";
}

// Función para aplicar la escala de grises
function escalaGrises() {
    // Verifica si ya está en escala de grises
    var enEscalaGrises = document.body.classList.contains('escala-grises');

    // Si ya está en escala de grises, quítalo; de lo contrario, agrégalo
    if (enEscalaGrises) {
        document.body.classList.remove('escala-grises');
    } else {
        document.body.classList.add('escala-grises');
    }
}

// Función para alternar el alto contraste
function altoContraste() {
    // Verifica si ya está en modo alto contraste
    var enAltoContraste = document.body.classList.contains('alto-contraste');

    // Si ya está en alto contraste, quítalo; de lo contrario, agrégalo
    if (enAltoContraste) {
        document.body.classList.remove('alto-contraste');
    } else {
        document.body.classList.add('alto-contraste');
    }
}

// Función para alternar el contraste negativo
function contrasteNegativo() {
    // Verifica si ya está en modo contraste negativo
    var enContrasteNegativo = document.body.classList.contains('contraste-negativo');

    // Si ya está en contraste negativo, quítalo; de lo contrario, agrégalo
    if (enContrasteNegativo) {
        document.body.classList.remove('contraste-negativo');
    } else {
        document.body.classList.add('contraste-negativo');
    }
}

// Función para alternar el fondo oscuro
function fondoOscuro() {
    // Verifica si ya está en modo fondo oscuro
    var enFondoOscuro = document.body.classList.contains('fondo-oscuro');

    // Si ya está en fondo oscuro, quítalo; de lo contrario, agrégalo
    if (enFondoOscuro) {
        document.body.classList.remove('fondo-oscuro');
    } else {
        document.body.classList.add('fondo-oscuro');
    }
}

// Función para alternar el subrayado de enlaces
function subrayarEnlaces() {
    // Verifica si ya están subrayados los enlaces
    var subrayados = document.body.classList.contains('subrayar-enlaces');

    // Si ya están subrayados, quítalo; de lo contrario, agrégalo
    if (subrayados) {
        document.body.classList.remove('subrayar-enlaces');
    } else {
        document.body.classList.add('subrayar-enlaces');
    }
}

// Función para alternar la fuente legible
function fuenteLegible() {
    // Verifica si ya está en modo fuente legible
    var fuenteLegible = document.body.classList.contains('fuente-legible');

    // Si ya está en fuente legible, quítalo; de lo contrario, agrégalo
    if (fuenteLegible) {
        document.body.classList.remove('fuente-legible');
    } else {
        document.body.classList.add('fuente-legible');
    }
}

// Función para restablecer los valores por defecto
function restablecerValores() {
    // Elimina las clases modificadoras del cuerpo del documento
    document.body.classList.remove('escala-grises', 'alto-contraste', 'contraste-negativo', 'fondo-oscuro', 'subrayar-enlaces', 'fuente-legible');
}



// Mostrar/ocultar opciones de accesibilidad al hacer clic en el botón
document.getElementById('btnAccesibilidad').addEventListener('click', function () {
    var opciones = document.getElementById('opcionesAccesibilidad');
    opciones.classList.toggle('oculto');
});
