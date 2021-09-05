// Todo bom editor de texto informa no rodapé do programa quantas palavras tem no texto. Você está trabalhando numa empresa que está desenvolvendo um editor de texto e ficou com a tarefa de desenvolver esta funcionalidade. Para o texto dado na entrada, imprima na tela quantas palavras existem neste texto.

function solucao(texto) {
    let textoArray = texto.trim().split(" ");
    let contagem = 0;

    for (x of textoArray) {
        if (x !== "") {
            contagem++;
        }
    }

    console.log(contagem);
};



let teste = "       Cuidado, pois usuarios as vezes deixam espacos   vazios no fim do texto sem querer ";

solucao(teste);


