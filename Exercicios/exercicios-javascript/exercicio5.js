function calcularValores(numero) {
    const dobro = numero * 2;
    const triplo = numero * 3;
    const quadrado = numero * numero;
    
    return {
        dobro: dobro,
        triplo: triplo,
        quadrado: quadrado
    };
}

const numero = 5;
const resultados = calcularValores(numero);

console.log(`O dobro de ${numero} é: ${resultados.dobro}`);
console.log(`O triplo de ${numero} é: ${resultados.triplo}`);
console.log(`O quadrado de ${numero} é: ${resultados.quadrado}`);