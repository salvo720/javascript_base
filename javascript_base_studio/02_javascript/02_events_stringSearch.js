// w3school tutorial inzio da: JS events
// w3school tutorial fine in : JS string search
$(function() {
    console.log( "ready!" )
    prova2()
});

function prova2(){
    window.console.log("base 2 e stato caricato")
    //  per trovare la lunghezza di una stringa possiamo usare la lenght propieta 
    var stringa = "oggi e una bella giornata "
    window.console.log("il tipo della stringa e :",typeof stringa , "\n" ,
    "il valore della stringa e : " , stringa , "\n" , "la lunghezza della stringa e : " , stringa.length)
    // per quanto riguarda i caratteri speciali su javascipt basta eseguire l'escape
    // per eseguire l'escape possiamo usare :
    //  1) \'
    //  2) \"
    //  3) \\  per inserire un blackslash nella tua stringa 

    // I 6 caratteri di escape sono stati originariamente progettati per controllare macchine da scrivere, telescriventi e fax. Non hanno alcun senso in HTML.
    // tra i caratteri noti di escape abbiamo : 
    // 1)  \b = nuova linea 
    // 2)  \f = avanzamento di modulo 
    // 3)  \n = nuova linea 
    // 4)  \r = ritorno  accapo  
    // 5)  \t = tabulatore orizzonta
    // 6)  \v = tabulatore verticale
    var stringa2="evviva i caratteri speciali \'  \b  \f  \n \r \t \v"
    window.console.log("il tipo della stringa2 e :",typeof stringa2 , "\n" ,
    "il valore della stringa2 e : " , stringa2 , "\n" , "la lunghezza della stringa2 e : " , stringa2.length)

    // se dichiariamo 2 stringhe ma una la dichiriamo usando il new operatore si andra a creare un oggeto stringa
    // quindi la stringa e l'oggetto stringa non sono uguali 
    var stringa3="prova"
    var stringa4= new String("prova")
    var stringa5= new String("prova")
    // stringa4 = {prova :"prova"}
    if (stringa3==stringa4 ){ window.console.log("i valori di stringa 3 e stringa 4 sono ugauli ")} else  { window.console.log("i valori di stringa 3 stringa 4 non sono ugauli ")}
    if (stringa3===stringa4 ){ window.console.log("i valori e il tipo di stringa 3 e stringa 4 sono ugauli ")} else  { window.console.log("i valori e il tipo di stringa 3 stringa 4 non sono ugauli ")}
    window.console.log("il tipo di stringa 4 e :" , typeof stringa4 , " \n il valore di stringa 4 e :",stringa4)

    // in questo caso i valori non posso essere confrontati 
    // perche il confronto tra due oggetti javascript restituira sempre false
    if (stringa5===stringa4 ){ window.console.log("i valori e il tipo di stringa 5 e stringa 4 sono ugauli ")} else  { window.console.log("i valori e il tipo di stringa 5 stringa 4 non sono ugauli ")}

    //  se conosciamo la posizione di una stringa in un stringa  possiamo usare la funzione slice per tagliare la stringa 
    var string_fruit = "apple,banana,cocco"
    window.console.log("ecco la stampa di banana da string_fruit" ,  string_fruit.slice(6,12))
    // se omesso il secondo parametro slice tagliera la stringa al punto fissato 
    window.console.log("ecco la stampa dei primi 6  da string_fruit" , string_fruit.slice(6))

    // oppure si puo partire falla fine usando un valore negativo 
    window.console.log("ecco la stampa dei ultimi 12  da string_fruit" , string_fruit.slice(-12))
    
    //  puoi estrarre i dati da una stringa anche usando substring 
    //  substring e simile a slice , la differenza e che substring non accetta valori negativi 
    //  substring prende come parametri 
    //  1) punto di inizio estrazione 
    //  2) lughezza stringa da estrarre 
    window.console.log("ecco la stampa dei dal punto 6 di lunghezza 6 da string_fruit : " , string_fruit.substr(6,6))
    
    // se omesso il secondo paramestro substr prendera la stringa successiva al punto specificato
    window.console.log("ecco la stampa dei primi 6 da string_fruit : " , string_fruit.substr(6))
    
    // se abbiamo solo 1 parametro puo essere negativo e nel caso in cui lo sia substring partira dall fine della stringa  
    window.console.log("ecco la stampa degli ultimi  6 da string_fruit : " , string_fruit.substr(-6))

    // il  metodo replcace sostiusci un valore di una stringa con un altro 
    var string_fruit2 = "banana , mirtillo , pesca "
    window.console.log("il tipo di string_fruit2 : ", typeof string_fruit2 , "\n ecco la stampa da string_fruit2 prima di replace : " ,  string_fruit2)
    var ban_mirtillo = "mirtillo"
    var valore_alternativo_mirtillo = "mela"
    string_fruit2=string_fruit2.replace( ban_mirtillo, valore_alternativo_mirtillo)
    window.console.log("il tipo di string_fruit2 :", typeof string_fruit2 ,  "\n ecco la stampa da string_fruit2 dopo replace: " , string_fruit2)

    //  per disattivare il case sensitive ci basta usare / prima e /i dopo la stringa 
    var string_fruit3 = "banana , Mirtillo , pesca "
    var ban_mirtillo2 = /mirtillo/i
    string_fruit3=string_fruit3.replace( ban_mirtillo2 , valore_alternativo_mirtillo)
    window.console.log("il tipo di string_fruit3 :", typeof string_fruit3 ,  "\n ecco la stampa da string_fruit3 dopo replace: " , string_fruit3)

    // per sostituire tutte le corrisponde trovate ci basta usare il flag /g 
    var string_fruit4 = "banana , mela , mirtillo , banana , melone "
    var ban_banana2 = /banana/g
    var valore_alternativo_banana = "pesca"
    string_fruit4 = string_fruit4.replace(ban_banana2,valore_alternativo_banana)
    window.console.log("banana si trovano alla 0 e alla 3 posizone (contando come un array ) (cioe alla prima e alla quarta) " + 
    "\n e sara sostituita con pesca ")
    window.console.log("il tipo di string_fruit3 :", typeof string_fruit4 ,  "\n ecco la stampa da string_fruit3 dopo replace: " , string_fruit4)

    // questa tipologia di dati usati senza le virgolette vengono chiamate espressioni regolari 

    // possiamo convertire una stringa da minusco a maiuscolo usando la funzione touppercase 
    let testo_minuscolo = "testo di prova"
    let testo_minuscolo_uppercase = testo_minuscolo.toUpperCase()
    window.console.log("il tipo di testo minuscoloe e : " , typeof testo_minuscolo , " \n il valore di testo minuscolo e " , testo_minuscolo )
    window.console.log("il tipo di da testo minuscolo a maiuscolo  e : " , typeof testo_minuscolo_uppercase , " \n il valore di testo minuscolo a maiuscolo e " , testo_minuscolo_uppercase )
    
    // possiamo convertire una stringa maiuscola in minuscolo usando il tolowercase 
    let testo_maiuscolo_a_minuscolo= testo_minuscolo_uppercase.toLowerCase()  
    window.console.log("il tipo di da testo maiuscolo a minuscolo e : " , typeof testo_maiuscolo_a_minuscolo , " \n il valore di testo da  maiuscolo a minuscolo e " , testo_maiuscolo_a_minuscolo )

    // concat unisce due o piu stringhe 
    var prova_3 = "ciao"
    var prova_34 = "jhonny"
    var prova_35= prova_3.concat(" ",prova_34);
    console.log("il valore finale della stringa su cui si esegui il CONCAT  e : " , prova_35)

    //  in alternativa al concat possiamo usare il piu 
    //  eseguono esattamente la stessa cosa 
    var prova_36 = prova_3 + " " + prova_34 
    console.log("il valore finale dove usiamo  + nella stringa e  : " , prova_36)

    //  le strighe su javascript sono immutabili , cioe  non possono essere modificate ma solo sostituite 

    //  il metodo trim rimuove gli spazi da una stringa all'inzio lasciando 1 e alla fine
    var prova_4 = "           hello word with many space            "
    prova_4 = prova_4.trim()
    console.log("il valore finale dove usiamo  il metodo trim  nella stringa e  :" , prova_4)

    //  ecma 2017 ha aggiunto 2 metodi di riempimento nelle stringhe 
    // start inserira i valori prima della stringa 
    var prova_5 = "5"
    prova_5 = prova_5.padStart(4,0)
    console.log("il valore finale dove usiamo  il metodo padStart nella stringa e  :" , prova_5)

    // end inserira i valori dopo della stringa 
    var prova_6 = "5"
    prova_6 = prova_6.padEnd(4,0)
    console.log("il valore finale dove usiamo  il metodo padEnd nella stringa e  :" , prova_6)

    //  il metodo charcode restituisce l'unicode del carattere all'indice indicato 
    // restituisce un utf-16 da 0 a 65535
    console.log("il valore unicode del carattere all'indice 0  e  :" , prova_6.charCodeAt(0))

    // ecmascript 2009 consente l'accesso alle stringhe come propieta (con indice )
    var variabile_string = "banana"
    console.log("il valore di variabile string e  :" , variabile_string)
    console.log("il valore accedendo come propienta alla posizione [0] e  :" , variabile_string[0])
    
    // accede cosi alle propieta potrebbe essere imprevedibile 
    // 1) fa sembrare le stringhe degli array ma non lo sono 
    // 2) se non viene trovato nessun carattere restituisce unfined , mentre charat restituisce una stringa vuota 
    // 3) e di solo lettura , ovvero non possiamo usare questo metodologia per modificare i valori delle variabili 
    //  prova.str[3] = "a"
    // non avremo errori javascript ma non funzionera 

    console.log("il valore accedendo come propienta alla posizione [0] e  :" , variabile_string[0])
    variabile_string[0]="a"
    // non abbiamo errori ma non funzionera la riga su 
    console.log("il valore accedendo come propienta alla posizione [0] dopo che la modifica con l'accesso come propieta non ha funzionato  e  :" , variabile_string)
    
    // se vogliamo usare una stringa come un array possiamo convertirla in array   usando il metodo split 
    // se non specifichiamo nulla nel metodo spit  verra creato un array con una stringa con 1 solo elemento 

    var array_fruit=string_fruit4.split()
    window.console.log("il tipo di arrayfruit e :" , typeof array_fruit, "il valore di array fruit e :" , array_fruit)

    // se specifichaimo un separatore nel metodo split , si andranno a creare degli elementi nell'array 
    // , tanti quanti gli elementi della stringa 
    //  possiamo usare 2 separatori :
    //  1) la virgola : ","
    //  2) lo spazio : " "
    //  3) pipe/tubo : "|"

    // ricorda di usare il separatore in base al separatore usato nella stringa 

    var array_fruit2=string_fruit4.split(",")
    window.console.log("il tipo di arrayfruit e :" , typeof array_fruit2 , "il valore di array fruit e :" , array_fruit2)

    var string_fruit5 = "banana mela pesca melone mela "
    var array_fruit3=string_fruit5.split(" ")
    window.console.log("il tipo di arrayfruit e :" , typeof array_fruit3 , "il valore di array fruit e :" , array_fruit3)

    var string_fruit6 = "banana | mela | anguria | pesca"
    var array_fruit4=string_fruit6.split("|")
    window.console.log("il tipo di arrayfruit e :" , typeof array_fruit4 , "il valore di array fruit e :" , array_fruit4)

    //  per cercare una stringa nelle strighe possiamo usare index of che alla corripsonda trovata ritorno il punto dove inzia la striga cercata 
    window.console.log("i valori dove cercare sono : ", string_fruit5)
    var cerca_mela = "mela"
    window.console.log(" la ricerca con indexof da come risposta  la posizione :" , string_fruit5.indexOf(cerca_mela))

    //  javascript inizia a contare le posizioni delle stringhe da 0 come negli array 

    // lastindex of restituisce la pozione di inizio dell'ultimo elemento trovato  nella stringa 
    window.console.log(" la ricerca con lastindexof da come risposta  la posizione :" , string_fruit5.lastIndexOf(cerca_mela) , " \n punto di inizio " , string_fruit5[25])

    //  puoi passare pure un secondo parametro alla stringa che indica la posizione di partenza 
    //  nell indexof il secondo parametro indica il punto di partenza 
    window.console.log(" la ricerca con lastindexof partendo dalla posizone 12 da come risposta  la posizione :" , string_fruit5.indexOf(cerca_mela,12) )

    // nel metodo lastIndexOf il secondo parametro indica il punto di partenza ma a ritrovo ovvero dalla posizione 15 all'inizio 
    window.console.log(" la ricerca con lastindexof partendo dalla posizone 20  da come risposta  la posizione :" , string_fruit5.lastIndexOf(cerca_mela,20) )

    // il serch cerca la stringa indica e ritorna la posizione , simile a indexof con 1 solo parametro 
    window.console.log(" la ricerca con search da come risposta  la posizione :" , string_fruit5.search(cerca_mela) )

    // i metodi search e indexof fanno la stessa cosa ma non sono uguali : 
    // 1) indexof non puo accettare espressioni regolari 
    // 2) search non puo accettare un secondo parametro 

    // il metodo match accetta solo le espressioni regolari e ritorna un array con dentro tutte le le volte 
    // che ha trovato l'elemeto , sarebbero le volte che l'array contiene l'elemento cercato ,
    //  oppure tornera null se non viene trovata nessuna corrispodenza
    var cerca_tutte_mela_espressione_regolare =  /mela /g
    window.console.log(" la ricerca con match da come risposta  la posizione :" , string_fruit5.match(cerca_tutte_mela_espressione_regolare) )

    // il metodo includes restuisce true se trova la stringa cercata 
    // oppure se non viene trovato nulla restituira false 
    // il metodo includes accetta pure un secondo parametro ovvero la posizione di partenza che se non passato sara 0 
    window.console.log(" la ricerca con includes da come risposta  la posizione :" , string_fruit5.includes(cerca_mela) )
    // qui non ci sono corrispondenze
    let cerca_banana = "banana"
    window.console.log(" la ricerca con includes da come risposta  la posizione :" , string_fruit5.includes(cerca_banana,8) )

    // il metodo startsWith restituisce true se la stringa inizia con il valore indicato  ,
    // quindi la prima stringa deve essere uguale a quella cercata
    window.console.log(" la ricerca con startsWith da come risposta  la posizione :" , string_fruit5.startsWith(cerca_banana) )
    
    // come per include possiamo passare un secondo valore che indica il punto in cui iniare la ricerca nella stringa 
    window.console.log(" la ricerca con startsWith da come risposta  la posizione :" , string_fruit5.startsWith(cerca_banana,0) )

    // startsWith fa distinzioni tra maiuscole e minuscole , ovvero e case sensitive

    // la funzione endsWith cerca un valore alla fine di una stringa  ,restiutuire true se trova l'elemento altrimenti false 

    window.console.log(" la ricerca con endsWith da come risposta  la posizione :" , string_fruit5.endsWith(cerca_banana) )

    // al metodo endswith possiamo anche specifare un secondo parametro per indicare il punto in cui finisce(o tagliare ) la stringa 
    //  diventato il punto di fine della stringa 
    // come per startswith , pure endswith e case sensitive 
    window.console.log(" la ricerca con endsWith da come risposta  la posizione :" , string_fruit5.endsWith(cerca_banana,6) )
}

function mostra_time(){
    // quando usi this , il valore del this sara uguale a quello dell'ultimo elemente ,
    // nel caso sia correalato da un evento fara riferimento all'evento 
    document.getElementById("current_time2").innerHTML=Date()
}