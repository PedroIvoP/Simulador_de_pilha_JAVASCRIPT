// ######################################### PILHA DE CARROS ###########################################################################

let pilha = []

// ######################################### FUNÇÃO PARA DO TAMANHO DA PILHA ###########################################################

function Controle() {
    document.getElementById("controle").innerHTML = "";
    document.getElementById("controle").innerHTML = "PREENCHIMENTO DA PILHA " + pilha.length + "/5";
}

// ######################################### FUNÇOES PARA EMPILHAR ###########################################################################

/* ### Função comum (Mensagem Padrão)------------>*/ function telaPadrao() {
    document.getElementById("mostrar").innerHTML = ""
    document.getElementById("mostrar").innerHTML = "<h1  class='boasVindas'>SIMULADOR DE PILHA</h1><h2  class='boasVindas'>NAVEGUE PELO MENU ACIMA PARA INTERAGIR COM O SISTEMA.</h2>";
}

/* ### Função comum (Coleta de dados)------------>*/ function ColetaDados() {
    this.fabricante = window.prompt("Informe o Fabricante: ");
    this.modelo = window.prompt("Informe o modelo: ");
    this.unidVend = Number(window.prompt("Informe a quantidade de unidades vendidas: "));
    this.precoMin = Number(window.prompt("Informe o preço mínimo: ")).toFixed(2);
    this.precoMax = Number(window.prompt("Informe o preço máximo: ")).toFixed(2);
}

function Empilhar() {

    telaPadrao();

    if (pilha.length >= 5) {

        window.alert("A pilha está cheia! Não é possível inserir mais nenhum elemnto.")
    } else {

        pilha.unshift(new ColetaDados())
    }

    Controle();
}

// ######################################### FUNÇÃO PARA DESEMPILHAR ###########################################################################

/* ### Função comum (Verificar se ainda existe elementos na pilha, de imediato) ------------>*/ function condicionalExibicao() {
    if (pilha.length === 0) {
        telaPadrao();
    } else {

        let tabela = "";

        for (let i = 0; i < pilha.length; i++) {
            tabela += "<div class = 'colab'>"
            tabela += "Fabricante: " + pilha[i].fabricante + "<br/>";
            tabela += "Modelo: " + pilha[i].modelo + "<br/>";
            tabela += "Undidades Vendidas: " + pilha[i].unidVend + "<br/>";
            tabela += "Preço Mínimo: R$ " + pilha[i].precoMin + "<br/>";
            tabela += "Preco Máximo: R$ " + pilha[i].precoMax + "<br/>";
            tabela += "</div>"

        }

        document.getElementById("mostrar").innerHTML = tabela;
    }
}

function Desempilhar() {

    document.getElementById("controle").innerHTML = "";

    if (pilha.length === 0) {

        window.alert("Não é possível desempilhar, pois a pilha está vazia.");
        telaPadrao();
    } else {

        pilha.shift();
        condicionalExibicao();
    }

    Controle();
}

// ######################################### FUNÇÃO PARA CONSULTAR TOPO #######################################################################

function ConsultarTopo() {

    document.getElementById("mostrar").innerHTML = "";

    if (pilha.length === 0) {

        window.alert("Não é possível consultar o topo, pois a pilha está vazia.");
        telaPadrao();
    } else {

        let tabela = "";

        tabela += "<div class = 'colab'>"
        tabela += "Fabricante: " + pilha[0].fabricante + "<br/>";
        tabela += "Modelo: " + pilha[0].modelo + "<br/>";
        tabela += "Undidades Vendidas: " + pilha[0].unidVend + "<br/>";
        tabela += "Preço Mínimo: R$ " + pilha[0].precoMin + "<br/>";
        tabela += "Preco Máximo: R$ " + pilha[0].precoMax + "<br/>";
        tabela += "</div>"


        document.getElementById("mostrar").innerHTML = tabela;
    }
}

