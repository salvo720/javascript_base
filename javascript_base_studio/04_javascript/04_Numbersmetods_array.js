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
    // con javascript , e possibile accedere all'intero array facendo riferimento al nome dell'array : 
    const cars_8 = ["Saab", "Volvo", "BMW"];
    // document.getElementById("demo").innerHTML = cars_8 ; //JAVASCRIPT 

    //--------------------------------------------------------------------

    // gli array sono oggetti 
    // gli array sono un tipo speciale di oggetti . In javascript l'operatore typeof  restituisce oggetto  per gli array
    // Ma gli array javascript sono megli descritti come array 
    // gli array usano i numeri per accedere ai suoi elementi , nell'esempio person[0] restituisce jhon 

    // Array
    const person = ["Jhon", "Doe", 46];
    window.console.log("typeof di array  :", typeof (person));
    window.console.log("person[0]  :", person[0]);


    // Oggetto
    // gli oggetti usano i nomi per accedere ai suoi "membri" . In questo esempio person.firstname restituisce Jhon 
    const person_2 = { firstname: "Jhon", lastname: "Doe", age: 46 }
    window.console.log("typeof di oggetto  :", typeof (person_2));
    window.console.log("person.firstname  :", person_2.firstname);

    //--------------------------------------------------------------------
    // Gli elementi della matrice possono essere oggetti . Gli array sono tipi speciali di oggetti 
    // Per questo motivo puoi avere variabili di tipo diverso nello stesso array 
    // puoi avere oggetti in un array . Puoi avere funzioni in un array . Puoi avere un array in un array : 

    const cars_9 = ["Saab", "Volvo", "BMW"];

    const array_2 = [];
    array_2[0] = Date.now;
    array_2[1] = function_test;
    array_2[2] = cars_9;

    function function_test() {
        window.console.log("function_test");
    }

    window.console.log("array_2  :", array_2);
    window.console.log("array_2  :", function_test);

    //--------------------------------------------------------------------
    // Propieta e metodi dell'array 
    // Il vero punto di forza degli array javascript sono le propieta e i metodi dell'array integrati 

    const cars_10 = ["Saab", "Volvo", "BMW"];
    window.console.log("cars_10.length  :", cars_10.length);
    window.console.log("cars_10.sort()  :", cars_10.sort());

    //--------------------------------------------------------------------

    // funzioni sugli array 

    var array_of_functions = [
        first_function,
        second_function,

    ];

    function first_function() {
        window.console.log("first_function executed");
    }
    function second_function() {
        window.console.log("second_function executed");
    }

    window.console.log("array_of_functions  :", array_of_functions);
    // e undefined ma alla riga sopra possiamo notare un console.log dove e stata eseguita la funzione richiamata 
    window.console.log("array_of_functions  :", array_of_functions[0]());

    // esegui un array di funzioni codice esempio : 

    for (let i = 0; i < array_of_functions.length; i++) {
        // get the current function getting looped
        const func = array_of_functions[i];

        // call the function
        func();
    }

    //--------------------------------------------------------------------

    // La propieta di lunghezza 
    // la length propieta di un array restituisce la lunghezza di un array ( il numero di elementi di un array ) .

    // Esempio 
    const fruit_2 = ["Banana", "Orange", "Apple", "Mango"];
    let length_array = fruit_2.length;

    window.console.log("fruit_2  :", fruit_2);
    window.console.log("length_array  :", length_array);

    // la lenght propieta e sempre 1 in piu rispetto all'elemento piu grande dell'array , 
    // cioe , ad esempio : ultimo elemento e all'indice 3 , quindi 3+1 = length array 

    //--------------------------------------------------------------------

    // Accesso al primo elemento dell'array 
    // codice esempio 
    const fruit_3 = ["Banana", "Orange", "Apple", "Mango"];
    let fruit_3_elemento_1 = fruit_3[0];
    window.console.log("fruit_3  :", fruit_3);
    window.console.log("fruit_elemento_1  :", fruit_3_elemento_1);

    //--------------------------------------------------------------------

    // accesso all'ultimo elemento dell'array 

    const fruit_4 = ["Banana", "Orange", "Apple", "Mango"];
    let fruit_4_elemento_ultimo = fruit_4[fruit_4.length - 1];
    window.console.log("fruit_3  :", fruit_4);
    window.console.log("fruit_elemento_1  :", fruit_4_elemento_ultimo);

    //--------------------------------------------------------------------

    // Elementi di array loop 
    const fruit_5 = ["Banana", "Orange", "Apple", "Mango"];
    let fruit_length = fruit_5.length;

    let text_fruit = "<ul>";
    for (let i = 0; i < fruit_length; i++) {
        text_fruit += "<li>" + fruit_5[i] + "</li>"
    }
    text_fruit += "</ul>";
    window.console.log(text_fruit);


    // possiamo anche usare la array foreach() funzione 

    const fruit_6 = ["Banana", "Orange", "Apple", "Mango"];
    let text_fruit_6 = "<ul>"
    fruit_6.forEach(my_function_test);
    text_fruit_6 += "</ul>"

    function my_function_test(value) {
        text_fruit_6 += "<li>" + value + "</li>"
    }

    window.console.log("fruit_6 :", fruit_6);
    window.console.log("text_fruit_6 :", text_fruit_6);

    //--------------------------------------------------------------------

    // Aggiunta di elementi all'array 
    const fruit_7 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_7.push("Lemon"); // add new element lemon to fruit_7 
    window.console.log("fruit_7 :", fruit_7);

    // oppure usiamo la lenght propieta 
    const fruit_8 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_8[fruit_8.length] = "Lemon";
    window.console.log("fruit_8 :", fruit_8);

    // ATTENZIONE : l'aggiunta di elementi cou un indice elevato puo creare "buchi" non definiti in un array  : 
    const fruit_9 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_9[6] = "Lemon"; //Crea dei buchi indefinity fruit 
    window.console.log("fruit_9 :", fruit_9);
    window.console.log("fruit_9[5] :", fruit_9[5]);

    //--------------------------------------------------------------------
    // Array associativi 
    // Molti linguaggi di programmazione supportano array con indici denominali ( indici letterali )
    // gli array con indici denominati sono chiamati array associativi ( o hash ).
    // Javascript non supporta gli array con indici denominati 
    // in Javascript gli array utilizzano sempre indici numerati 

    // Esempio :

    const person_3 = [];
    person_3[0] = "Jhon";
    person_3[1] = "Doe";
    person_3[2] = 46;
    window.console.log(" person_3.lenght :", person_3.lenght);
    window.console.log(" person_3[0] :", person_3[0]);

    // AVVERTIMENTO : Se utilizzi indici denominati , Javascript ridefinira l'array in un oggetto 
    // Successivamente alucni metodi e propieta dell'array produrranno risultati errati 
    // Esempio 

    const person_4 = [];
    person["firstname"] = "Jhon"
    person["lastname"] = "Doe"
    person["age"] = 46
    window.console.log(" person_4.length :", person_4.length);
    window.console.log(" person_4[0] :", person_4[0]);

    //--------------------------------------------------------------------

    // La differneza tra array e oggetti
    // In javascriptgli array usano gli indici numerati.
    // in Javascript gli oggetti usano gli indici denominati ( indici letterali )

    // ATTENZIONE: gli array sono un tipo speciale do oggetti , con indici numerati 

    //--------------------------------------------------------------------
    // Quando usare gli array e quando usare gli oggetti 
    // javascript non supporta gli array associativi 
    // dovresti usare gli oggetti quando vuoi che i nomi degli elementi siano stringhe (testo) 
    // Dovresti usare gli array quando vuoi che gli indici siano numeri 

    //--------------------------------------------------------------------

    // Javascript nuovo array 

    // Javascript ha un costruttore di array integrato new Array()
    // Ma puoi tranquillamente usare [] invece 
    // questi 2  esempi creano esattamente un array vuoto : 

    const array_10 = new Array();
    const array_11 = [];
    window.console.log(" array_10 :", array_10);
    window.console.log(" array_11 :", array_11);

    // queste due affermazioni creano un array contenete 6 numeri esempio : 

    const array_12 = new Array(40, 100, 1, 5, 25, 10);
    const array_13 = [40, 100, 1, 5, 25, 10];

    window.console.log(" array_12 :", array_12);
    window.console.log(" array_13 :", array_13);

    // la new parola chiave puo produrre alcuni risultati inaspettati 
    // crea un array con 3 elementi 
    const array_14 = new Array(40, 100, 1)
    window.console.log(" array_14 :", array_14);

    // crea un array con due elementi 
    const array_15 = new Array(40, 100)
    window.console.log(" array_15 :", array_15);

    // dovrebbe creare un array con un elemento ma non e cosi 
    const array_16 = new Array(40)
    window.console.log(" array_16 :", array_16);
    // se a new array gli passi solo 1 parametro andra a creare un con tante posizione undefined fino ad arrivare al numero del parametro 

    // un errore comune , questi due pezzi di codice non sono uguali 
    // esempio 1 :
    const array_17 = [40];
    // non e guale ad 
    // esempio 2 :
    const array_18 = new Array(40);


    // esempio 1 crea un array con un elemento  
    const array_19 = [40];

    // esempio 2 crea un array con 40 undefined elementi 
    const array_20 = new Array(40);

    //--------------------------------------------------------------------
    // Come riconosce un array 




































}