// Álvaro está economizando para viajar para a europa. Todo dia ele coloca mais dinheiro no seu cofre. A quantidade de dinheiro que ele coloca no cofre a cada dia está registrada no array lista. Faça um programa que calcule quanto Álvaro vem acumulando, em média, por dia.

let lista = [2, 3, 4];


function solucao(lista) {
    let total = 0;
    let media = 0;
    let array = [];
    for (x of lista) {
        total += x
        array.push(x);

    }

    media = total / array.length

    console.log(media);

}

solucao(lista);