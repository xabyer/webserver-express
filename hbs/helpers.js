const hbs = require('hbs');

//Helpers
hbs.registerHelper('getYear', () => {

    return new Date().getFullYear();

});

hbs.registerHelper('camelCase', (texto) => {

    let palabras = texto.split(' ');
    palabras.forEach((palabra, indice) => {
        palabras[indice] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');

});