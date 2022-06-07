// w3school tutorial inzio da: DOM introduzione
// w3school tutorial fine in : DOM 

$(function () {
    console.log("ready!")
    prova3()
});

function prova3() {
    window.console.log("ready! prova3");
    //--------------------------------------------------------------------
    // DOM
    // con IL dom HTLM ,Javascript puo accedere e modficare tutti gli elementi di un documento HTML

    //--------------------------------------------------------------------

    // IL DOM HTML (Document Object Model)

    // Qunado la pagina web e caricata il browser crea il DOM(Document Object Model) della pagina 
    // Il modello HTML DOM e costruito come un albero di oggetti : 

    // Albero di oggetti del DOM HTML : 
    // LINK IMMAGINE(https://www.w3schools.com/js/js_htmldom.asp)

    // Con il modello a oggetti javascript ottiene tutta la potenza necesario per creare HTML dinamico :

    // Javascript puo modificare tutti gli elememti HTML della pagina 
    // Javascript puo modificare tutti gli attributi HTML della pagina
    // Javascript puo modificare tutti gli stili CSS della pagina 
    // Javascript puo rimuovere gli elementi e gli attributi esistenti 
    // Javascript puo aggiungere nuovi elementi e attributi HTML 
    // Javascrip puo reagire a tutti gli eventi HTML esistenti della pagina 
    // Javascript puo creare nuovi eventi HTML della pagina 

    //--------------------------------------------------------------------

    // Cosa e il DOM?
    // Il DOM  e uno standard W3C(Word Wide Web Consurtium )

    // Il Dom definisce uno standard per l'accesso ai documenti :

    // "il W3C Document Object Model (DOM) e una piattaforma e interfaccia indipenete dal linguaggio 
    // che consente ai programmi e scrip di accedere e aggiornare dinamicamente il contenuto , la struttura e lo stile di un documento ".

    // Lo Standard W3C DOM e suddiviso in 3 parti differenti :
    // Core DOM : modello standard per tutti i tipi di documenti 
    // XML DOM: Modello standard per documenti xml 
    // HTML DOM - Modello standard per i doucmenti HTML

    //--------------------------------------------------------------------
    // Che cosa e il DOM HTML ? 

    // L'HTML DOM e un modello a oggetti standard e interfaccia di programmazione per HTML . Definisce :
    // Gli elementi HTML come oggetti .
    // Le propieta di tutti gli elementi HTML .
    // i metodi per accedere a tutti gli elementi HTML 
    // gli eventi per tutti gli elementi HTML .

    // in altre parole: L'HTML DOM e uno standard su come ottenere modificare o aggiungere o eliminare elementi HTML .

    //--------------------------------------------------------------------

    // Javascript metodi HTML DOM 
    // i metodi HTML DOM sono azioniche puoi eseguire ( su elementi HTML )
    // le PROPIETA HTML DOM sono valori (di lementi HTML ) , che puoi impostare o modicare .

    //--------------------------------------------------------------------

    // L 'itnerfaccia di programmazione  DOM 
    // E possibile accedere al DOM HTML con Javascript(e con altri  linguaggi di programmazione ).
    // Nel Dom tutti gli elementi HTML sono definiti come Oggetti
    // L'intterfaccia di programmazione e costruita dalle propieta e i metodi di ciascun oggetto 
    // Una propieta e un valore che puoi ottenere o impostare (come modificare il contenuto di un elemento HTML )
    // Un metodo e un'azione che puoi eseguire (come aggiungere o eliminare un elemnto HTML )
    // Esempio : 
    // L'esempio seguente modifica il contenuto (the InnerHTML ) <div> dell'elemto con id="id_div_demo": 
    document.getElementById("id_div_demo").innerHTML = "Hello World!";

    // Nell'esempio spora getElementById e un metodo , innerHTML e una propieta 


    //--------------------------------------------------------------------
    // Il metodo getElementById
    // il modo piu comune per accedere ad un elemento e utilizzare l'id dell'elemento .
    // Nell'esempio sopra il getElementById metodo utilizza id="demo" per trovare l'elemento .

    //--------------------------------------------------------------------
    // La propieta innerHTML
    // IL modo piu comune per ottere il contenuto HTML di un elemento e utilizzare innetHTML propieta
    // La innerHTML e utile per ottenere o sostituireil contenutodegli elementi HTML .

    // ATTENZIONE : la innerHTML propieta puo essere utilizzata per modificare qualsiasi elemnto HTML inclusi <html> e <body> 

    //--------------------------------------------------------------------





}