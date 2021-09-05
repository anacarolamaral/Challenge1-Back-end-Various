// Num jogo de futebol entre amigos é muito comum que ninguém queira ser o goleiro. Para resolver esse impasse, um time decidiu utilizar o jogo "Americano".

// Neste jogo, o time faz uma roda e cada um dos jogadores "joga" um número X qualquer. Após isso, o capitão do time soma todos os números jogados e obtém o resultado S. Depois, começa a contar de 1 até S apontando inicialmente para si mesmo (e falando alto e claramente "um"), depois para o jogador imediatamente a sua direita (e falando "dois") e assim por diante. O goleiro será aquele que estiver sendo apontado quando o capitão chegar a S.

// Para fins de facilitar a resposta do problema, vamos considerar que o capitão está na posição 1, o jogador a sua direita está na posição 2, o jogador a direita deste está na posição 3, e assim por diante.

// Você deve fazer um programa que determina qual a posição do jogador que deve ser o goleiro.

function solucao(numeros) {
    let s = 0;
    let goleiro = 0;

    for (x of numeros) {
        s += x;
    }

    let resto = s % numeros.length;
    if (resto === 0) {
        goleiro = numeros.length
    } else {
        goleiro = resto;
    }

    console.log(goleiro);
}

let teste = [1, 3, 6];

solucao(teste);