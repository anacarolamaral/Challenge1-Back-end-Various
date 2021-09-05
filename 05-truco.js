
// O jogo de truco é muito popular pelo Brasil. Numa de suas versões, ele é jogado apenas com as cartas Q J K A 2 3. Elas tem essa ordem de "força" nesse jogo, sendo 3 a mais valiosa e Q a menos valiosa. Contudo, a cada partida é virada uma carta com a face pra cima na mesa. Esta carta serve para indicar que a próxima carta é a manilha, ou seja, a carta mais poderosa para essa partida. Fizemos uma tabela resumo para explicar essa mecânica:
// Supondo que a carta virada pra cima dessa rodada seja um ás (A), a manilha será 2, isso significa que 2 é a carta mais forte dessa rodada.

// Faça um programa que diga qual é a manilha, dada uma carta virada para cima.


function solucao(carta) {
    let baralho = ["Q", "J", "K", "A", "2", "3"];
    let manilha = 0;
    for (i = 0; i <= baralho.length; i++) {
        if (carta == 3) {
            manilha = "Q";
        } else if (carta == baralho[i]) {
            manilha = baralho[i + 1]
        }
    }

    console.log(manilha);
}

solucao("J");

