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

function split(string) {
    return string.split(" ");
}
function count(array) {
    return array.length;
}
var countWords = compose(count, split);
console.log(countWords("funzione di ordine superiore"));