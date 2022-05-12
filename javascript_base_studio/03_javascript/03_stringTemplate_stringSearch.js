// w3school tutorial inzio da: JS string template 
// w3school tutorial fine in : JS Numbers

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

    //--------------------------------------------------------------------

    // Aggiunta di numeri e stringhe 
    // ATTENZIONE !!!
    // javascript usa l'operatore  + sia per la somma che per la concatenazione 
    // I numeri sono sommati , le stringhe sono concatenate


    let numero_somma_1 = 10;
    let numero_somma_2 = 20;
    let risultato_somma = numero_somma_1 + numero_somma_2;
    window.console.log(`risultato_somma : `, risultato_somma);

    //--------------------------------------------------------------------

    // se aggiungi due stringhe il risultato sara concatenato 
    let stringa_1 = "10";
    let stringa_2 = "20";
    let stringa_somma = stringa_1 + stringa_2;
    window.console.log(`stringa_somma :`, stringa_somma);

    //--------------------------------------------------------------------


    // se aggiungi un numero e una stringa , il risualto sara una concatenazionee di stringhe 
    let numero_7 = 10;
    let stringa_7 = "20";
    let stringa_somma_7 = numero_7 + stringa_7;
    window.console.log("stringa_somma_7 :", stringa_somma_7);

    //--------------------------------------------------------------------

    // un errore comune e aspettarsi chee questo risultato sia 30 
    let numero_8 = 10;
    let numero_9 = 20;
    let stringa_8_9 = "The result is " + numero_8 + numero_9;
    window.console.log("stringa_8_9 :", stringa_8_9);

    //--------------------------------------------------------------------

    // un errore comune e aspettarsi che questo risultato sia 102030
    let x_10 = 10;
    let y_11 = 20;
    let z_12 = "30";
    let result_10_11_12 = x_10 + y_11 + z_12;
    window.console.log("result_10_11_12 : ", result_10_11_12);

    // L'interprete javascript funziona da sinistra a destra 
    // il primo (10 + 20) viene aggiunto perche  x_10 e y_11 sono entrambi numeri 
    // il secondo 30 + "30" viene concatenato perche z_12 e una stringa 

    //--------------------------------------------------------------------

    //Stringhe numeriche 
    // le stringhe javascript possono avere contenuto numerico 
    let x_13 = 100;
    window.console.log("x_13 :", x_13, " tipo : ", typeof (x_13));

    let y_13 = "100";
    window.console.log("y_13 :", y_13, " tipo : ", typeof (y_13));

    //javascript provera a convertire le stringhe in numeri in tutte le operazioni numeriche :
    //Questo (la divisione ) funzionera 

    let x_14 = "100";
    let y_14 = "10";
    let z_14 = x_14 / y_14;
    window.console.log("z_14 : ", z_14, "x e y sono stringhe ");

    //--------------------------------------------------------------------

    //Questo (la moltiplicazione ) funzionera anche : 

    let z_15 = x_14 * y_14;
    window.console.log("z_15 : ", z_15, "x e y sono stringhe ");

    //--------------------------------------------------------------------
    // E Questo (la sottrazione ) funzionera anche : 

    let z_16 = x_14 - y_14;
    window.console.log("z_16 : ", z_16, " x e y sono stringhe ");

    //--------------------------------------------------------------------
    // Ma Questo(la somma ) non funzionera : 

    let z_17 = x_14 + y_14;
    window.console.log("z_17 : ", z_17, "x e y sono stringhe ");

    // javascript usa l'operatore + per concatenare le stringhe 

    //--------------------------------------------------------------------

    //NaN non un numero 
    //NaN e una parola riservata che Javascript e indica che un numero non e legale 
    //Il tentativo di eseguire aritmetica con una stringa non numerica risultera in NaN (Not a Number (Non un Numero ) )

    let z_18 = x_14 / "Apple ";
    window.console.log('z_18', z_18);

    //--------------------------------------------------------------------

    //Tuttavia se la stringa contiene un valore numerico  , il risultato sara un numero : 

    let z_19 = 100 / "10";
    window.console.log("z_19 :", z_19, "il dividendo e una stringa numerica");

    //--------------------------------------------------------------------

    // Puoi usare la funzione Javascript globale isNaN() per scoprire se un valore non e un numero : 
    let z_20 = 100 / "Apple";
    window.console.log("z_20 : ", z_20, " isNaN : ", isNaN(z_20));


    //--------------------------------------------------------------------

    //Fai attenzione a NaN . Se usi NaN in un operazione matematica  , il risultato sara anche NaN : 

    let z_21 = NaN + 5;
    window.console.log("z_21 : ", z_21);

    //--------------------------------------------------------------------

    //Oppure il risultato potrebbe essere una concatenazione come NaN5 :

    let z_22 = NaN + "5";
    window.console.log("z_22 : ", z_22);

    //--------------------------------------------------------------------

    //NaN e un numero  : typeof Nan  restituisce number : 

    window.console.log("NaN : ", NaN, "tipo :", typeof (NaN));

    //--------------------------------------------------------------------

    //Infinito 
    //Infinity e il numero che javascript restituira se calcoli un numero al 
    //di fuori del numero piu grande possibile . Esempio : 
    let myNumber = 2;
    //Execute until infinity 
    while (myNumber != Infinity) {
        myNumber = myNumber * myNumber;
        window.console.log("myNumber : ", myNumber, "tipo : ", typeof (myNumber));
    }

    //--------------------------------------------------------------------

    // La divisione per 0(zero) genera anche Infinity
    let z_23 = 2 / 0;
    window.console.log("z_23 : ", z_23);

    let z_24 = -2 / 0;
    window.console.log("z_24 : ", z_24);

    //--------------------------------------------------------------------
    // Infinity e un numero: typeofinfinity restitusce numerico

    window.console.log("Infinity : ", Infinity, " tipo : ", typeof (Infinity));

    //--------------------------------------------------------------------

    // Esadecimale 

    // javascript interpreta le costanti numeriche come esadecimali se sono precedute da 0x 
    let numero_esadecimale = 0xFF;
    window.console.log("numero_esadecimale : ", numero_esadecimale);

    //--------------------------------------------------------------------


    // non scrivere un numeror con uno 0 iniziale ( come 07 ).
    // alcune versioni di javascript interpretano i numeri come ottali se sono preceduti da uno 0 ;

    // per impostazione predefinita  , Javascript visualizza i numeri come base 10 ( decimali )
    // Ma puoi usare il metodo toString() , per generare numeri da base2 a base 36
    // L'esadecimale e in base 16 , il decimale a base 10 , l'otttale a base 8 , il binario a base 2 

    //esempio 
    let numero_test_32 = 32;


    window.console.log("numero_test_32 base 32 : ", numero_test_32.toString(32));

    numero_test_32.toString(16);
    window.console.log("numero_test_32 base 16 : ", numero_test_32.toString(16));

    numero_test_32.toString(12);
    window.console.log("numero_test_32 base 12 : ", numero_test_32.toString(12));

    numero_test_32.toString(10);
    window.console.log("numero_test_32 base 10 : ", numero_test_32.toString(10));

    numero_test_32.toString(8);
    window.console.log("numero_test_32 base 8 vale : ", numero_test_32.toString(8));

    numero_test_32.toString(2);
    window.console.log("numero_test_32 base 2 vale : ", numero_test_32.toString(2));

    //--------------------------------------------------------------------

    //Numeri javascript come oggettti

    //normalmente i numeri javascrript sono valori primitivi creati da letterali 

    let numero_test_3 = 123;
    window.console.log("numero_test_3 vale : ", numero_test_3);

    // Ma i numeri possono anche essere definiti come oggetti con la parola chiave new 

    let numero_test_4 = new Number(123);
    window.console.log("numero_test_4 vale : ", numero_test_4);

    //Non crearee oggetti numero 
    // la New parola chiave complica il codice e rallenta la velocita di esecuzione
    // gli oggetti numerrici possono produrre risultati imprevisti 

    let numero_test_5 = 100
    let numero_test_6 = new Number(100);
    window.console.log("numero_test_5 vale : ", numero_test_5, "numero_test_6 vale : ", numero_test_6);

    if (numero_test_5 == numero_test_6) {
        window.console.log("numero_test_5 e numero_test_6 e true su operazione ==")
    } else {
        window.console.log("numero_test_5 e numero_test_6 e false su operazione ==")
    }

    if (numero_test_5 === numero_test_6) {
        window.console.log("numero_test_5 e numero_test_6 e true su operazione ===")
    } else {
        window.console.log("numero_test_5 e numero_test_6 e false su operazione ===")
        window.console.log("numero_test_5 e di tipo numerico l'altro (numero_test_6) di tipo oggetto ")
    }

    //Nota soppra la differenza tra == e === 
    // == confronta solo i valori 
    // === confronta i valori e il tipo 

    window.console.log("-------------------------------------------------")


    let numero_test_7 = new Number(100);
    let numero_test_8 = new Number(100);
    window.console.log("numero_test_7 vale : ", numero_test_7, "numero_test_8 vale : ", numero_test_8);

    if (numero_test_7 == numero_test_8) {
        window.console.log("numero_test_7 e numero_test_8 e true su operazione ==")
    } else {
        window.console.log("numero_test_7 e numero_test_8 e false su operazione ==")
    }

    if (numero_test_7 === numero_test_8) {
        window.console.log("numero_test_7 e numero_test_8 e true su operazione ===")
    } else {
        window.console.log("numero_test_7 e numero_test_8 e false su operazione ===")
        window.console.log("numero_test_7 e di tipo numerico l'altro (numero_test_8) di tipo oggetto ")
    }

    // il confronto di due oggetti javascript restituisce sempre false 


}