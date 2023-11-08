/*Escribir un programa que escriba en pantalla los divisores comunes de dos números dados*/

let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese otro número: "));
let divisores1 = [];
let divisores2 = [];
let divisoresComunes = [];

for (let i = 1; i <= numero1; i++) {
    if (numero1 % i == 0) {
        divisores1.push(i);
    }
}

for (let i = 1; i <= numero2; i++) {
    if (numero2 % i == 0) {
        divisores2.push(i);
    }
}

for (let i = 0; i < divisores1.length; i++) {
    for (let j = 0; j < divisores2.length; j++) {
        if (divisores1[i] == divisores2[j]) {
            divisoresComunes.push(divisores1[i]);
        }
    }
}   

alert(`Los divisores comunes de ${numero1} y ${numero2} son: ${divisoresComunes}`);
