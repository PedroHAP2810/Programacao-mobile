function operarNumeros(num1, num2) {
    
    const soma = num1 + num2;
    console.log(`Soma: ${num1} + ${num2} = ${soma}`);

    
    const subtracao = num1 - num2;
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);

    
    const multiplicacao = num1 * num2;
    console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);

   
    if (num2 !== 0) {
        const divisao = num1 / num2;
        console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
    } else {
        console.log("Não é possível dividir por zero.");
    }

    const maior = num1 > num2;
    console.log(`O primeiro número ${num1} é maior que o segundo ${num2}? ${maior}`);
}


const numero1 = 15;
const numero2 = 5;
operarNumeros(numero1, numero2);
