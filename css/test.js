function sumar(x, y) {
    return x + y
}

function restar(x, y) {
    return x - y
}

function multi(x, y) {
    return x * y
}

function divi(x, y) {
    return x / y
}

function test(rE, x, y, r) {
    if (rE(x,y) === r) {
        return true;
    }   else {
        return false;
    }
}

test(sumar, 3,5,7)
test(sumar, 11,15,26)
test(restar, 9,3,6)
test(multi, 5,5,25)
test(divi, 35,7,9)

/* FUNCIÓN FLECHA */

let sumar = (a,b) => a + b;
let restar = (a,b) => a - b;
let multi = (a,b) => a * b;
let divi = (a,b) => a / b;


// OPERADOR TERNARIO //

return (rE(x,y) === r) ? true : false;

let nota 7
console.log("calificacion")
let calificacion = nota < 5 ? "suspendido" : "aprobado";
console.log("Estoy," calificacion)
