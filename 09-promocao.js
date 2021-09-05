// Para o dia dos namorados, um loja de presentes que, sabiamente, investiu em tecnologia e fazia uma profunda análise de dados percebeu que mais de 80% dos seus clientes compravam 2 itens nessa época. Com o objetivo de tentar aumentar o faturamento, essa loja lançou uma promoção, na qual o cliente que comprasse pelo menos 3 itens, teria um desconto de 50% no item mais barato.

// Contudo, juntando a alta demanda desse período com o fato de o caixa ter que calcular esse desconto manualmente está causando filas demais. Seu papel, como desenvolvedor(a) dessa empresa é fazer um algoritmo que calcule automaticamente o valor devido pelo cliente ao se aplicar essa promoção quando necessário.

function solucao(precos) {
    let total = 0;
    let menorValor;

    if (precos.length < 3) {
        for (x of precos) {
            total += x;
        }
    } else {
        menorValor = precos[0];
        for (x of precos) {
            if (x < menorValor) {
                menorValor = x;
            }
        }
        for (y of precos) {
            total += y;
        }
        total = total - (menorValor * 0.5);
    }

    console.log(total);
};

let teste = [100, 200, 300, 50];

solucao(teste);