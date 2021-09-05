// Quando precisa-se escolher apenas uma pessoa aleatoriamente dentro de um grupo, é comum jogar "zerinho ou um" para sortear alguém. O jogo é muito simples: cada jogador joga 0 ou 1 com as mão. Aquele que for o único(a) a jogar zero ou um é o sorteado. Faça um programa que imprima o nome da pessoa que foi sorteada, ou NINGUEM, caso ninguém tenha sido sorteado(a).

function solucao(jogadores) {
    let somaZeros = 0;
    let somaUns = 0;
    let ganhador = " ";


    for (i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada === 0) {
            somaZeros++
        } else {
            somaUns++
        }
    };

    if (somaZeros === 1) {
        for (i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 0) {
                ganhador = jogadores[i].nome;
            }

        }
    } else if (somaUns === 1) {
        for (i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 1) {
                ganhador = jogadores[i].nome;
            }
        }
    } else {
        ganhador = "NINGUEM";
    }



    console.log(ganhador);
}

let teste = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 0
    }
]


solucao(teste);

