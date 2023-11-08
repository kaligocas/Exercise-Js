/*Escribir un programa que escriba en pantalla los divisores de un número dado*/

let numero = parseInt(prompt("Ingrese un número: "));
let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        divisores.push(i);
    }
}

alert(`Los divisores de ${numero} son: ${divisores}`);

