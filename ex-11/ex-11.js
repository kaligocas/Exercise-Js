/*Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)*/

let numero = parseInt(prompt("Escribe un número"));
let divisible = false;

if (numero % 2 == 0) {
    alert("El número es divisible por 2");
    divisible = true;
}
if (numero % 3 == 0) {
    alert("El número es divisible por 3");
    divisible = true;
}
if (numero % 5 == 0) {
    alert("El número es divisible por 5");
    divisible = true;
}
if (numero % 7 == 0) {
    alert("El número es divisible por 7");
    divisible = true;
}
if (divisible == false) {
    alert("El número no es divisible por 2, 3, 5 o 7");
}
console.log(divisible);

