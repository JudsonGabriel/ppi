/*
    Programação para Internet
    Professor: Guilherme Leal
*/

// import { getMaxLength } from "@testing-library/user-event/dist/types/utils";

// // # Aula 06/05 - Introdução ao JavaScript

// // ativar o formatador Prettier
// // ALT + SHIFT + F

// console.log("Bem vindo a PPI");

// // Variáveis
// let name = "João";
// let age = 17;
// let isStudent = true;

// const PI = 3.14; // const ----> não pode mudar de valor
// console.log(PI);

// // Operadores Aritméticos + - / * ** %
// let x = 5 + 5; //soma
// let y = "5" + 5; //concatenação (string + número = string)
// let z = "Hello" + 5; //concatenação (string + número = string)

// console.log(x, y, z);
// console.log(typeof x);

// // Operadores relacionais > < >= <= == !=   
// console.log('5' != 5); // Diferença
// console.log('5' == 5); // comparação de valor OU tipo
// console.log('5' === 5); // comparação de valor E tipo

// // Operadores de incremento 
// x = x++; //
// console.log(x++); // incremento após o retorno do valor
// console.log(x);
// console.log(++x);

// // x++;
// // ++x;
// // x += 1;
// // x }= x + 1;

// // Operadores lógicos - && (AND) || (OR) ! (NOT)
// let isExpression = (true && 5 + 2 * 3 < 10 ) || false;
// console.log(isExpression);

// // // if...else
// // if (condition) {
// //     // condition === true
// // } else {
// //     // condition === false
// // }

// // Template Strings
// let text =
// `React é 'tudo de bom'!
// Programar é minha vida!
// eu amo o IFRN`;
// console.log(text);

// // for (let index = 0; index < array.length; index++) {
// //     const element = array[index];
    
// // }

// // Array
// let fruits = ['Banana' , 'Orange', 'Apple' , 'Mango'];

// // Tamanho do array
// console.log(fruits.lenght); 
// console.log(fruits[0]);

// // Adicionar um elemento no final do array
// fruits.push('Kiwi'); 
// console.log(fruits);

// // Remove o último elemento do array
// console.log(fruits.pop());
// console.log(fruits);    

// // Remove o primeiro elemento do array
// console.log(fruits.shift()); 
// console.log(fruits);    

// // Adiciona um elemento no início do array
// fruits.unshift('Lemon'); 
// console.log(fruits);

// // Argumento 1 - posiçâo
// // Argumento 2 - quantidade de elementos a remover
// // Argumento 3 - lista de elementos a ser adicionados
// fruits.splice(2, 0, 'Kiwi' , 'Blueberry');
// console.log(fruits);

// fruits.splice(2, 3);
// console.log(fruits);

// // Desafio - subbstituir o elemento 'Apple' por 'Kiwi'
// fruits.splice(3, 1, 'Kiwi');
// console.log(fruits);

// // Busca índice do elemento 'Apple'
// let index = fruits.indexOf('Apple');
// console.log(index);

// fruits.splice(index, 1, 'Apple');
// console.log(fruits);

// // Ordem crescente
// fruits.sort(); 
// console.log(fruits);

// // Ordem decrescente
// fruits.reverse(); //toReversed
// console.log(fruits);

// let fruitsSort = fruits.toSorted();
// console.log(fruits);
// console.log(fruitsSort);

// let fruitsReverse = fruits.toReversed();   
// console.log(fruits);

// const numbers = [45 , 4 , 9 , 16 , 25]
// console.log(numbers);

// // Desafio
// // Criar um array 'numbers2' que duplique os valores de 'numbers'
// // Output: [90 , 8 , 18 , 32 , 50]

// let numbers2 = [numbers[0] * 2, numbers[1] * 2, numbers[2] * 2, numbers[3] * 2, numbers[4] * 2];
// console.log(numbers2);

// function myFunction(value, index, array) {
//     return value * 2;
// }

// // const numbersMap = numbers.map(myFunction);
// // console.log(numbersMap);

// // console.log(numbers.map( (number) => number * 2 ));

// // console.log(numbers.toSorted());

// const numbersMap = numbers.map(myFunction);
// console.log(numbersMap);

// console.log(numbers.map( (number) => number * 2 ));

// console.log(numbers.toSorted((a, b) => a - b)); // ordem crescente
// console.log(numbers.toSorted((a, b) => b - a)); // ordem decrescente

// numbers.sort((a, b) => a - b);
// // Maior valor
// console.log('Maior =', numbers[numbers.length - 1]);

