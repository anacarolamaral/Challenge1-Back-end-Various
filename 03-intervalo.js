
// Jacqueline e Emanuel acabaram de sair da aulas desesperados pela quantidade de exercícios de matemática que a professora Raissa passou como dever de casa. Para a sorte deles, você sabe programação e vai criar um programa pra ajudá-los a resolver todos os problemas do assunto intervalos entre dois números.

// Eles pediram, então, para que você crie um programa que consiga fazer a prova-real de todos os exercícios da professora Raissa.

// Seu objetivo é:

// Implementar uma função que receba três argumentos: numero, limiteInferior e limiteSuperior;
// Essa função deve retornar se esse número pertence ao conjunto que é limitado pelo limiteInferior e limiteSuperior
// Pertencer ao conjunto significa que dado o numero, ele deve ser maior ou igual que o limiteInferior e menor ou igual do que o limiteSuperior.



function solucao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }



}

solucao(2, 0, 10)