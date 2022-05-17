// w3school tutorial inzio da: JS Array Method 
// w3school tutorial fine in : JS Array Iteration  

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
    window.console.log("fruit_7", fruit_7);

    //--------------------------------------------------------------------

    // Javascript lunghezza della Matrice 
    const fruit_8 = ["Banana", "Orange", "Apple", "Mango"];
    fruit_8[fruit_8.length] = "kiwi";
    window.console.log("furit_8", fruit_8);

    //--------------------------------------------------------------------

    // Array Javascript Delete 
    // AVVERTIMENTO !
    //  Gli elementi dell'array possono essere eleminati utilizzando l'operatore Javascript Delete .
    // Usare i delete lascera dei buchi , che saranno undefined nell'array 
    // e buona patrica usare pop o shift  
    // esempio :
    const fruit_9 = ["Banana", "Orange", "Apple", "Mango"];
    delete fruit_9[0];
    window.console.log("fruit_9 delete ", fruit_9);
    window.console.log("fruit_9[0] elemento eliminato con delete", fruit_9[0]);

    //--------------------------------------------------------------------
    // Unione concatenazione di array 
    // il concat() metodo crea un nuovo array unendo( concatenando ) gli array esistenti :
    // esempio :
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];

    const myChildren = myGirls.concat(myBoys);
    window.console.log(" mychildren ", myChildren);

    // il metodo concat() non modifica gli array esistenti  . Restituisce sempre un nuovo array 
    // il concat() metodo puo accettare un numero quasiasi di argomenti dell'array 
    // Esempio (unione di tre array ) :
    const array_1 = ["Cecilie", "Lone"];
    const array_2 = ["Emil", "Tobias", "Linus"];
    const array_3 = ["Robin", "Morgan"];
    const myChildren_2 = array_1.concat(array_2, array_3);
    window.console.log("myChildren_2 conca 2 array  :", myChildren_2)

    // Il concat() metodo puo accettare stringhecome argomenti 

    const array_4 = ["Emil", "Tobias", "Linus"];
    const array_5 = array_4.concat("Peter");
    window.console.log("array_5 concat stringa :", array_5);

    //--------------------------------------------------------------------

    // splicing and slicing array 



}