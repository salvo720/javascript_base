// function task(message) {
//     // emulate time consuming task
//     let n = 10000000000;
//     while (n > 0) {
//         n--;
//     }
//     console.log(message);
// }

// console.log('Start script...');
// task('Call an API');
// console.log('Done!');


// --------------------------------------------------------
function compose(f1, f2) {
    let composedFunction = function composedFunction(...args) {
        return f1(f2(...args));
    };
    return composedFunction;
}


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
fruits[fruits.length] = "Lemon";
window.console.log("parte da 0 ", fruits.length);

fruits[6] = "Lemons";
window.console.log("buco su fruits ", fruits);


// esempio codice dichiarativa 

/* var numeri = [1, 2, 3];
var newnumbers = numbers.map(function (number)
numeri di ritorno * 5;
); */

// esempio codice imperativo
var numeri = [1, 2, 3];
var newnumbers = [];
for (var i = 0; i < numbers.length; i++)
    newnumbers.push(numeri[i] * 5);
Console.log(newnumbers);
function split(string) {
    return string.split(" ");
}
function count(array) {
    return array.length;
}
var countWords = compose(count, split);
console.log(countWords("funzione di ordine superiore"));
