/*Escribe un programa que escriba en la pantalla un texto de tipo <h1> que diga “Hello Javascript”.*/

const principal = document.getElementById('content');
const titulo = document.createElement('h1');


function app(){
    hola();
}

function hola(){
    titulo.innerHTML = 'Hola soy JavaScript';
    principal.append(titulo);

}

app();