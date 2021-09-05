// // Algumas pessoas da empresa de desenvolvimento Paralelepípedos são muito espaçosas e gostam de se sentar sozinhas nas mesas para ter todo o espaço para si. Além disso, preferem se sentar o mais longe possível de outras pessoas, por conta do seu espaço pessoal. O escritório da Paralelepípedos é uma sala muito grande, com mesas numeradas de 1 até N organizadas em uma única fileira. Quando uma pessoa chega, ela rapidamente identifica uma mesa (vazia e que esteja o mais longe possível de outras mesas ocupadas) para se sentar e se dirige a essa mesa. Caso tenha mais de uma mesa igualmente boa, a pessoa escolhe a que fica mais próxima da porta, que fica ao lado da mesa 1.
// Input Format
// A entrada consistirá em um único número inteiro N.

function solucao(n) {
    let ultimaMesa = 0;

    if (n === 1 || n === 2) {
        ultimaMesa = n;
    } else {
        ultimaMesa = n - 1;
    }

    console.log(ultimaMesa);

}

solucao(10);