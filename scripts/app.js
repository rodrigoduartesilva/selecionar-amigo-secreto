//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let inputValue = document.getElementById('amigo');
const listaAmigos = [];

function adicionarAmigo() {
    listaAmigos.push(inputValue.value);
    inputValue.value = '';
    let amigosSaida = listaAmigos.map(amigo => `<li class='name-list'>| ${amigo}<span> | </span></li>`).join('');

    document.getElementById('listaAmigos').innerHTML = amigosSaida;
}

function sortearAmigo() {
    const sorteio = Math.round(Math.random() * (listaAmigos.length - 1));
    document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${listaAmigos[sorteio]}`;
}