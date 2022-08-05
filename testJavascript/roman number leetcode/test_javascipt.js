// w3school tutorial inzio da: JS Home
// w3school tutorial fine in : JS Objects / Oggetti JS 

$(function () {
    console.log("ready!")
    prova()
});
function prova() {


    /**
 * @param {string} s
 * @return {number}
 */

    //  example what do code 
    //  Input: s = "MCMXCIV"
    //     Output: 1994
    //     Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

    var romanToInt = function (s = "MCMXCIV") {
        let obj = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000,
        }
        let arrayNumber = s.split("");
        let totale = 0;
        let nextElement = 0;
        let counter = 0;
        let pos = 0;
        let oldPos = null;

        arrayNumber.forEach(element => {
            counter++;
            let Subtraction = false
            pos = s.indexOf(element)
            if (oldPos != null) {
                pos = s.indexOf(element, oldPos)
            }

            nextElement = arrayNumber[pos + 1]

            switch (element) {
                case "I":
                    if (nextElement == "V" || nextElement == "X") {
                        Subtraction = true
                    }
                    break;
                case "V":
                    if (nextElement == "X" || nextElement == "L") {
                        Subtraction = true
                    }
                    break;
                case "X":
                    if (nextElement == "L" || nextElement == "C") {
                        Subtraction = true
                    }
                    break;
                case "L":
                    if (nextElement == "C" || nextElement == "D") {
                        Subtraction = true
                    }
                    break;
                case "C":
                    if (nextElement == "D" || nextElement == "M") {
                        Subtraction = true
                    }
                    break;
                case "D":
                    if (nextElement == "D") {
                        Subtraction = true
                    }
                    break;
                case "M":
                default: nextElement = 0; Subtraction = false; break;
            }

            window.console.log(" obj[element] :", obj[element], " , obj[nextElement] : ", nextElement, ", pos :", pos, "Subtraction ", Subtraction);

            if ((nextElement != 0) && Subtraction == true) {
                totale -= obj[element]
            } else {
                totale += obj[element]
            }

            oldPos = pos
        });
        window.console.log("totale : ", totale);
        return totale;

    };
    romanToInt();
}
// debbuger; 