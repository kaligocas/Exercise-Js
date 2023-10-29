/*Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.*/

let num1 = prompt("Introduce el primer número");
let num2 = prompt("Introduce el segundo número");


if (num1 > num2) {
    document.write("El número mayor es: " + num1);
} else{
    document.write("El número mayor es: " + num2);
}
