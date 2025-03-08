function verificarIdade(idade) {
    
    if (idade < 18) {
        console.log(`A pessoa com ${idade} anos é menor de idade.`);
    }
 
    else if (idade >= 18 && idade < 65) {
        console.log(`A pessoa com ${idade} anos é maior de idade.`);
    }

    else if (idade >= 65) {
        console.log(`A pessoa com ${idade} anos é idosa.`);
    }
}

const idade = 70;
verificarIdade(idade);
