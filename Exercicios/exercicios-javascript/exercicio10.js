
function manipularArrayNumeros(array) {

    const pares = array.filter(num => num % 2 === 0);
    console.log("Números pares:", pares);

    const multiplicadosPorDois = pares.map(num => num * 2);
    console.log("Números multiplicados por 2:", multiplicadosPorDois);

    const soma = multiplicadosPorDois.reduce((acc, num) => acc + num, 0);
    console.log("Soma de todos os números multiplicados por 2:", soma);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

manipularArrayNumeros(numeros);
