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










}