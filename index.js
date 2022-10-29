// 1. Especificadores e quantificadores
// 1.1. CPF com ou sem pontuação
// let re = /\d{3}\.?\d{3}\.?\d{3}[-.]?\d{2}/g;
// let str = "772843.809-34";
// let newstr = re.exec(str);
// // let newstr = str.replace(re, '');
// console.log(newstr);

// 1.2. CPF com pontuação diferente ou espaços
// let re = /\d{3}([.-]|\s+)?\d{3}([.-]|\s+)?\d{3}[-./]?\d{2}/g;
// let str = "772843.809/34";
// let newstr = re.exec(str);
// console.log(newstr);


// 2. Âncoras
// 2.1. Escreva uma regex capaz de encontrar no texto deste parágrafo todas as palavras que teriminam com a letra “o”.
// let re = /\w*[á]?\w+o\b/g;
// let str = "Escreva uma regex capaz de encontrar no texto deste parágrafo todas as palavras que teriminam com a letra “o”.";
// let resultado = null;

// while (resultado = re.exec(str)) 
//   console.log("Resultado: " + resultado[0]);


// 2.2. Escreva uma regex capas de encontrar no parágrafo acima todas as palavras que começam e terminam com vogais
// let re = /\b[AEIOUaeiou]\w+[AEIOUaeiou]\b/g;
// let str = "Escreva uma regex capaz de encontrar no texto deste parágrafo todas as palavras que teriminam com a letra “o”.";
// let resultado = null;

// while (resultado = re.exec(str)) 
//   console.log("Resultado: " + resultado[0]);

// 3. Agrupamento
// 3.1. Hora e minutos¶
// let re = /^(0?[1-9]|1[0-2]):[0-5][0-9]$/g;
// let str = "12:59";
// let resultado = null;

// while (resultado = re.exec(str)) 
//   console.log(resultado);


// 3.2. Octeto de endereços IPv4
// let re = /^([0-1]?[0-9]?[1-9]|2[0-5][0-5])$/g;
// let str = "156";
// let resultado = null;

// while (resultado = re.exec(str)) 
//   console.log(resultado);


// 3.3. Endereços IPv4 completo¶
// let re = /([0-1]?[0-9]?[0-9]|2[0-5][0-5])[:.]([0-1]?[0-9]?[0-9]|2[0-5][0-5])[:.]([0-1]?[0-9]?[0-9]|2[0-5][0-5])[:.]([0-1]?[0-9]?[0-9]|2[0-5][0-5])/g;
// let str = "255.000.000.010 255.01.0 g 255.1.1.1";
// let resultado = null;
// let arrIpv4 = [];

// while (resultado = re.exec(str)) {
//   arrIpv4.push(resultado[0]);
// }

// console.log(arrIpv4);

// 3.4. Dada uma lista de CEPs válidos, escreva uma expressão regular que funcione com todos os itens
// let re = /\d{2}[\s.]?\d{3}[\s-.]?\d{3}/g;
// let str = "04567003 04567-003 04.567-003 04.567.003 04 567 003 04567 003 04567.003";
// let resultado = null;
// let ceps = [];
// let cont = 0;

// while (resultado = re.exec(str)) {
//   cont += 1;
//   ceps.push(resultado[0]);
// }

// console.log(ceps, cont);

// 3.4. Dada uma lista de telefones válidos, 
// escreva uma expressão regular que funciona com todos os itens:

const fs = require('fs');

const str = fs.readFileSync('./listTelefonica.txt', 'utf8');

// let re = /\b(0?[0-9][0-9]|\(0?[0-9][0-9]\))?[-. ]?9?[-. ]?\d{4}[-. ]?\d{4}\b/g;
let re = /(\+[0-9][0-9])?(0?[0-9][0-9]|\(0?(xx)?[0-9][0-9]\))?[-. ]?(9?[-. ]?\d{2}[-. ]?\d{2}[-. ]?\d{2}[-. ]?\d{2}|\d{3}[-. ]?\d{3}[-. ]?\d{3})/g;
let resultado = null;
let cell = [];
let cont = 0; //98 itens

let num = 12;
let numC = 0;
let sum = 12;

function switchC(value) {
  switch (value) {
    case 1:
      return 18;
    
    case 2:
    case 3:
    case 4:
    case 5:
    case 8:
      return 7;

    case 6:
    case 7:
    case 9:
      return 11;
  
    default:
      return 0;
  }
}

while (resultado = re.exec(str)) {
  cont += 1;
  cell.push(resultado[0]);
  num -= 1;

  if (num === 0) {
    numC += 1;
    num = switchC(numC);

    sum += (num)//.toString();
    
    // cell.push('\n');
    // cell.push(num);
    // cell.push('\n');
  }
}

cell.map(e => console.log(e));
console.log(cell.length + ' ' + cont + ' ' + sum);