// // Menor valor
// console.log('Menor =', numbers[0]);

// // **********************************
// // Aula 13/05 - Funções, array destructuring, spread operator
// console.log(fruits);

// const fruits2 = ["Kiwi", "Avocado"];
// console.log([...fruits2, "Grape"]);

// // Spread - ...
// const fruits3 = [...fruits, ...fruits2];
// console.log(fruits3);

// // DESAFIO - Exibir todas as frutas que comecem
// // com a letra A
// const out = [];
// const letra = "a";

// // for (let i = 0; i < fruits3.length; i++) {
// //   const fruit = fruits3[i];
// //   //toLowerCase - minúscula, toUpperCase - maiúscula
// //   if (fruit[0].toLowerCase() === letra) {
// //     out.push(fruit);
// //   }
// // }

// // fruits3.map((fruit) => {
// //   if (fruit[0].toLowerCase() === letra) {
// //     out.push(fruit);
// //   }
// // });

// // find - retorna a primeira ocorrência,
// // de acordo com a condição
// let outFind = fruits3.find(
//   (fruit) => fruit[0].toLowerCase() === letra
// );
// console.log(outFind);

// // filter - retorna TODAS as ocorrências,
// // de acordo com a condição
// let outFilter = fruits3.filter(
//   (fruit) => fruit[0].toLowerCase() === letra
// );
// console.log(outFilter);

// // DESAFIO - Exibir o valor da soma de todos os
// // números do array 'numbers'

// console.log(numbers);

// // map
// let soma = 0;
// numbers.map((number) => {
//   soma += number;
// });
// console.log(soma);

// // reduce
// console.log(
//   numbers.reduce((soma, number) => soma + number)
// );

// // Object
// const pessoa = {
//   nome: 'Zé Vaqueiro',
//   idade: 25,
//   profissao: 'Cantor/Compositor'
// };

// console.log(pessoa.nome);
// console.log(pessoa['nome']);
// console.log(Object.keys(pessoa));
// console.log(Object.values(pessoa));

// const pessoa2 = { ...pessoa, hobby: ''}

function Product(name, sto, ram, price, qty, category){
    this.name = name;
    this.sto = sto;
    this.ram = ram;
    this.price = price;
    this.qty = qty; 
    this.category = category; 

}

const p1 = new Product('iPhone', 256, 16,5000,10,'Celular');
const p2 = new Product('iPad', 516, 16, 8000, 20, 'Tablet');
const p3 = new Product('Macbook', 1024, 24, 15000, 30, 'Notebook')
const p4 = new Product('iPhone Pro Max', 256, 16,7000,15,'Celular');
const p5 = new Product('iPad Pro', 516, 16, 10000, 25, 'Tablet');
const p6 = new Product('Macbook Pro', 1024, 24, 25000, 35, 'Notebook');

const estoque = [ 
  {...p1}, 
  {...p2}, 
  {...p3}, 
  {...p4}, 
  {...p5}, 
  {...p6}];
console.log(estoque);

// a) Valor total de todos os produtos em estoque
const valorTotal = estoque.reduce((total, produto) => {
    return total + (produto.pricce * produto.qty);
}, 0);

console.log("Valor total do estoque: R$", valorTotal);

// b) Ordenar por nome

// Crescente
const nomeCrescente = [...estoque].sort((a, b) => 
    a.name.localeCompare(b.name)
);

console.log("Nome crescente:");
console.log(nomeCrescente);

// Decrescente
const nomeDecrescente = [...estoque].sort((a, b) => 
    b.name.localeCompare(a.name)
);

console.log("Nome decrescente:");
console.log(nomeDecrescente);

// c) Ordenar por preço

// Crescente
const precoCrescente = [...estoque].sort((a, b) => 
    a.price - b.price
);

console.log("Preço crescente:");
console.log(precoCrescente);

// Decrescente
const precoDecrescente = [...estoque].sort((a, b) => 
    b.price - a.price
);

console.log("Preço decrescente:");
console.log(precoDecrescente);

// d) Filtrar por categoria

const celulares = estoque.filter(produto => 
    produto.category === 'Celular'
);

console.log("Celulares:");
console.log(celulares);

const tablets = estoque.filter(produto => 
    produto.category === 'Tablet'
);

console.log("Tablets:");
console.log(tablets);

const notebooks = estoque.filter(produto => 
    produto.category === 'Notebook'
);

console.log("Notebooks:");
console.log(notebooks);

