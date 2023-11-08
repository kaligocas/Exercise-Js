/*Escribir un programa que nos diga si un número dado es primo (no es divisible por ninguno otro número que no sea él mismo o la unidad)*/

let numero = parseInt(prompt("Ingrese un número: "));
let divisores = [];
let esPrimo = true;

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        divisores.push(i);
    }
}

if (divisores.length > 2) {
    esPrimo = false;
}

if (esPrimo) {
    alert(`El número ${numero} es primo`);
}
else {
    alert(`El número ${numero} no es primo`);
}


