function manipularArrayNumeros(array) {
   
    array.push(60);  
    console.log("Array após adicionar 60:", array);

    array.shift();  
    console.log("Array após remover o primeiro número:", array);

 
    const maiorNumero = Math.max(...array);
    console.log("Maior número do array:", maiorNumero);

    const menorNumero = Math.min(...array);
    console.log("Menor número do array:", menorNumero);
}

const numeros = [10, 20, 30, 40, 50];

manipularArrayNumeros(numeros);
