// w3school tutorial inzio da: JS string template 
// w3school tutorial fine in : JS string search

$(function () {
    console.log("ready!")
    prova3()
});

function prova3() {
    window.console.log("ready! prova3");
    //--------------------------------------------------------------------

    //sintassi back-tic 

    //I valori letterali deel modello usando i segni spunta indietro / accento grave (``) 
    //invece delle virgolette ("") per definire una stringa 
    let text = `Hello World! `;

    //--------------------------------------------------------------------


    //Citazioni dentro le stringhe 

    //con il teemplate liteerals, puoi usare le virgolette si singole che doppie all'interno di una stringa :
    let text2 = `he's often called "Jhonny" `;

    //--------------------------------------------------------------------

    //Stringhe mutilinea

    // i valore letterali del modelloo conseento stringhe multilinea : 
    let text3 = `The quick 
    brow fox 
    jumps over 
    the lazy dog 
    `;

    //--------------------------------------------------------------------

    //interpolazione 

    //i valori letterali del modello forniscono un modo semplice per interpolare variabili ed espressioni in stringhe . 
    // il metodo e chiamato interpolazione di stringhe 
    // la sintassi e :

    //${ nome variabile }

    let first_name = `nome`;
    let last_name = `cognome`;
    let text_prova = ` Welcome ${first_name} , ${last_name} `;
    window.console.log(`text_prova : `, text_prova);

    // la sostituzione automatica delle variabili con valori reali e chiamata interpolazione di stringhe 

    //--------------------------------------------------------------------


    // Sostituzione di espressioni 
    // I valori letterali nel modello consentono la sostituzione di stringhe

    let price = 10;
    let Vat = 0.25;

    let Total = `Total : ${(price * (1 + Vat)).toFixed(2)}`;
    // .toFixed indica il numero di cifre da visualizzare dopo la virgola .
    window.console.log(Total);

    // la sostituzione automatica con valori reali e chiamata intrpolazione di stringhe 

    //--------------------------------------------------------------------

    //Modelli html 
    let headers = `Template Literacy`;
    let tags = [`template literals `, ` javascript`, `es6`];
    let html = `<h2> ${headers} </h2><ul>`;
    for (const x of tags) {
        html += `<li>${x}</li>`;
    }
    html += `</ul>`;

    window.console.log(`html : `, html);

    //--------------------------------------------------------------------

    //Numeri javascript 
    //javascript ha un solo tipo di numero , i numeri possono essere scritti con o senza decimali 

    let numero_1 = 3.14; //numero con decimali 
    let numero_2 = 3; // numero senza decimali 

    //Numeri extra grandi o estra piccoli possono essere scritticon notazione scientifica ( esponente ) 

    let numero_3 = 123e5 // 12300000
    let numero_4 = 123e-5 // 0.00123

    //--------------------------------------------------------------------

    //I numeri Javascript sono sempre in virgola mobile a 64 bit 

    // A differenza di molti altri linguaggi di programmazione , Javascript non definisce 
    // diversi tipi di numeri : , come interi , short , long , virogola mobile , ecc ... 

    // I numeri in javascript vengono sempre archiviati come numeri a virgola mobile a doppia precisione ,
    // secondo lo standard internazionale IEEE 754 

    // Questo formato memorizza i numeri in 64 bit  , dove il numero (la frazione ) e
    // memorizzato nel bit da 0 a 51 , l'esponente e nel bit da 52 a 62 e il segno nel bit 63 

    // Valore (aka frazione/Mantissa )                      52 bit ( 0 - 51 )
    // Esponente                                            11 bit ( 52 - 62 )
    // Segno                                                1 bit ( 63 )

    //--------------------------------------------------------------------

    //Precisione intera 

    //I numeri interi ( numeri senza punta o notazione esponente ) sono accurati fino a 15 cifre 
    let numero_test_1 = 999999999999999; //15 numeri 
    let numero_test_2 = 9999999999999999; //16 numeri 

    window.console.log(`numero_test_1 :`, numero_test_1); //999999999999999
    window.console.log(`numero_test_2 :`, numero_test_2); //10000000000000000

    // il numero massimo per i decimali e 17 .

    //--------------------------------------------------------------------


    // Precisione fluttuante 

    // L'aritmentica a virgola mobile non e sempre accurata al 100% :
    let numero_5 = 0.2 + 0.1;
    window.console.log(`numero_5 :`, numero_5);

    // Per risolvere il problema di cui sopra , e utile moltiplicare e dividere 
    let numero_6 = (0.2 * 10 + 0.1 * 10) / 10;
    window.console.log(`numero_6 : `, numero_6);

    // Aggiunta di numeri e stringhe 
    // ATTENZIONE !!!
    // javascript usa l'operatore  + sia per la somma che per la concatenazione 
    // I numeri sono sommati , le stringhe sono concatenate

    //--------------------------------------------------------------------

    let numero_somma_1 = 10;
    let numero_somma_2 = 20;
    let risultato_somma = numero_somma_1 + numero_somma_2;
    window.console.log(`risultato_somma : `, risultato_somma);

    // se aggiungi due stringhe il risultato sara concatenato 
    let stringa_1 = "10";
    let stringa_2 = "20";
    let stringa_somma = stringa_1 + stringa_2;
    window.console.log(`stringa_somma :`, stringa_somma);


}