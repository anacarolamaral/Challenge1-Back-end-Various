// Um determinado evento é permitido apenas para maiores de idade. Através de um lista com as idades dos potenciais participantes, seu objetivo é fazer um programa que determine qual a idade da pessoa mais nova, dentre os que podem participar (maiores de idade).

function solucao(lista) {
    let participantes = [];
    let maisJovem = 0;

    for (x of lista) {
        if (x >= 18 && maisJovem == 0) {
            maisJovem = x;
        } else if (x >= 18 && x < maisJovem) {
            maisJovem = x;
        }
    };
    if (maisJovem == 0) {
        console.log("CRESCA E APARECA")
    } else {
        console.log(maisJovem);
    }
};



solucao([2, 3]);
