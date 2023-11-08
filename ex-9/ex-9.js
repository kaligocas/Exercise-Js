/*Escribe un programa que pida una frase y escriba cuantas vocales hay en la frase.*/

let frase = prompt("Escribe una frase");
let vocales = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == "a" || frase[i] == "e" || frase[i] == "i" || frase[i] == "o" || frase[i] == "u") {
        vocales++;
    }
}
alert("Hay " + vocales + " vocales en la frase");
console.log("Hay " + vocales + " vocales en la frase");
