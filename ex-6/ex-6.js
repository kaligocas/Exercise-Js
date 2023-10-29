/*Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.*/

let num1 = prompt("Introduce el primer número");
let num2 = prompt("Introduce el segundo número");
let num3 = prompt("Introduce el tercer número");

if (num1 > num2 && num1 > num3) {
    document.write("El número mayor es: " + num1);
} else if (num2 > num1 && num2 > num3) {
    document.write("El número mayor es: " + num2);
} else {
    document.write("El número mayor es: " + num3);
}