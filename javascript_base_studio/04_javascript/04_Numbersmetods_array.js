// w3school tutorial inzio da: JS string template 
// w3school tutorial fine in : JS Numbers

$(function () {
    console.log("ready!")
    prova3()
});

function prova3() {
    window.console.log("ready! prova3");
    //--------------------------------------------------------------------

    // Metodi numerici e propieta 

    // i metodi numerici ti aiutano a lavorare 
    // i valori primitivi come ( 3.14 o 2014 )  non possono avere propieta e metodi ( perche non sono oggetti ) .
    //Ma con javascript , i metodi e le propieta sono disponibili anche per i valori primitivi , perche javascript
    // tratta i valori primitivi come oggetti durante l'esecuzione di metodi e propieta . 

    //--------------------------------------------------------------------

    // il motodo toString() 

    //IL toString() metodo restituisce un numero come stringa .
    //Tutti i metodi numerici possono essere utilizzati su qualsiasi tipo di numero ( letterali , variabili o espressioni )

    let numero_1 = 100;
    window.console.log(" numero_1 e toString() metodo : ", numero_1.toString(), ' , tipo :', typeof (numero_1.toString()));
    window.console.log(" 100  e toString() metodo : ", (100).toString(), ' , tipo :', typeof ((100).toString()));
    window.console.log(" 100 + 23 e toString() metodo : ", (100 + 23).toString(), ' , tipo :', typeof ((100 + 23).toString()));

    //--------------------------------------------------------------------

    // il metodo toExponential()

    // il metodo toExponential() restituisce una stringa , con un numero arrotondato e scritto usando la notazione esponeziale 
    // un parametro definisce il numero di caratteri dietro la virgola decimale :
    // se toExponential() il parametro e facoltativo se non lo passi javascript non arrotonda il numero 
    // se lo devi usare parti sempre da 1 come parametro , se gli passiamo 0 , il numero risultato sara 1 

    let numero_2 = 9.656;
    window.console.log(" numero_2 e toExponential() metodo : ", numero_2.toExponential(), ' , tipo :', typeof (numero_2.toExponential()));
    window.console.log(" numero_2 e toExponential(0) metodo : ", numero_2.toExponential(0), ' , tipo :', typeof (numero_2.toExponential(0)));
    window.console.log(" numero_2 e toExponential(1) metodo : ", numero_2.toExponential(1), ' , tipo :', typeof (numero_2.toExponential(1)));
    window.console.log(" numero_2 e toExponential(2) metodo : ", numero_2.toExponential(2), ' , tipo :', typeof (numero_2.toExponential(2)));
    window.console.log(" numero_2 e toExponential(4) metodo : ", numero_2.toExponential(4), ' , tipo :', typeof (numero_2.toExponential(4)));
    window.console.log(" numero_2 e toExponential(6) metodo : ", numero_2.toExponential(6), ' , tipo :', typeof (numero_2.toExponential(6)));

    //--------------------------------------------------------------------

    // il metodo toFixed()

    //il metodo toFixed() restituisce una stringa  , con un determinato numero di decimali : 
    //se gli passi 0 o vuoto arrotonda il numero senza decimali 
    //toFixed(2) e perfetto per lavorare con i soldi 

    let numero_3 = 9.6568
    window.console.log(" numero_3 e toFixed() metodo : ", numero_3.toFixed(), ' , tipo :', typeof (numero_3.toFixed()));
    window.console.log(" numero_3 e toFixed(0) metodo : ", numero_3.toFixed(0), ' , tipo :', typeof (numero_3.toFixed(0)));
    window.console.log(" numero_3 e toFixed(1) metodo : ", numero_3.toFixed(1), ' , tipo :', typeof (numero_3.toFixed(1)));
    window.console.log(" numero_3 e toFixed(2) metodo : ", numero_3.toFixed(2), ' , tipo :', typeof (numero_3.toFixed(2)));
    window.console.log(" numero_3 e toFixed(4) metodo : ", numero_3.toFixed(4), ' , tipo :', typeof (numero_3.toFixed(4)));
    window.console.log(" numero_3 e toFixed(6) metodo : ", numero_3.toFixed(6), ' , tipo :', typeof (numero_3.toFixed(6)));

    //--------------------------------------------------------------------

    //toPrecision()
    //toPrecision() restituisce il numero come stringa , della lunghezza specificata : 
    // se gli passi 0 esplode , se non gli passi nulla non arrotonda 
    // se gli passi 1 il numero diventa 1 

    let numero_4 = 9.65688
    window.console.log(" numero_4 e toPrecision() metodo : ", numero_4.toPrecision(), ' , tipo :', typeof (numero_4.toPrecision()));
    // window.console.log(" numero_4 e toPrecision(0) metodo : ", numero_4.toPrecision(0), ' , tipo :', typeof (numero_4.toPrecision(0)));
    window.console.log(" numero_4 e toPrecision(1) metodo : ", numero_4.toPrecision(1), ' , tipo :', typeof (numero_4.toPrecision(1)));
    window.console.log(" numero_4 e toPrecision(2) metodo : ", numero_4.toPrecision(2), ' , tipo :', typeof (numero_4.toPrecision(2)));
    window.console.log(" numero_4 e toPrecision(4) metodo : ", numero_4.toPrecision(4), ' , tipo :', typeof (numero_4.toPrecision(4)));
    window.console.log(" numero_4 e toPrecision(6) metodo : ", numero_4.toPrecision(6), ' , tipo :', typeof (numero_4.toPrecision(6)));


    //--------------------------------------------------------------------


    //valueOf 
    //valueOf restituisce un numero come numero 
    let numero_5 = 9.656888
    window.console.log(" numero_5 e valueOf() metodo : ", numero_5.valueOf(), ' , tipo :', typeof (numero_5.valueOf()));
    window.console.log(" (100) e valueOf() metodo : ", (100).valueOf(), ' , tipo :', typeof ((100).valueOf()));
    window.console.log(" (100+23) e valueOf() metodo : ", (100 + 23).valueOf(), ' , tipo :', typeof ((100 + 23).valueOf()));

    // in javascript un numero puo essere un valore primitivo  (typeof = numero ) o un oggetto ( typeof = oggetto )
    // il valueOf metodo viene utilizzato internamente in javascript per convertire gli oggetti Number in valori primitivi 
    // Non ce motivo di usarlo nel tuo codice 
    // tutti i tipi di dati javascript hanno un valueOf() e un toString() metodo .

    //--------------------------------------------------------------------

    //Conversione di variaibli in numeri 
    // esistono 3 metodi javascript che possono essere utilizzati per convertire le variabili in numeri :
    //il Number() metodo 
    //il ParseInt() metodo 
    //il ParseFloat() metodo 
    // Questi metodi non sono metodi numerici ,  ma metodi javascript globali  

    //--------------------------------------------------------------------

    //Metodi javascript globali 



}