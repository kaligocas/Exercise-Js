/*Escribe un programa que pida una frase y escriba cuántas veces aparecen cada una de las vocales.*/

let frase = prompt("Escribe una frase");
let vocales = 0;
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] == "a") {
        a++;
    } else if (frase[i] == "e") {
        e++;
    } else if (frase[i] == "i") {
        i++;
    } else if (frase[i] == "o") {
        o++;
    } else if (frase[i] == "u") {
        u++;
    }
}
alert("Hay " + a + " a en la frase");
alert("Hay " + e + " e en la frase");
alert("Hay " + i + " i en la frase");
alert("Hay " + o + " o en la frase");
alert("Hay " + u + " u en la frase");
console.log("Hay " + a + " a en la frase");
console.log("Hay " + e + " e en la frase");
console.log("Hay " + i + " i en la frase");
console.log("Hay " + o + " o en la frase");
console.log("Hay " + u + " u en la frase");


