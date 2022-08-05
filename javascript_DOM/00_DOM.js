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
    // Javascript HTML DOM Document 
    // l'oggeto documento HMTL DOM e il propietario di tutti gli altri oggetti della tua pagina web 

    //--------------------------------------------------------------------
    // L'oggetto documento HTML DOM 
    // l'oggetto del documento rappresenta la tua pagina web .
    // Se vuoi accedere a quasiasi elemetoin una pagina HTML, inizi sempre con l'oggetto del documento .
    // Di seguito sono riportati alcuni esempidi come e possibile utilizzareL'oggetto documento per accedere e manipolare L'HTML .

    //--------------------------------------------------------------------
    // Trovare elementi HTML

    // Metodi                                                                   Descrizione 
    // document.getElement.ById(id)                                             Trova un elemento da un id
    // document.getElementsByTagName(name)                                      Trova elemento dal nome del tag  
    // document.getElementsByClassName(name)                                    Trova un elemnto dal nome della classe 

    //--------------------------------------------------------------------
    // Modifica degli elementi HTML 

    // Propieta                                                                    Descrizione 
    // element.innerHTML = new html contet                                         Modifica il contenuto HTML di un elemento 
    // element.attribute = new value                                               Modifica il valore di un attributo di un elemento HTML 
    // element.style.property = new style                                          Modifica lo stile di un elemento HTML                


    // Metodi                                                                      Descrizione 
    // Element.setAttribute(attribute, value)                                      Modifica il valore di un attributodi un elemento HTML


    //--------------------------------------------------------------------
    // Aggiunta ed eliminiziane di elementi HTML 

    // Metodi                                                                      Descrizione
    // document.createElement(element)                                             Crea un elemento HTML
    // document.removeChild(element)                                               Rimuove un elemento HTML 
    // document.appendChild(element)                                               Aggiunge un elemento HTML 
    // document.replaceChild(old,new)                                              Sostituisce un elemento HTML 
    // document.write(text)                                                        Scrive nel flusso di Output HTML 

    //--------------------------------------------------------------------
    // Aggiunta gestore di eventi 
    // Metodi                                                                      Descrizione 
    // document.getElementById("id").click = functione(){ code }                   Aggiunge del codice gestore eventi (event handler ) a un evento onclick  

    //--------------------------------------------------------------------
    // Trovare gli oggetti HTML 
    // il primo HTML DOM Livello 1 ( 1998 ) , ha definito 11 oggetti HTML ,raccolte di oggetti e propieta . Questi sono acora validi in HTML5. 
    // Successivamente in HTML DOM Level 3sono stati aggiunti piu oggetti, raccolte e propieta .

    // Propieta                                        Descrizione                                                                              DOM (Livello)
    // document.anchors                                Ritoran tutti gli attributi <a> che hanno come attributo name                               1
    // document.baseURI                                Ritorna l'URI di base assoluto del documento                                                3
    // document.body                                   Ritorna l'elemento <body>                                                                   1
    // document.cookie                                 Ritorna i cookie del documento                                                              1
    // document.doctype                                Ritorna il Doc type del documento                                                           3
    // document.documentElement                        Ritorna l'elemeto <html >                                                                   3
    // document.documentMode                           Ritorna la modalita usta dal browser                                                        3
    // document.documentURI                            Ritrona l'URI del documento                                                                 3
    // document.domain                                 Ritorna il nome del dominio del server dei documenti                                        1
    // document.embeds                                 Ritorna tutti gli elementi <embed>                                                          3
    // document.forms                                  Ritorna tutti gli elementi <form>                                                           1
    // document.head                                   Ritorna tutti gli elementi <head>                                                           3
    // document.images                                 Ritorna tutti gli elementi <img>                                                            1
    // document.implementation                         Ritorna le implementazioni DOM                                                              3
    // document.inputEncoding                          Ritorna la codifica del documento (set di caratteri )                                       3
    // document.lastModified                           Ritorna la data e ora in cui il documento e stato aggiornato                                3
    // document.links                                  Ritorna tutti i <area> e <a> che hanno l'attributo href                                     1
    // documents.readyState                            Ritorna lo stato ( di caricamento ) del documento                                           3
    // document.referrer                               Ritorna l'URI del riferimento (il link del documento )                                      1
    // document.scripts                                Ritorna tutti gli elementi <script>                                                         3
    // document.strictErrorChecking                    Ritorna se viene applicato il controllo degli errori                                        3
    // document.title                                  Ritorna il title del documento                                                              1
    // document.url                                    Ritorna l'URL completo del documento                                                        1

    //--------------------------------------------------------------------

    window.console.log("document.anchors :", document.anchors);
    window.console.log(" document.baseURI :", document.baseURI);
    window.console.log("document.body :", document.body);
    window.console.log("document.cookie :", document.cookie);
    window.console.log("document.doctype :", document.doctype);
    window.console.log("document.documentElement :", document.documentElement);
    window.console.log("document.documentMode :", document.documentMode);
    window.console.log("document.documentURI :", document.cookie);
    window.console.log("document.domain :", document.domain);
    window.console.log("document.embeds :", document.embeds);
    window.console.log("document.forms :", document.forms);
    window.console.log("document.head :", document.head);
    window.console.log("document.images :", document.images);
    window.console.log("document.implementation :", document.implementation);
    window.console.log("document.inputEncoding :", document.inputEncoding);
    window.console.log("document.lastModified :", document.lastModified);
    window.console.log("document.links :", document.links);
    window.console.log("document.readyState :", document.readyState);
    window.console.log("document.referrer :", document.referrer);
    window.console.log("document.scripts :", document.scripts);
    window.console.log("document.strictErrorChecking :", document.strictErrorChecking);
    window.console.log("document.title :", document.title);
    window.console.log("document.url :", document.url);


    //--------------------------------------------------------------------
    // Elementi Javascript HTML DOM 

    // Trovare gli elementi html
    // Spesso con Javascript si ha la necessita di manipolare elementi HTML .
    // Per fare cio devi prima trovare gli elementi . Ci sono diversi modi per farlo :
    // -Trovare gli ementi HTML  per id
    // -Trovare gli elementi HTML in base al nome del tag 
    // -Trovare gli elementi HTML in base al nome della classe 
    // -Trovare gli elementi HTML dai selettori CSS
    // -Trovare elementi HTML da raccolte di oggetti HTML 

    //--------------------------------------------------------------------
    // Trovare l'elemento HTML dal tag id 
    // Il modo piu semplice per trovareun elementO HTML nel DOM e utilizzare l'ID elemento .
    // Questo esempio trava l'elemento con id="id_div_demo" :

    const element = document.getElementById("id_div_demo");
    window.console.log("element : ", element, "type : ", typeof (element));


    // se l'elemento viene trovato ,  il modulo restituira l'elemento come da oggetto(in element)
    // Se l'elemento non viene trovato , l'elemento sara null 

    //--------------------------------------------------------------------
    // Trovare elementi HTML in base al nome del tag 
    // Questo esempio trova tutti gli elementi <p>

    const element_2 = document.getElementsByTagName("p");
    window.console.log("element_2 ( element by tag p) : ", element_2, "type : ", typeof (element_2));


    // Questo esempio trova l'elemento con id="main" e quindi trova tutti i <p> gli elementi all'interno di "main" : 
    const element_main = document.getElementById("main");
    window.console.log("element_main ( with id main) : ", element_main, "type : ", typeof (element_main));

    const p_in_main = element_main.getElementsByTagName("p");
    window.console.log("p_in_main ( p inside main ) : ", p_in_main, "type : ", typeof (p_in_main));

    //--------------------------------------------------------------------
    // Trova elementi HTML in base al nome della classe 
    // Se vuoi trovare tutti gli elementi HTML con lo stesso nomedi una classe, usa getElementsByClassName() .
    // Questo esempio restituisceun elencodi tutti gli elementicon class="intro" :
    const element_3 = document.getElementsByClassName("intro");
    window.console.log("element_3 with class intro : ", element_3, "type : ", typeof (element_3));

    //--------------------------------------------------------------------
    // Trovare gli elementi HTML dai selettori css
    // Se vuoi trave tutti gli elemeti html cheche corrispondono a un selettore CSS specificato(id,nomi di classi , tipi , attributi , valori , ecc ... ) usa il querySelectorAll() metodo . 
    // Questo esempio restituisceun elenco di tutti i < p >  gli elementi con class="intro" 
    // esempio : 
    const all_p_with_intro_class = document.querySelectorAll("p.intro");
    window.console.log("all_p_with_intro_class : ", all_p_with_intro_class, "type : ", typeof (all_p_with_intro_class));

    //--------------------------------------------------------------------
    // Trovare elementi HTML da raccolte di oggetti HTML 
    // Questo esempio trova in modulo con id = "form_1", nella raccolta dei moduli e visualizzatutti i valori degli elementi :
    // esempio : 
    const modulo_form = document.forms["form_1"];
    window.console.log("modulo_form with id='form_1' : ", modulo_form, "type : ", typeof (modulo_form));
    let text = "";
    for (let i = 0; i < modulo_form.length; i++) {
        text += modulo_form.elements[i].value + "<br>";
        window.console.log("text : ", text, "type : ", typeof (text));
    }

    document.getElementById("id_div_demo").innnerHTML = text;

    //--------------------------------------------------------------------
    // Javascript HTML DOM - Modifica dell'HTML

    // il DOM HTML consente a javascript di modificareil contenuto degli elementi HTML. 
    //--------------------------------------------------------------------

    // Modifica del contenuto HTML

    // il modo piu semplice per modificare il contenuto di un elemento HTML , e utilizzare la propieta innerHTML .
    // Per modificareil contenutodi un elemento HTML , utilizza questa sintassi . 

    // document.getElementById(id).innerHTML = new HTML 

    // Questo esempio cambia il contenuto di pdi un elemento <p> :
    document.getElementById("id_p_1").innerHTML = "New text in p by javascript ";

    // Speigazione esempio :
    // -il documento HTML sopra contiene un < p > elemento con id = "id_p_1"
    // -Usiamo il DOM HTML per ottenere l'elemento con id="id_p_1"
    // -Un javascript cambia il contenuto ( innerHTML ) di quell'elemento in "New text in p by javascript ";

    // Questo esempio cambia il contenuto di un h1 :
    const h1_element = document.getElementById("id_h1_0");
    h1_element.innerHTML = "New h1 text by javascript "

    // Spiegazione esempio : 
    // il documento sopra contiene un <h1> elemento con id="id_h1_0"
    // Usiamo il DOM HTML  per ottere l'elemento con id="id_h1_0"
    // Un javascript cambia il contenuto( innerHTML ) di quell'elemento in " Nuova intestazione "

    //--------------------------------------------------------------------
    // Modifica del valroe di un attributo 


}   