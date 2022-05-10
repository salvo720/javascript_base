test();
tespreadst();

function test() {
    var myArray = ["1", "2", "3", "4"];
    myArray.push("end");
    myArray.unshift("start");
    window.console.log("myArray : ", myArray)


}
function tespreadst() {
    //spread operator 
    var myArray_2 = ["1", "2", "3", "4"];
    myArray_2 = ["start", ...myArray_2, "end"];
    window.console.log("myArray : ", myArray_2)
}


/* fifo ------------------------------------------------------------------------------------ */

var array = [1, 2, 3], primosestratto;
primosestratto = array[0];
array.shift();
console.log("primosestratto", primosestratto)
console.log("array", array)

/*  ------------------------------------------------------------------------------------ */


function secret_variable() {
    var private = " super secret code ";
    return function () {
        return private
    }
}

var getprivatevariable = secret_variable();
window.console.log("secret_variable : ", secret_variable())
window.console.log("secret_variable : ", getprivatevariable())


/* ------------------------------------------------------------------------------------ */
/* qual e l'output */
var num = 4;
function outer() {
    var num = 2;
    function inner() {
        num++;
        var num = 3;
        console.log(num)
    }
    inner();
}
outer();


/* ------------------------------------------------------------------------------------ */

window.console.log(typeof typeof 1);
window.console.log(typeof (typeof 1)); // adesso ha piu senso fare il typof di 1 che e number ed il typeof di number che e string 

/* ------------------------------------------------------------------------------------ */

var hero = {
    _name: "Jhon Doe ",
    getsecretIdentity() {
        return this._name;
    }
}

var stoleidentity = hero.getsecretIdentity;

window.console.log("normale stoleidentity", stoleidentity());
window.console.log("normale hero.getsecretIdentity ", hero.getsecretIdentity()); // e il secondo perche e l'ultimo bind 


/* cosi worka *---------------------------------------------------------------------------------------------------------------------- */

var hero = {
    _name: "Jhon Doe ",
    getsecretIdentity() {
        return this._name;
    }
}

var stoleidentity = hero.getsecretIdentity.bind(hero);

window.console.log("cosi worka stoleidentity", stoleidentity());
window.console.log("cosi worka hero.getsecretIdentity ", hero.getsecretIdentity()); // e il secondo perche e l'ultimo bind 

/* ------------------------------------------------------------------------------------ */


function findDup(array) {
    var dup = [];
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        if (!obj[array[i]]) {
            obj[array[i]] = 1;
            console.log("obj", obj)
            console.log(" obj[array[i]]", obj[array[i]])

        } else {
            console.log("array", array)
            dup.push(array[i]);
        }
    }
    return dup;
}
console.log(findDup([1, 2, 3, 3, 4, 4]));


/* ------------------------------------------------------------------------------------ */

hoistedVariable = 3;
window.console.log("hoistedVariable", hoistedVariable);
var hoistedVariable

/* hight order function  ------------------------------------------------------------------------------------ */

function higherOrder(fn) {
    fn();
}

higherOrder(function () { console.log("hight order function", "Hello world") });

/* hight order function 2 ------------------------------------------------------------------------------------ */


function higherOrder2() {
    return function () {
        return "Do something";
    }
}

var x = higherOrder2();
console.log("hight order function 2", x())   // Returns "Do something"
