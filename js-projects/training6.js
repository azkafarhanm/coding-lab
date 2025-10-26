let nama = 'chatGPT';
let age = 10;
let isAI = true;
let unknownValue;

console.log(typeof nama); // string
console.log(typeof age);  // number
console.log(typeof isAI); // boolean
console.log(typeof unknownValue); // undefined

let data = 'belajar JavaScript itu seru!';
console.log(typeof data); // string

data = 2024;
console.log(typeof data); // number

data = false;
console.log(typeof data); // boolean

let result = 5 + '10';
console.log(result);
console.log(typeof result); // string

result = '20' - 5;
console.log(result);
console.log(typeof result); // number

let nothing = null;
console.log(typeof nothing);

function showType(value) {
    console.log(`nilai : ${value}, Tipe: ${typeof value}`)
}

showType('we');
showType('123');
showType('false');
showType('underfined');
showType('null');
showType([1,2,3]);
showType({nama : "AI"});
