// Álvaro está economizando para comprar uma uma passagem para a europa. Por isso diariamente ele coloca um valor no cofre. Faça um programa que calcule o total acumulado no cofre até o momento.


let lista = [1, 2, 3, 4];



function solucao(lista) {
    let total = 0;
    for (x of lista) {
        total += x
    }
    console.log(total);
}

solucao(lista);