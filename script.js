//Pegando os valores dos input's e resultado no HTML, colocando em variáveis.

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular () {
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

//Jogando as funções para variáveis para melhor visualização.

    let carne = carnePP (duracao);
    let cerveja = cervejaPP (duracao);
    let bebida = bebidaPP (duracao);
    let sorvete = sorvetePP (duracao);

//Calculando os produtos com as determinadas regras.

    let totalCarne = (carne * adultos) + ((carne / 2) * criancas); 
    let totalCerveja = (cerveja * adultos);
    let totalBebida = (bebida * adultos) + ((bebida / 2) * criancas);
    let totalSorvete = (sorvete * adultos) + ((sorvete / 2) * criancas);

//Imprimindo os resultado no id resultado (HTML).

    resultado.innerHTML = `<p>${totalCarne/1000} Kg de Carne.</p>`;
    resultado.innerHTML += `<p>${totalCerveja/1000} L de Cerveja.</p>`;
    resultado.innerHTML += `<p>${totalBebida/1000} L de Refrigente e Água.</p>`;
    resultado.innerHTML += `<p>${totalSorvete/1000} L de Sorvete.</p>`;
}

//Com base na duração, retorna a quantidade do produto.

function carnePP (duracao) {
    if (duracao >= 6) {
        return 650;
    }
    else {
        return 400;
    }
}

function cervejaPP (duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1200;
    }
}

function bebidaPP (duracao) {
    if (duracao >= 6) {
        return 2000;
    }
    else {
        return 1000;
    }
}

function sorvetePP (duracao) {
    if (duracao >= 6) {
        return 400;
    }
    else {
        return 250;
    }
}