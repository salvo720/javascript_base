// w3school tutorial inzio da: JS string template 
// w3school tutorial fine in : JS string search

$(function () {
    console.log("ready!")
    prova3()
});

function prova3() {
    window.console.log("ready! prova3");

    //sintassi back-tic 

    //I valori letterali deel modello usando i segni spunta indietro / accento grave (``) 
    //invece delle virgolette ("") per definire una stringa 
    let text = `Hello World! `;

    //Citazioni dentro le stringhe 

    //con il teemplate liteerals, puoi usare le virgolette si singole che doppie all'interno di una stringa :
    let text2 = `he's often called "Jhonny" `;

    //Stringhe mutilinea

    // i valore letterali del modelloo conseento stringhe multilinea : 
    let text3 = `The quick 
    brow fox 
    jumps over 
    the lazy dog 
    `;


    //interpolazione 

    //i valori letterali del modello forniscono un modo semplice per interpolare variabili ed espressioni in stringhe . 
    // il metodo e chiamato interpolazione di stringhe 
    // la sintassi e :

    //${ nome variabile }

    let first_name = `nome`;
    let last_name = `cognome`;
    let text_prova = ` Welcome ${first_name} , ${last_name} `;
    window.console.log(text_prova);




}