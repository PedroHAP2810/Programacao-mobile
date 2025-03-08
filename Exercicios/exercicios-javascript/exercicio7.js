function manipularArray(array) {

    const maiusculas = array.map(str => str.toUpperCase());
    console.log("Strings em maiúsculas:", maiusculas);

    const comecaComA = array.filter(str => str[0].toUpperCase() === 'A');
    console.log("Strings que começam com 'A':", comecaComA);


    const comprimentos = array.map(str => str.length);
    console.log("Comprimentos das strings:", comprimentos);
}

const frutas = ["Maçã", "Banana", "Abacaxi", "Laranja"];

manipularArray(frutas);
