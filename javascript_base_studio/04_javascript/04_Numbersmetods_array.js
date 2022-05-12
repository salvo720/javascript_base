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
    // i metodi globali javascript possono essere usatilizzati su tutti i tipi di dati javascript 
    // Questi sono i piu rilevanti quando si lavora con i numeri 

    // 1) Number : ritorna un numero convertito dal suo argomento 
    // 2) parseFloat : analizza il suo argomento e ritorna un numero a virgola mobile 
    // 3) parseInt : analizza il suo argomento e ritorna un numero intero 

    //--------------------------------------------------------------------

    // Number()
    // Number puo essere utilizzato per convertire le variabili javascript in numeri 
    window.console.log("Number(true)", Number(true));
    window.console.log("Number(false)", Number(false));
    window.console.log("Number('10')", Number("10"));
    window.console.log("Number('10   ')", Number("10  "));
    window.console.log("Number(' 10  ')", Number("  10  "));
    window.console.log("Number('   10')", Number("   10"));
    window.console.log("Number('10.33')", Number("10.33"));
    window.console.log("Number('10,33')", Number("10,33"));
    window.console.log("Number('10 33')", Number('10 33'));
    window.console.log("Number('Jhon')", Number('Jhon'));


    // Se il numbero non puo essere convertito viene restituito NaN , NOT a Number 

    // il metodo Number puo essere usato per convertire le date in numero 
    window.console.log("Number(new Date('1970-01-01') :", Number(new Date("1970-01-01"))); //0 perche e la data di partenza 
    // restituisce il numero in millisecondi 

    window.console.log("Number(new Date('01-01-1970') :", Number(new Date("01-01-1970")));
    window.console.log("new Date('01-01-1970') :", new Date("01-01-1970"));

    // il numero di millisecondi tra 02-01-1970 e 01-01-1970 e  86.400.000:
    window.console.log("Number(new Date('1970-01-02')) :", Number(new Date("1970-01-02")));

    window.console.log("Number(new Date('1970-01-30')) :", Number(new Date("1970-01-30")));


    //--------------------------------------------------------------------

    // parseInt()
    // parseInt() analizza una stringa e restituisce un numero intero . Gli spazi sono consentiti . Viene restituito solo il primo numero :


    window.console.log("parseInt('-10')", parseInt('-10'));
    window.console.log("parseInt('-10.33')", parseInt('-10.33'));
    window.console.log("parseInt('10')", parseInt('10'));
    window.console.log("parseInt('10.33')", parseInt('10.33'));
    window.console.log("parseInt('10 20 30')", parseInt('10 20 30'));
    window.console.log("parseInt('10 years')", parseInt('10 years'));
    window.console.log("parseInt('years 10')", parseInt('years 10'));

    //Se il numero non puo essere convertito viene restituito NaN ( Not a Number )


    //--------------------------------------------------------------------

    //parseFloat()
    //parseFloat() analizza una stringa e restituisce un numero . Gli spazi sono consentiti . Viene restituito solo il primo numero . 

    window.console.log("parseFloat('10')", parseFloat('10'));
    window.console.log("parseFloat('10.33')", parseFloat('10.33'));
    window.console.log("parseFloat('10 20 30')", parseFloat('10 20 30 '));
    window.console.log("parseFloat('10 years')", parseFloat('10 years'));
    window.console.log("parseFloat('years 10')", parseFloat('years 10'));

    // Se il numero non puo essere convertito , viene restituito NaN (Not a Number )

    //--------------------------------------------------------------------

    // Propieta dei numeri  

    // MAX_VALUE : restituisce il numero piu grande possibile in javascript
    // MIN_VALUE: ritorna il numero piu piccolepossibile in javascript
    // POSITIVE_INFINITY : rappresenta l'infinito ( restituito in caso di overflow )
    // NEGATIVE_INFINITY : rappresenta infinito negativo ( restituito in caso di overflow )
    // NaN : rappresenta un valore  "Not a Number " 

    //--------------------------------------------------------------------

    // javascript MIN_VALUE E MAX_VALUE 
    // MAX_VALUE restituisce il numero piu grande possibile in javascript
    window.console.log("MAX_VALUE :", Number.MAX_VALUE);

    // MIN_VALUE restituisce il numero piu piccolo possibile in javascript 
    window.console.log("MIN_VALUE :", Number.MIN_VALUE);

    //--------------------------------------------------------------------
    // javascript POSITIVE_INFINITY

    // POSITIVE_INFINITY viene restituito in caso di overflow 
    window.console.log("POSITIVE_INFINITY :", Number.POSITIVE_INFINITY);
    window.console.log("POSITIVE_INFINITY da operazione matematica :", 1 / 0);

    // javascript NEGATIVE_INFINITY 
    // NEGATIVE_INFINITY viene restituito in caso di overflow 
    window.console.log("NEGATIVE_INFINITY :", Number.NEGATIVE_INFINITY);
    window.console.log("NEGATIVE_INFINITY da operazione matematica  :", -1 / 0);

    //--------------------------------------------------------------------

    //javascript NaN 
    // in javascript NaN e una parola riservata che indica che il numero non e legale 
    window.console.log("NaN :", Number.NaN);


    // il tentativo di eseguire aritmentica con una stringa non numerica risultera in NaN ( Non un Numero )
    window.console.log("NaN da operazione matematica  :", 100 / "Apple");

    //--------------------------------------------------------------------

    // le propieta dei numeri non possono essere utilizzate sulle variabili 
    // Le propieta del numero appartengono al wrapper dell'oggeto numero di javascript chiamato Number 
    // E possibile accedere a queste propietasolo come Number.MAX_VALUE
    // Utilizzando myNumber.MAX_VALUE , dove myNumber e una variabile , un'espressione o un valore , restituira undefined : 

    let mynumber_12 = 6;
    window.console.log("mynumber_12 :", mynumber_12);
    window.console.log("mynumber_12.MAX_VALUE :", mynumber_12.MAX_VALUE);

    //--------------------------------------------------------------------
    // Array / Matrici
    // un array e una varaibile speciale che puo contenere piu di un valore 
    const cars = ["Saab", "Volvo", "BMW"];
    // Perche usare gli array 
    // Se hai un elenco di elementi( elenco di nomi di auto , ad esempio ), la memorizzazione delle auto in singole variabili potrebbe essere simile a questo :
    var auto_1 = "Saab";
    var auto_2 = "Volvo";
    var auto_3 = "BMW";

    // Tuttavia , cosa succede se si desidera scrorrere le auto e trovarne una specifica ? E se non avessi 3 macchine , ma 300 ? 
    // la soluzione e un array 
    // un array puo contenere molti valori sotto un unico nome e puoi accedere ai valori facendo riferimento a un numero di indice 

    //--------------------------------------------------------------------
    // Creazione di una matrice 
    // L'uso di valore letterale array e il modo piu semplice per creare un array Javascript 
    // Sintassi
    const array_name = ["item1", "item2"];

    // E pratica comune dichiarare un array con la parola chiave const 

    const cars_2 = ["Saab", "Volvo", "BMW"];

    // gli spazi e le interruzioni di riga non sono importanti . una dichiarazione puo estendersi su piu righe : 
    const cars_3 = [
        "Saab",
        "Volvo",
        "BMW",
    ];

    // puoi anche creare un array e fornire gli elementi 
    const cars_4 = [];
    cars_4[0] = "Saab";
    cars_4[1] = "Volvo";
    cars_4[2] = "BMW";

    window.console.log("cars_4 :", cars_4);
    //--------------------------------------------------------------------
    // Utilizzandola parola chiave Javascript new
    // L'esempi seguente crea anche un array e gli assegna valori 

    const cars_5 = new Array("Saab", "Volvo", "BMW");

    window.console.log("cars_5 :", cars_5);

    // i due esempi sopra fanno esattamente lo stesso 
    // Non c'e bisogno di usare new Array()
    // Per semplicita, leggibilita ed velocita di esecuzione , utilizza il metodo letter new Array()

    //--------------------------------------------------------------------

    // accesso agli elementi di un array 
    // Si accede ad un elemento dell'array , facendo riferimento al numero indice : 
    const cars_6 = ["Saab", "Volvo", "BMW"];
    let cars_variabile = cars_6[0];
    window.console.log("cars_6 :", cars_6);
    window.console.log("cars_variabile :", cars_variabile);

    // Nota : gli elementi dell'array iniziano da 0 
    // [0]e il primo elemento. [1] e il secondo elemento 

    //--------------------------------------------------------------------
    // Modifica di un elemento in un array
    // questa instruzionecambiera il valoredel primo elementoin cars 
    const cars_7 = ["Saab", "Volvo", "BMW"];
    cars_7[0] = "Opel";

    window.console.log("cars_7 :", cars_7);

    //--------------------------------------------------------------------
    // Accedi all'array completo 


















}