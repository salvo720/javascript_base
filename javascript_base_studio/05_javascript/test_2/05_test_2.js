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

/* ------------------------------------------------------------------------------------ */


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
