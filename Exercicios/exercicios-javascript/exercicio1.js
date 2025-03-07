function manipularString(str, letraAntiga, letraNova) {

    const maiuscula = str.toUpperCase();

    console.log(`Maiúsculas: ${maiuscula}`);

    const minuscula = str.toLowerCase();
    console.log(`Minúsculas: ${minuscula}`);

    const invertida = str.split('').reverse().join('');
    console.log(`Invertida: ${invertida}`);

    const substituida = str.replace(new RegExp(letraAntiga, 'g'), letraNova);
    console.log(`Substituída (letra '${letraAntiga}' por '${letraNova}'): ${substituida}`);
}

const minhaString = "Meu nome é Pedro";
manipularString(minhaString, 'o', 'i');