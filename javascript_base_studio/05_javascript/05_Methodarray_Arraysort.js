// w3school tutorial inzio da: JS Array Method 
// w3school tutorial fine in : JS Array Sort  

$(function () {
    console.log("ready!")
    prova3()
});

function prova3() {
    window.console.log("ready! prova3");
    //--------------------------------------------------------------------

    // Conversione Array/ Matrice  in stringhe
    // il metodo javascript toString()converte una matrice in una stringa di valori (separati da virgole ) esempio : 
    const fruit = ["Banana", "Orange", "Apple", "Mango"];
    window.console.log("fruit.toString() :", fruit.toString());
    window.console.log("typeof (fruit.toString()) :", typeof (fruit.toString()));

    //--------------------------------------------------------------------

    // il join() metodo unisce anche tutti gli elementi dell'array in una stringa 
    // Si compoprta propio come toString() , ma in aggiunta puoi specificare il separatore : 
    const fruit_2 = ["Banana", "Orange", "Apple", "Mango"];
    window.console.log("fruit.join('*') :", fruit_2.join('*'));
    window.console.log("typeof (fruit.join('*')) :", typeof (fruit_2.join('*')));

    //--------------------------------------------------------------------

    // popping e pushing (schioccare e spingere )
    // Quando si lavora con gli array , e facile rimuovere gli elementi ed aggiungere nuovi elementi 
    // Ecco cosa e il pop e il push 
    // pop : estrarre gli elementi da un array 
    // push : inserire gli elementi in un array 


    //--------------------------------------------------------------------
    // Matrice javascript pop 
    const fruit_3 = ["Banana", "Orange", "Apple", "Mango"];
    let last_pop = fruit_3.pop();

    window.console.log("fruit_3 pop : ", fruit_3);
    window.console.log("last_pop : ", last_pop);

    //--------------------------------------------------------------------
    // Matrice javascript push

    // il push metodo aggiungeun nuovo elemento all'array , ( alla fine ) : 
    const fruit_4 = ["Banana", "Orange", "Apple", "Mango"];
    let nuova_lunghezza = fruit_4.push("Kiwi");

    window.console.log("fruit_4 push  : ", fruit_4);
    window.console.log("nuova_lunghezza : ", nuova_lunghezza);

    // il metodo push restituisce la nuova lunghezza dell'array 

    //--------------------------------------------------------------------

    // Shifting elementi
    // lo shifting e equivalente al pop, ma lavora sul primo elemento invece che l'ultimo 

    //--------------------------------------------------------------------
    // Javascript array shift()
    // il metodo shift() rimuove il primo elemento dell'array e decrementa l'indice di tutti gli atri (di 1 per ogni shift )
    const fruit_5 = ["Banana", "Orange", "Apple", "Mango"];
    let shift_value = fruit_5.shift();

    window.console.log("fruit_5 shift  : ", fruit_5);
    window.console.log("shift_value : ", shift_value);
    // il metodo shift ritorna il valore che e stato shiftato fuori , (uscito dall'array )

    //--------------------------------------------------------------------
    // javascript array unshift()
    // il metodo unshift aggiunge un nuovo elemento a un array ( all'inizio ) e e sposta di 1 tutti gli elementi 
    const fruit_6 = ["Banana", "Orange", "Apple", "Mango"];
    let lunghezza_2 = fruit_6.unshift("Lemon")

    window.console.log("unshfit lemon fruit_6 : ", fruit_6);
    window.console.log("lunghezza_2 : ", lunghezza_2);
    // il metodo unshift restituisce la nuova lunghezza dell'array 

    //--------------------------------------------------------------------

    // Elementi che cambiano 
    // Gli elementi dell'array sono accessibili usando il loro numero indice : 
    // Gli indici di array iniziano con 0 
    // [0] e il primo elemento 
    // [1] e il secondo 
    // [2] e il terzo e cosi via ...
    // esempio : 
    const fruit_7 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_7[0] = "kiwi";
    window.console.log("fruit_7 :", fruit_7);

    //--------------------------------------------------------------------

    // Javascript lunghezza della Matrice 
    const fruit_8 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_8[fruit_8.length] = "kiwi";
    window.console.log("furit_8 :", fruit_8);

    //--------------------------------------------------------------------

    // Array Javascript Delete 
    // AVVERTIMENTO !
    //  Gli elementi dell'array possono essere eleminati utilizzando l'operatore Javascript Delete .
    // Usare i delete lascera dei buchi , che saranno undefined nell'array 
    // e buona patrica usare pop o shift  
    // esempio :
    const fruit_9 = ["Banana", "Orange", "Apple", "Mango"];
    delete fruit_9[0];
    window.console.log("fruit_9 delete : ", fruit_9);
    window.console.log("fruit_9[0] elemento eliminato con delete : ", fruit_9[0]);

    //--------------------------------------------------------------------
    // Unione concatenazione di array 
    // il concat() metodo crea un nuovo array unendo( concatenando ) gli array esistenti :
    // esempio :
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys);
    window.console.log("mychildren : ", myChildren);

    // il metodo concat() non modifica gli array esistenti  . Restituisce sempre un nuovo array 
    // il concat() metodo puo accettare un numero quasiasi di argomenti dell'array 
    // Esempio (unione di tre array ) :
    const array_1 = ["Cecilie", "Lone"];
    const array_2 = ["Emil", "Tobias", "Linus"];
    const array_3 = ["Robin", "Morgan"];
    const myChildren_2 = array_1.concat(array_2, array_3);
    window.console.log("myChildren_2 conca 2 array :", myChildren_2)

    // Il concat() metodo puo accettare stringhecome argomenti 

    const array_4 = ["Emil", "Tobias", "Linus"];
    const array_5 = array_4.concat("Peter");
    window.console.log("array_5 concat stringa :", array_5);

    //--------------------------------------------------------------------
    // splicing and slicing array 

    // lo splice() metodo aggiunge nuovi elementi ad una amtrice 

    // lo slice() metodo taglia un pezzo di array 

    //--------------------------------------------------------------------

    // Jascript array splice 

    // lo splice() metodo puo essere utilizzato per aggiungere nuovi elementi a un array :
    const fruit_10 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_10.splice(2, 0, "Lemon", "Kiwi");
    window.console.log("fruit_10 slice() : ", fruit_10);

    // il primo parametro (2) definisce la posizione in cui devono essere aggiunti i nuovi elementi 
    // il secondo parametro (0) definisce quanti elementi devono essere rimossi 
    // il resto dei parametri("Limone", "Kiwi") definiscei nuovi elementida aggiungere 
    // lo splice metodo restituisce un array con gli elementi eliminati

    // il metodo splice rimuove gli elemnti partendo dalla fine

    const fruit_11 = ["Banana", "Orange", "Apple", "Mango"];
    let splice_result = fruit_11.splice(2, 2, "Lemon", "Kiwi");
    window.console.log("fruit_11 slice() :", fruit_11);
    window.console.log("splice_result :", splice_result);

    const fruit_12 = ["Banana", "Orange", "Apple", "Mango"];
    let array_fruit = ["Kiwi", "Lemon"];
    fruit_12.splice(0, 0, array_fruit);
    window.console.log("fruit_12 splice con array :", fruit_12);
    // se usi lo splice con un array , aggiungerai un array 
    // alla posizione del primo parametro dello slice  

    //--------------------------------------------------------------------
    // Utilizzo dello splice() per rimuovere elementi 
    const fruit_13 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_13.splice(0, 1);

    window.console.log("fruit_13 :", fruit_13);
    // il primo parametro (0) definisce la posizione in cui devono essere aggiunti nuovi elementi(uniti)
    // il secondo parametro (1) definisce quanti elementi devono essere rimossi 
    // il resto dei parametri viene omesso .Non verranno aggiunti nuovi elementi 

    //--------------------------------------------------------------------

    // Jascript array slice()
    //  lo slice() metodo tagli un array in un nuovo array .

    // questo esempio tagli una parte di array a partire dall'elemento 1("Arancione")
    const fruit_14 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const taglio_array_1 = fruit_14.slice(1);
    window.console.log("fruit_14 :", fruit_14);
    window.console.log("array_1 da taglio fruit_14 dal 1 :", taglio_array_1);

    // il metodo slice() crea un nuovo array 
    // lo slice() metodo non rimuove alcun elemento dell'array di origine 

    //  Questo esempio taglia una parte di array a partire dall'elemeto dell'array 3  ("Apple")
    const fruit_15 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const taglio_array_3 = fruit_15.slice(3);

    window.console.log("fruit_15 :", fruit_15);
    window.console.log("array_1 da taglio fruit_15 dal 3 :", taglio_array_3);

    // lo slice metodo puo accettare due argomenti come slice(1,3)
    // il metodo quindi seleziona gli elementi dell'argomento iniziale e fino a ( ma escuso) ,l'argomento finale 

    const fruit_16 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const taglia_array_1_3 = fruit_16.slice(1, 3);
    window.console.log("fruit_16 :", fruit_16);
    window.console.log("taglia_array_1_3 da taglio fruit_16 da 1 a 3(escluso l'ultimo):", taglia_array_1_3);

    // se l'agomento viene omesso lo slice() metodo  tagliera fino al resto dell'array 

    const fruit_17 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const taglia_array_2 = fruit_17.slice(2);
    window.console.log("fruit_17 :", fruit_17);
    window.console.log("taglia_array_2 da taglio fruit_16 da 2 a ultimo (incluso) :", taglia_array_2);

    //--------------------------------------------------------------------
    // toString automatico()
    // Javascript converte automaticamente un array in una stringa separata da virgolette quando e previsto un valore primitivo 
    // Questo e il caso in cui si tenta di generare un array 
    // Questi due esempi produrrano lo stesso risultato :
    const fruit_18 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    let fruit_18_string = fruit_18.toString();

    window.console.log("fruit_18 :", fruit_18);
    window.console.log("fruit_18_string :", fruit_18_string);

    const fruit_19 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    document.getElementById("id_div_demo").innerHTML = fruit_19
    window.console.log("fruit_19 :", fruit_18);


    // Nota tutti gli oggetti Javascript hanno un metodo toString()

    //--------------------------------------------------------------------
    // Trovare i valori massimi e i valori minimi su una matrice 
    // Non ci sono funzioni per trovare il valore massimo o il valore minimo su una matrice

    //--------------------------------------------------------------------
    // ordinamento di una matrice 
    // il sort() metodo ordina un array/matrice in ordine alfabetico 
    const fruit_20 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    fruit_20.sort();
    window.console.log("fruit_20 dopo sort :", fruit_20);
    // il metodo sort va ad ordinare l'array modificandolo , non ne crea un altro

    //--------------------------------------------------------------------
    // inversione di un array 
    // il reverse() metodo inverte gli elementi di una matrice  
    // puoi usarlo per ordinare un array in modo decrescente , esempio :
    const fruit_21 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    fruit_21.sort();
    fruit_21.reverse();
    window.console.log("fruit_21 dopo sort e reverse :", fruit_21);
    // anche il metodo reverse() inverte gli elementi di una matrice  

    //--------------------------------------------------------------------
    // Ordinamento numerico 
    // Per impostazione predefinita , la sort() funzione ordina i valori come stringhe 
    // Funziona bene per le stringhe infatti("Apple" viene prima di "Banana")
    // Tuttavia se i numeri sono ordinati come stringhe "25" e maggiore di "100" , perche "2" e maggiore di "1"
    // Per questo motivo il metodo sort() produrra un risultato errato durante l'ordinamento dei numeri 
    // Puoi risolvere questo problema fornendo una funzione di controllo 
    // Esempio : 

    const punteggio_test = [40, 100, 1, 5, 25, 10];
    punteggio_test.sort();
    window.console.log("punteggio_test sort semplice (sara errato ) ", punteggio_test);


    const punteggio = [40, 100, 1, 5, 25, 10];
    punteggio.sort(function (a, b) { return a - b })
    window.console.log("punteggio sort con funzione per nuemri , ordine ascendete  ", punteggio);

    // usiamo lo stesso trucco per ordinare un array discendete 
    const punteggio_2 = [40, 100, 1, 5, 25, 10];
    punteggio_2.sort(function (a, b) { return b - a });
    window.console.log("punteggio_2 sort con funzione per numeri , ordine discendente :", punteggio_2);

    //--------------------------------------------------------------------
    // La funzione di confronto 
    // lo scopo della funzione di confronto e definire un ordinamento alternativo 
    // la funzione di confronto dovrebbe restituire un valore negativo, zero o positivo, a seconda degli argomenti :
    // function(a, b) { return a - b }
    // Quando la sort funzione confronta due valori , invia i valori alla funzione di confronto e ordina i valori in base al valore restituito (negativo ,zero , positivo ).
    // Se il risultato e negativo a viene ordinato prima di b .
    // Se il risultato e positivo b viene ordinato prima di a
    // se il risultato e 0, non vengono apportate modifcheall'ordinamento dei due valori 
    // Esempio :
    // La funzione di confrontoconfronta tutti i valori nell'array , due valori alla volta (a,b).
    // Quando si confrontano 40 e 100  , il sort metodo chiama la funzione di confronto (40,100) .
    // la funzione calcola 40 - 100 ( a - b ) e poiche il risultato e negativo ( -60 ) , la funzione di ordinamento ordina 40 come un valore inferiore a 100 . 

    //--------------------------------------------------------------------
    // Ordinamento di una matrice in ordine casuale 
    const punteggio_3 = [40, 100, 1, 5, 25, 10];
    punteggio_3.sort(function (a, b) { return 0.5 - Math.random() });
    window.console.log("punteggio_3", punteggio_3)

    //--------------------------------------------------------------------
    // il metodo fisher yates 
    // l'esempio sopra  , array.sort() , non e accurato e favorira alcuni elementi rispetto ad altri .
    //  il metodo piu popolare, e chiamato fisher Yates shuffle , ed e stato introdotto nella scienza dei dati gia da 1938 
    // in Javascript il metodo puo essere traddo in questo 
    const punteggio_4 = [40, 100, 1, 5, 25, 10]
    for (let i = punteggio_4.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * i);
        let k = punteggio_4[i];
        window.console.log("fisher yates shuffle j :", j);
        window.console.log("fisher yates shuffle k :", k);

        punteggio_4[i] = punteggio_4[j]
        punteggio_4[j] = k;

        window.console.log("punteggio_4[i]:", punteggio_4[i]);
        window.console.log("punteggio_4[j]:", punteggio_4[j]);
    }
    window.console.log("punteggio_4 :", punteggio_4);

    //--------------------------------------------------------------------
    // Trova il valore dell'array piu alto 
    // Non ci sono funzioni integrate per trovare il massimo o il minimo in una matrice 
    // Tuttavia dopo aver ordinato una matrice  , e possibile utilizzare l'indice per ottenere i valori piu alti e i piu bassi 
    // ordinamento crescente 
    const punteggio_5 = [40, 100, 1, 5, 25, 10];
    punteggio_5.sort(function (a, b) { return a - b });
    window.console.log("punteggio_5 ", punteggio_5);
    window.console.log("punteggio_5[0] contiene il valore piu piccolo ", punteggio_5[0]);
    window.console.log("punteggio_5[punteggio_5.length -1 ] continene il valore piu grande ", punteggio_5[punteggio_5.length - 1]);

    // punteggio_5[0] contiene il valore piu piccolo 
    // punteggio_5[punteggio_5.length -1 ] continene il valore piu grande 

    // ordinamento descrescente 
    const punteggio_6 = [40, 100, 1, 5, 25, 10]
    punteggio_6.sort(function (a, b) { return b - a })
    window.console.log("punteggio_6 ", punteggio_6);
    window.console.log("punteggio_6[0] continene il valore piu grande  ", punteggio_6[0]);
    window.console.log("punteggio_6[punteggio_6.lenght -1 ] punteggio piu piccolo", punteggio_6[punteggio_6.length - 1]);
    // punteggio_6[0] continene il valore piu grande 
    // punteggio_6[punteggio_6.lenght -1 ] punteggio piu piccolo 

    // ATTENZIONE : l'ordinamento dell'array e un modo molto inefficente se si desidera solo trovare il valore piu alto ( o il piu basso )

    //--------------------------------------------------------------------

    // Utilizzo mi Math.max() su un array 
    // puoi usare Math.max.apply per trovare il numero piu alto in un array 
    // esempio : 
    function myArrayMax(array) {
        return Math.max.apply(null, array);
    }

    const punteggio_7 = [40, 100, 1, 5, 25, 10];
    myArrayMax(punteggio_7);
    window.console.log("myArrayMax(punteggio_7) : ", myArrayMax(punteggio_7));

    // Math.max.apply(null, [1, 2, 3]) e equivalente a Math.max(1, 2, 3) .

    function myArrayMax_2(param1, param2, param3) {
        return Math.max(param1, param2, param3);
    }

    myArrayMax_2(punteggio_7[0], punteggio_7[1], punteggio_7[2]);
    // window.console.log("myArrayMax(punteggio_7) : ", myArrayMax(punteggio_7[0], punteggio_7[1], punteggio_7[2]));
    // Math.max() non accetta array ma solo valori singoli 


    //--------------------------------------------------------------------

    // Utilizzo di Math.min su un array 
    // puoi utilizzare Math.min.apply su un array per trovare il valore piu basso 
    // esempio : 

    function myArrayMin(array) {
        return Math.min.apply(null, array);
    }

    const punteggio_8 = [40, 100, 1, 5, 25, 10];
    myArrayMin(punteggio_8);
    window.console.log("myArrayMin(punteggio_8); :", myArrayMin(punteggio_8));

    // Math.min.apply(null, [1, 2, 3]) e equivalente aMath.min(1, 2, 3). 

    function myArrayMin_2(param1, param2, param3) {
        return Math.min(param1, param2, param3);
    }

    myArrayMin_2((punteggio_8[0], punteggio_8[1], punteggio_8[2]));
    window.console.log("myArrayMin_2(punteggio_8); :", myArrayMin_2(punteggio_8[0], punteggio_8[1], punteggio_8[2]));
    // Math.min() non accetta array ma solo valori singoli 
    //--------------------------------------------------------------------

    // i metodi javascript min/max 
    // la soluzione piu veloce ed efficente e utilizzare un metodo "fatto in casa"
    // questa funzione scorre gli elementi dell'array confrontatndo ogni valore 
    // Trova il valore massimo esempio :
    function myArrayMax_custom(array) { //metodo fatto in casa 
        let len = array.length;
        let max = -Infinity;
        while (len--) {
            if (array[len] > max) {
                max = array[len];
            }
        }
        return max;
    }

    const punteggio_9 = [40, 100, 1, 5, 25, 10];
    window.console.log("myArrayMax_custom(punteggio_9) , metdo fatto in casa ", myArrayMax_custom(punteggio_9));

    // Questa funzione scorre un array confrontando ogni valore con il valore piu basso trovato 
    // Trova il minimo  esempio : 

    function myArrayMin_custom(array) {
        let len = array.length;
        let min = Infinity;
        while (len--) {
            if (array[len] < min) {
                min = array[len];
            }
        }
        return min;
    }

    const punteggio_10 = [40, 100, 1, 5, 25, 10];
    window.console.log("myArrayMin_custom(punteggio_10):", myArrayMin_custom(punteggio_10));
    //--------------------------------------------------------------------
    // Ordinamento di array di oggetti
    const cars = [
        { type: "Volvo", year: 2016 },
        { type: "Saab", year: 2001 },
        { type: "BMW", year: 2010 },
    ];

    // anche se gli oggetti hanno propieta di tipi di dati diversi , il sort() puo essere usato per ordinare gli array .
    // la soluzione e scrivere una funzione di controllo per confrontare i valori della propieta :
    cars.sort(function (a, b) { return a.year - b.year });
    window.console.log("cars dopo sort :", cars);

    // il confronto delle propieta delle stringhe e un po piu complesso 
    const cars_2 = [
        { type: "Volvo", year: 2016 },
        { type: "Saab", year: 2001 },
        { type: "BMW", year: 2010 },
    ];
    cars_2.sort(function (a, b) {
        let x = a.type.toLowerCase();
        let y = b.type.toLowerCase();
        if (x > y) { return -1 }
        if (x < y) { return 1 }
        return 0;
    })














}