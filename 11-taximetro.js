// Você é o programador responsável por programar o "taxímetro" do novo aplicativo de mobilidade que a empresa onde você trabalha está lançando. Nessa tarefa, dada uma distância percorrida e um tempo de viagem, você tem que fazer um programa que calcula o preço da viagem. Sabe-se que o app deve cobrar, inicialmente, 50 centavos por minuto de viagem e mais 70 centavos por cada quilômtro de viagem realizado. Caso a viagem tenha mais de 10km, cada km adicional (acima de 10) fica mais barato, passando a custar apenas 50 centavos por km. Caso a viagem dure mais de 20min, cada min adicional (acima de 20) fica mais barato, passando a custar apenas 30 cetavos por minuto. Seu trabalho é fazer a parte do programa que calcula, em centavos, o valor a ser pago pelo cliente (quanta responsabilidade, hein?). Lembre-se de arredondar para baixo o valor final a ser pago.


function solucao(min, km) {
    let valorDevidoKm = 0;
    let valorDevidoMin = 0;
    let custoMinutoInteiro = 50;
    let custoMinutoDesconto = 30;
    let custoKmInteiro = 70;
    let custoKmDesconto = 50;

    if (min <= 20) {
        valorDevidoMin = min * custoMinutoInteiro;
    } else {
        valorDevidoMin = (20 * custoMinutoInteiro) + ((min - 20) * custoMinutoDesconto);
    }

    if (km <= 10) {
        valorDevidoKm = km * custoKmInteiro;
    } else {
        valorDevidoKm = (10 * custoKmInteiro) + ((km - 10) * custoKmDesconto);
    }


    let valorDevidoTotal = valorDevidoKm + valorDevidoMin;
    console.log(valorDevidoTotal);
}

let teste = [25, 11];

solucao(25, 11.5);