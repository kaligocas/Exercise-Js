/*Escribe un programa que pida una frase y escriba las vocales que aparecen*/

let frase = prompt("Escribe una frase");
let vocales = ["a", "e", "i", "o", "u"];
let vocalesFrase = [];
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    for (let j = 0; j < vocales.length; j++) {
        if (frase[i] === vocales[j]) {
        vocalesFrase.push(frase[i]);
        contador++;
        }
    }
    }
    console.log(vocalesFrase);
    console.log(contador);
    
