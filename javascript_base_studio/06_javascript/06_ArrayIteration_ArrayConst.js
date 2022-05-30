// w3school tutorial inzio da: JS Array Iteration 
// w3school tutorial fine in : JS Array Const  

$(function () {
    console.log("ready!")
    prova3()
});

function prova3() {
    window.console.log("ready! prova3");
    //--------------------------------------------------------------------
    // Iterazione Array/Matrice javascript 

    // i metodi di iterazione dell'array operano su ogni elemento dell'array 

    // Matrice/Array javascript foreach() 
    // Il forEach() metodo chiama una funzione ( una funzione di callback ) una volta per ogni elemento dell'array 
    const numeri = [45, 4, 9, 16, 25];
    let testo = "";
    numeri.forEach(myFunction_custom);

    function myFunction_custom(value, index, array) {
        testo += value + '</br> ';
    }

    window.console.log("testo : ", testo);

    // nota che la funzione accetta 3 argomenti 
    // 1) value (il valore degli elementi )
    // 2) index ( l'indice degli elementi )
    // 3) array ( Larray da passare )

    // L'esempio precendente utilizza solo il parametro value . Lesempio precendete puo essere riscritto in 
    const numeri_2 = [45, 4, 9, 16, 25];
    let testo_2 = "";
    numeri.forEach(myFunction_custom_2);

    function myFunction_custom_2(value) {
        testo_2 += value + '<br>';
    }

    window.console.log("testo_2 :", testo_2);

    //--------------------------------------------------------------------
    // javascript Array map()
    // il map() metodo crea un nuovo array eseguendo una funzione per ogni elemeto dell'array 
    // il map() mnetodo non eseguela funzione perper gli elemetidell'array senza valore 
    // il map() metodo non modifica l'array originale 
    // Questo esempio moltiplica ogni valore dell'array per 2 :
    const numeri_3 = [45, 4, 9, 16, 25]
    const numeri_4 = numeri_3.map(myFunction_custom_map)

    function myFunction_custom_map(value, index, array) {
        return value * 2
    }

    window.console.log("numeri_4 :", numeri_4);

    // nota che questa funzione accetta 3 argomenti :
    // 1) value (il valore che gli viene passato )
    // 2) index ( l'indice dell'array )
    // 3) array (l'array che gli si passa )

    // Quando una funzione di callback utilizza solo il parametro value , i parametri index e array possono essere omessi :
    const numeri_5 = [45, 4, 9, 16, 25];
    const numeri_6 = numeri_5.map(myFunction_custom_map_2)

    function myFunction_custom_map_2(value) {
        return value * 2;
    }

    window.console.log("numeri_6", numeri_6)
    //--------------------------------------------------------------------
    // Filtro array javascript 

    // il filter() metodo crea una nuova matrice/array con gli elementi della matrice/array che superano il test 
    // Questo esempio crea una nuova matrice da elementi con un valore maggiore di 18 :
    const numeri_7 = [45, 4, 9, 16, 25];
    const over_18 = numeri_7.filter(myFunction_custom_3)

    function myFunction_custom_3(value, index, array) {
        return value > 18;
    }

    window.console.log("over_18 :", over_18);

    // nota che la funzione accetta 3 argomenti 

    // 1) value (il valore dell'oggetto )
    // 2) index ( indice dell'array)
    // 3) array (array passato )
    // Nell'esempio precendete  , la funzione di callback non utilizza i parametri dell'indice e dell'array , quindi possono essere omessi :

    const numeri_8 = [45, 4, 9, 16, 25]
    const over_18_2 = numeri_8.filter(myFunction_custom_4);

    function myFunction_custom_4(value) {
        return value > 18;
    }
    window.console.log("over_18_2", over_18_2);
    //--------------------------------------------------------------------
    // Array javascript reduce()
    // il reduce() metodoesegue una funzionesu ciascun elemento dell'array per produrre(ridurre a) un singolo valore . 
    // il reduce metodofunziona da sinistra a destranell'array . vedi anche il ReduceRight()

    // ATTENZIONE : il reduce() metodo non riduce larray originale 

    // Questo esempio trova la somma di tutti ii numeri di una matrice 

    const numeri_9 = [45, 4, 9, 16, 25]
    let somma_elementi_array = numeri_9.reduce(myFunction_custom_5)

    function myFunction_custom_5(totale, value) {
        return totale + value
    }

    window.console.log("somma_elementi_array :", somma_elementi_array)
    window.console.log("numeri_9.reduce(myFunction_custom_5, 100) :", numeri_9.reduce(myFunction_custom_5, 100));

    // il reduce metodo puo accettare un valore iniziale
    // per partire dal valore scelto e non da 0 
    // numeri_9.reduce(myFunction_custom_5, 100))
    // 100 e il valore iniziale 
    //--------------------------------------------------------------------

    // Array javascript reduceRight 
    // il reduceRight() metodo esegue una funzionesu ciascunelemento dell'array per produrre (ridurre a) un singolo valore 
    // a differenza del reduce() metodo che opera da sinistra a destra nell'array .
    // reduceRight opera da destra a sinistra nell'array .

    // ATTENZIONE : il reduceRight() metodo non riduce l'array originale .

    // Questo esempio trova la somma di tutti i numeri in una matrice : 
    const numeri_10 = [45, 4, 9, 16, 25];
    let somma_elementi_array_2 = numeri_10.reduceRight(myFunction_custom_6);

    function myFunction_custom_6(totale, value) {
        return totale + value
    }

    window.console.log("somma_elementi_array_2", somma_elementi_array_2);

    //--------------------------------------------------------------------
    // Matrice/Array javascript every()

    // il every() metodo controlla se tutti i valori dell'array superano un test .
    // Questo esempio controlla se tutti i valori dell'array sono maggiori di 18 : 
    const numeri_11 = [45, 4, 9, 16, 25];
    let allOver18 = numeri_11.every(myFunction_custom_7);

    function myFunction_custom_7(value) {
        return value > 18;
    }

    window.console.log("allOver18 :", allOver18);

    // testa la condizione su tutti gli elementi se non la passano ritorna false 
    //--------------------------------------------------------------------
    // Javascript array same 
    // il some() metodo controllase alcuni valori dell'array superano un test .

    // Questo esempio controlla se alcuni valori dell'array sono maggiori di 18 . 

    const numeri_12 = [45, 4, 9, 16, 25];
    let some_over18 = numeri_12.some(myFunction_custom_8);

    function myFunction_custom_8(value) {
        return value > 18
    }

    window.console.log("some_over18 :", some_over18);
    // ritorna true se la condizione e soddisfatta , ovvero some(alcuni) elementi dell'array e maggiore di 18 
    //--------------------------------------------------------------------
    // Matrice /Array javascript indexof()
    // indexof() metodo ricerca in una matrice un valore di un elemento e ne restituisce la posizione 

    // Nota : il promo elemento ha la poszione 0 , il secondo 1 , e cosi via ......

    // esempio : cerchiamo apple :
    const fruit = ["Banana", "Apple", "kiwi", "Mango"]
    let posizione_apple = fruit.indexOf("Apple");
    window.console.log("posizione_apple :", posizione_apple);

    let posizione_Banana = fruit.indexOf("Banana");
    window.console.log("posizione_Banana :", posizione_Banana);

    // indexof() parametri : 
    // indexof(item , start )
    // 1) item : e l'elemeto da cercare 
    // 2) start : il punto da cui partire , se non e presente sara 0 

    // il indexOf() metodo restituisce -1 se l'elemento cercato non viene trovato 

    // Se l'elemento e presente piu di una volta , indexOf() ritorna la posizione del primo match dell'elemento specificato  ( occorrenza )

    //--------------------------------------------------------------------
    // Matrice javascript lastIndexOf()
    // Array.lastIndexOf() e uguale ad Array.indexOf()  ma restituisce la posizione dell'ultimo match dell'elemento specificato ( occorrenza )
    const fruit_2 = ["Apple", "Orange", "Apple", "Mango"];
    let posizione_ultimo_apple = fruit_2.lastIndexOf("Apple");

    window.console.log("posizione_ultimo_apple :", posizione_ultimo_apple);

    // anche qui il secondo parametro e opzionale se non viene specificato si parte da 0 
    //--------------------------------------------------------------------
    //    javascript array find()
    // il find() metodo restituisce il valore del primo elemento dell'array che supera una funzione di test .

    // Questo esempio trova (restituisce il valore di ) il primo elemento maggiore di 18 : 

    const numeri_13 = [45, 4, 9, 16, 25];
    let primo_maggiore_18 = numeri_13.find(myFunction_custom_9);

    function myFunction_custom_9(value) {
        return value > 18;
    }

    window.console.log("primo_maggiore_18 :", primo_maggiore_18);

    // find() e una funzionalita di ES6 (javascript 2015)
    //--------------------------------------------------------------------
    // Matrice javascript findIndex()
    // il findIndex() metodo restituisce l'indice del primo elemeto dell'array che supera la funzione di test .
    // Questo esempio trova l'indice del primo elemnto maggiore di 18 :

    const numeri_14 = [4, 9, 16, 25, 29];
    let primo_maggiore_18_con_findIndex = numeri_14.findIndex(myFunction_custom_10);

    function myFunction_custom_10(value) {
        return value > 18;
    }

    window.console.log("primo_maggiore_18_con_findIndex", primo_maggiore_18_con_findIndex);

    // findIndex e una funzionalita di ES6 ( javascript 2015 )

    //--------------------------------------------------------------------
    // javascript Array.from()
    //   il  array.form() metodo restituisce un ogetto Array da qualsiasi oggeto con una propieta di lunghezza o qualsiasi oggetto iterabile 
    // Esempio crea un array da una stringa :
    var test_string = "ABCDEFG";
    const array_from = Array.from(test_string);

    window.console.log("array_from", array_from)

    // from() e una funzione di ES6 (javascript 2015 )
    //--------------------------------------------------------------------
    // Chiave matrice javascript 
    // il array.keys() metodo restituisceun oggetto Array Iterator con le chiavi di una matrice 
    // Crea un oggettoArray iterator , contente le chaivi dell'array :
    const fruit_3 = ["Banana", "Apple", "Orange", "Mango"];
    let keys_fruit_3 = fruit_3.keys();

    window.console.log("keys_fruit_3 :", keys_fruit_3);
    window.console.log("fruit_3.keys();", fruit_3.keys())

    let text = "";
    for (let x of keys_fruit_3) {
        text += x + "<br>";
        console.log("chiavi di x :", x);
    }
    window.console.log("text", text);

    // in alternativa usa Object.keys che ritorna un arrauìy con le chiavi 
    let keys_fruit_3_2 = Object.keys(fruit_3);
    window.console.log("keys_fruit_3_2 :", keys_fruit_3_2);

    // keys() e una funzione di ES6 ( javascript 2015)
    //--------------------------------------------------------------------

    // array entries 
    // il metodo array entries crea un iteratore di array , quindi esegue l'iterazione sulle coppie chaive/valore 

    const fruit_4 = ["Banana", "Apple", "Kiwi", "Mango"];
    const fruit_4_entries = fruit_4.entries();

    for (x of fruit_4_entries) {
        document.getElementById("id_div_demo").innerHTML += x + "<br>";
    }

    window.console.log("fruit_4_entries : ", fruit_4_entries);

    //--------------------------------------------------------------------
    // debug array iterator 
    const fruit_4_entries_2 = fruit_4.entries();

    for (let i = 0; i < fruit_4.length; i++) {
        console.log("fruit_4_entries.next() element " + i + " : ", fruit_4_entries_2.next());
    }

    // il metodo entries restituisce un oggetto Array Iterator con coppie chiave/valore :
    // il metodo entries() non modifica l'array originale 
    // il metodo entries() e stato introddo da ES6 (javascript 2015)

    //--------------------------------------------------------------------
    // Array.includes()
    // il metodo Array.includes() e statointroddotto da ECMAScript 2016 . 
    // Questo metodo ci consente di verificare se un elemento e presente in un array ( incluso NaN , a differenza del metodo indexof() )

    const fruit_5 = ["Banana", "Orange", "Apple", "Mango"]
    let mango_Include_in_array = fruit_5.includes("Mango");

    window.console.log("mango is include in array fruit_5 : ", mango_Include_in_array)

    // ritorna true se l'elemento viene trovato altrimenti tornera false 
    //--------------------------------------------------------------------
    // const Matrice/Array javascript 
    // ECMAScript 2015 (ES6)
    // nel 2015 javascript ha introdotto una nuova importante parola chiave : const 
    // E diventata pratica comune dichiarare gli array usando const 
    // esempio :
    const cars = ["Saab", "Volvo", "BMW"];

    // un arraydichiarato con const non puo essere riasegnato

    // var cars = ["Toyota", "Volvo", "AUDI"];
    //--------------------------------------------------------------------

    // gli Array/Matrici non sono costanti

    // La parola chaive const  e un po fuorviante .
    // Non definiscono un array costante . Definisce un riferimento constate ad un array 
    // Per questo motivo possiamo ancora modificare gli elementi di una Matrice costante . 

    //--------------------------------------------------------------------
    //  Gli elementi possono essere riassegnati
    // e possibile modificare gli elementi di un array costante 
    // esempio :

    // puoi creare un array constate 
    const cars_2 = ["Saab", "Volvo", "BMW"];

    // puoi cambiare un elemento 
    cars_2[0] = "Toyota";

    // puoi aggiungere un elemento 
    cars_2.push("AUDI");

    window.console.log("const cars_2 edited : ", cars_2);

    //--------------------------------------------------------------------
    // Assegnato quando dichiaro 
    // Alle variabili javascript const deve essere assegnato un valore quando dichiarate :
    // Significato : un array dichiarato con const deve essere inizializzato quando viene dichiarato 
    // L'utilizzo di const senza inizializzare l'array e un errore di sintatassi
    // Esempio che genera un errore : 

    // const cars_3;
    // cars_3 = ["Saab", "Volvo", "BMW"];

    // gli array dichiarati con var possono essere inizializzati in qualsiasi momento 
    // puoi anche usare l'array prima che venga dichiarato ( grazie al sollevamento javascript )

    // questo esempio va bene :
    cars_4 = ["Saab", "Volvo", "BMW"];
    var cars_4;

    //--------------------------------------------------------------------
    // Ambito del blocco di const 
    // Un array dichiarato con const a Block Scope 
    // Un array dichiarato in un blocco non e lo stesso di un array dichiarato al di fuori el blocco 

    //  Esempio :

    const cars_5 = ["Saab", "Volvo", "BMW"];
    window.console.log("cars_5 : ", cars_5);

    {
        const cars_5 = ["Toyota", "AUDI", "Fiat"]
        window.console.log("myFunction_custom_11 cars_5 block scope  : ", cars_5)
    }

    window.console.log("cars_5 : ", cars_5);

    // Un array dichiarato con var non ha Block Scope ma Global Scope 

    var cars_6 = ["Saab", "Volvo", "BMW"];
    window.console.log("cars_6 : ", cars_6);

    {
        var cars_6 = ["Toyota", "AUDI", "Fiat"]
        window.console.log("myFunction_custom_12 cars_6 Global scope : ", cars_6);

    }

    window.console.log("cars_6 : ", cars_6);
    //--------------------------------------------------------------------

    // javascript curly brackets without function

    // solo le parentesi graffe {} , su javascript senza nome di funzione e senza le parentesi tonde 
    // indicano un blocco di codice con Block Scope 
    // non ha senso mettere dentro le graffe che rappresentano il Block Scope , var che hanno Global Scope 
    // non appena scriviamo codice all'esterno delle parentesi graffe non siamo piu dentro il Block Scope 
    {
        const my_array_coustom = [10, 2, 100]
        window.console.log("Block Scope my_array_coustom :", my_array_coustom);
    }
    const my_array_coustom = [100]
    window.console.log("Global Scope my_array_coustom :", my_array_coustom);

    //--------------------------------------------------------------------
    // Redeclaring Array 
    // Ridichiare un Array 
    // Ridichiarea un array dichiarato con var e consentito ovunque in un programma , 

    var cars_7 = ["Saab", "Volvo"]; //allowed
    var cars_7 = ["BMW", "Volvo"];  //allowed
    cars_7 = ["AUDI", "Volvo"]; //allowed

    window.console.log("Global Scope cars_7 :", cars_7);


    // Non e consentito (passare da var a const ) ridichiarare o riassegnare un array a const, nello stesso ambito o nello stesso blocco 

    var cars_8 = ["BMW", "Volvo"]; // allowed
    // const cars_8 = ["Saab", "Volvo"]; //not allowed
    window.console.log("Global Scope cars_8 :", cars_8);

    {
        var cars_8 = ["BMW", "Volvo"]; // allowed
        // const cars_8 = ["BMW", "Volvo"]; //not allowed
        window.console.log("Block Scope cars_8 :", cars_8);

    }

    // non e consentito ridichiarare o riassegnare un const array esistente , nello stesso ambito o nello stesso blocco :

    const cars_9 = ["Saab", "Volvo"]; // allowed
    // const cars_9 = ["Saab", "Volvo"]; //not allowed
    // var cars_9 = ["Saab", "Volvo"]; //not allowed
    // cars_9 = ["Saab", "Volvo"]; //not allowed
    window.console.log("Global Scope cars_9 :", cars_9);

    {
        const cars_9 = ["Saab", "Volvo"]; // allowed
        // const cars_9 = ["Saab","Volvo"] ; //not allowed
        // var cars_9 = ["Saab","Volvo"] ; //not allowed
        // cars_9 = ["Saab","Volvo"] ; //not allowed
        window.console.log("Block Scope cars_9 :", cars_9);

    }

    // e consentito richiarareun array con const, in un atlro ambito o in un altro blocco 
    const cars_10 = ["Saab", "Volvo"]; // allowed
    window.console.log("Global Scope cars_10 :", cars_10);
    {
        const cars_10 = ["BMW", "AUDI"] // allowed
        window.console.log("Block Scope cars_10 :", cars_10);

    }
    {
        const cars_10 = ["Toyota", "Fiat"] // allowed
        window.console.log("Block Scope cars_10 :", cars_10);

    }





}