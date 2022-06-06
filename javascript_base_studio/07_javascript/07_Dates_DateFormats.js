// w3school tutorial inzio da: JS Dates
// w3school tutorial fine in : JS Date Formats  

$(function () {
    console.log("ready!")
    prova3()
});

function prova3() {
    window.console.log("ready! prova3");
    //--------------------------------------------------------------------
    // Javascript Date object ci consentono di lavorare con le date 
    // esempio : 
    const date = new Date();
    window.console.log("date : ", date, "type : ", typeof (date));
    //--------------------------------------------------------------------
    // Uscita date javascript  
    // Per impostazione predefinita, javascript usera il fuso orario del browsere visualizzara una data come stringa di testo completa 
    // mar 31 maggio 2022 10: 52: 00 GMT + 0200(Ora legale dell'Europa centrale )
    //--------------------------------------------------------------------
    // Creazione di oggetti data 
    // gli oggetti data vengono creaticon il new Date() costruttore
    // esistono 4 modi per creareun nuovo oggetto data :

    // 1)
    // const date_2 = new Date();
    // 2)
    // const date_3 = new Date(year, mouth, day, hours, minutes, seconds, milliseconds)
    // 3)
    // const date_4 = new Date(millisenconds);
    // 4)
    // const date_5 = new Date(date string);

    //--------------------------------------------------------------------

    // New date() 
    // new date() crea un nuovo oggetto con data e ora correnti : 
    const data_6 = new Date()
    window.console.log("data_6 : ", data_6, "type : ", typeof (data_6));

    // gli oggetti Data sono statii il tempo del computer score , quello negli oggetti data no 

    //--------------------------------------------------------------------
    // New date(anno , mese ...)
    // New date(year , mounth , ...) crea un nuovo oggetto data con una data e un ora specificate 
    // 7 numeri specificano: anno, mese, giorno, ora, minuti, secondi, millisecondi (in questo ordine )

    const date_7 = new Date(2018, 11, 24, 10, 33, 30, 0);
    window.console.log("date_7 : ", date_7, "type : ", typeof (date_7));


    // Nota: Javascript conta i mesi da 0 a 11
    // Gennaio = 0 ;
    // Dicembre = 11;

    // Specificando un mese maggiore di 11 non si verifichera un errore ma si verifichera un overflow all'anno successivo 
    const date_8 = new Date(2018, 15, 24, 10, 33, 30);
    window.console.log("date_8 : ", date_8, "type : ", typeof (date_8));

    // equivale a :

    const date_9 = new Date(2019, 3, 24, 10, 33, 30)
    window.console.log("date_9 : ", date_9, "type : ", typeof (date_9));

    // specificando un giorno superiore al max non si verifichera un errore ma si verifichera un overflow al mese successivo 
    const date_10 = new Date(2018, 5, 35, 10, 33, 30)
    window.console.log("date_10 : ", date_10, "type : ", typeof (date_10));

    // equivale a : 
    const date_11 = new Date(2018, 6, 5, 10, 33, 30)
    window.console.log("date_11 : ", date_11, "type : ", typeof (date_11));

    //--------------------------------------------------------------------
    // Usando 6,4,3, o 2 numeri 

    // 6 numeri specificano : anno , mese , giorno , ora , minuti , secondi
    // esempio : 
    const date_12 = new Date(2018, 10, 24, 10, 33, 30);
    window.console.log("date_12 , // 6 numeri: ", date_12, "type : ", typeof (date_12));

    // 5 nuemri specificano : anno , mese , giorno , ore , minuti 
    const date_13 = new Date(2018, 10, 24, 10, 33)
    window.console.log("date_13 , // 5 nuemri: ", date_13, "type : ", typeof (date_13));

    // 4 numeri specifano : anno , mese , giorno , ora 
    const date_14 = new Date(2018, 10, 24, 33)
    window.console.log("date_14 , // 4 numeri : ", date_14, "type : ", typeof (date_14));

    // 3 numeri specificano : anno , mese , giorno
    const date_15 = new Date(2018, 10, 24)
    window.console.log("date_15 , // 3 numeri  : ", date_15, "type : ", typeof (date_15));

    // 2 numeri specificano : anno e mese 
    const date_16 = new Date(2018, 10)
    window.console.log("date_16 , // 2 numeri  : ", date_16, "type : ", typeof (date_16));

    // non puoi omettere il mese se fornisci solo 1 parametro verra trattato come millisecondi 

    const date_17 = new Date(2018)
    window.console.log("date_17 // 1 numeri : ", date_17, "type : ", typeof (date_17));

    //--------------------------------------------------------------------
    // Secolo precendente 
    // gli anni a 2 cifre verranno interpretati come 19xx :

    const date_18 = new Date(99, 10, 24);
    window.console.log("date_18 : ", date_18, "type : ", typeof (date_18));

    // esepio 2 :

    const date_19 = new Date(9, 10, 24);
    window.console.log("date_19 : ", date_19, "type : ", typeof (date_19));

    //--------------------------------------------------------------------
    // new Data( datastring )
    // new Date(dateString) crea un nuovo oggetto data da una stringa in formato data
    const date_20 = new Date("October 13 , 2014 11:13:00");
    window.console.log("date_20 : ", date_20, "type : ", typeof (date_20));

    //--------------------------------------------------------------------
    // Javascript memorizza le date come millisecondi 
    // Javascript memorizza le date come numero di millisecondi dal 01 gennaio 1970 , 00:00:00 UTC (Universal Time Coordinated ).
    // L'ora 0 e il 01 gennaio 1970  00:00:00 UTC 
    // Ora il tempo e 1653990502722millisecondi dopo il 01 gennaio 1970

    //--------------------------------------------------------------------
    // nuova data (millisecondi )
    // new Date (milliseconds ) crea un nuovo oggetto data come tempo 0 piu millisecondi : 
    const date_21 = new Date(0)
    window.console.log("date_21 : ", date_21, "type : ", typeof (date_21));

    // 01 gennaio 1970 + 100 000 000 000 secondi e circa il 03 marzo 1973 
    const date_22 = new Date(100000000000)
    window.console.log("date_22 : ", date_22, "type : ", typeof (date_22));

    // 01 gennaio 1970 - 100 000 000 000 millisecondi corrisponde a circa il 31 ottobre 1966
    const date_23 = new Date(-100000000000);
    window.console.log("date_23 : ", date_23, "type : ", typeof (date_23));

    //  un giorno di 24 ore equivale a 86 400 000 millisecondi 
    const date_24 = new Date(86400000);
    window.console.log("date_24 : ", date_24, "type : ", typeof (date_24));

    //--------------------------------------------------------------------
    // Metodi di data
    // Quandoviene creato un oggetto Date, una serie di metodiconsente di operare su di esso 

    // I metodi della data consentonodi ottenere e impostare: anno, mese, giorno, ora, minuti, secondi, millisecondi degli oggetti data utilizzare l'ora locale o l'ora UTC 
    //--------------------------------------------------------------------
    // visualizzazione delle date 
    // javascript generarera per impostazione predefinitale date in formato di stringa di testo completo 
    const date_25 = new Date();
    document.getElementById("id_div_demo").innerHTML = date_25
    window.console.log("date_25 : ", date_25, "type : ", typeof (date_25));

    // quando visulizzi un oggetto data in html viene automaticamente convertito con il metodo to String() 

    const date_25_string = date_25.toString();
    window.console.log("date_25_string : ", date_25_string, "type : ", typeof (date_25_string));


    // il metodo toUTCString() converte una data in una stringa UTC ( uno standard di visualizzazione della data ) ( Coordinated Universal Time )

    const date_25_UTC = date_25.toUTCString();
    window.console.log("date_25_UTC : ", date_25_UTC, "type : ", typeof (date_25_UTC));

    // il metodo toDateString converte un oggetto di tipo data in un formato piu leggibile 
    const date_25_toDateString = date_25.toDateString();
    window.console.log("date_25_toDateString : ", date_25_toDateString, "type : ", typeof (date_25_toDateString));

    // il metodo toISOString() converte un oggetto Data in una stringa, utilizzando il formato ISO 

    const date_25_toISOString = date_25.toISOString();
    window.console.log("date_25_toISOString : ", date_25_toISOString, "type : ", typeof (date_25_toISOString));

    //--------------------------------------------------------------------
    // Formato data javascript 
    // Esistono 3 tipi di formato per la data in javascript 
    // TIPO                                                      DATA(esempio)
    // Data ISO                                                  2015-03-25(lo standard internazionale )
    // Short Date ( data corta )                                 25/03/2015
    // Long Date (data lunga)                                    "Mar 25 2015" oppure "25 Mar 2015"

    // il formato ISO segue uno standard rigoroso in Javascript 
    // Gli altri formati non sono ben definiti e potrebbero essere specifici del browser 

    //--------------------------------------------------------------------
    // Uscita data Javascript 
    // Indipendentemente dal formato di input javascript, generera(per impostazione predefinita) le date in formatostringa di testo completo : 
    const date_28 = new Date();
    window.console.log("date_28 : ", date_28, "type : ", typeof (date_28));

    //--------------------------------------------------------------------
    // Date ISO javascript 
    // ISO 8601 e lo standard internazionaleper la rappresentazione di date e orari. 
    // La sintassi dello standard 8601 (AAAA-MM-GG ) , e anche il formato javascript predefinito 
    // esempio data completa :
    const data_29 = new Date();
    window.console.log("data_29 : ", data_29, "type : ", typeof (data_29));

    // La data calcolata sara relativa al tuo fuso orario 
    // A seconda del fuso orario il risultato seguente varia da 24 a 25 marzo 

    const date_30 = new Date("2015-03-25")
    window.console.log("date_30 : ", date_30, "type : ", typeof (date_30));

    //--------------------------------------------------------------------
    // Data ISO ( anno e meso )

    // Le date ISO possono essere scritte senza specificare il giorno (AAAA-MM)
    const date_29 = new Date("2015-03");
    window.console.log("date_29 : ", date_29, "type : ", typeof (date_29));

    // con i vari fusi orar il risultato sopra puo cambiare da 28 febbraio a 1 marzo 

    //--------------------------------------------------------------------
    // Iso Dates ( only year )
    // le date iso possono essere scritte senza mese e giorno 
    const date_31 = new Date("2015");
    window.console.log("date_31 : ", date_31, "type : ", typeof (date_31));
    // i fusi orari cambieranno il risultato tra il 31 dicembre 2014 e il 1 gennaio 2015 

    //--------------------------------------------------------------------

    // Date ISO (data e ora )
    // Le date iso possono essere scritte aggiungendo ore, minuti e secondi(AAAA - MM - GG T HH:MM:SS Z)
    // esempio : 
    const date_32 = new Date("2015-03-25T12:00:00Z");
    window.console.log("date_32 : ", date_32, "type : ", typeof (date_32));

    // data e ora sono separate da una T MAIUSCOLA 
    // l'ORA UTC e definita con una Z maiuscola 
    // se vuoi modificare l'ora relativa a UTC , rimuvi la Z e aggiungi +HH:MM 

    // esempio 
    const date_33 = new Date("2015-03-25T12:00:00-06:00");
    window.console.log("date_33 -06:00 : ", date_33, "type : ", typeof (date_33));

    const date_34 = new Date("2015-03-25T12:00:00+06:00");
    window.console.log("date_34 +06:00 : ", date_34, "type : ", typeof (date_34));

    const date_35 = new Date("2015-03-25T12:00:00+14:00");
    window.console.log("date_35 +14:00 : ", date_35, "type : ", typeof (date_35));

    // + e - nelle date hanno significato opposto sulle ore (date-time) ore: minuti 
    // ( + significa - )
    // ( - significa + )

    // UTC ( Universal Time Coordinated ) e lo stesso di GMT (Greenwich mean time )

    // L'omissione della stringa T e Z nella stringa data puo dare risultati diversi in browser diversi 

    //--------------------------------------------------------------------
    // Fusi orari 
    // Quando si impostauna data senza specificare il fuso orario , Javascript utilizzera il fuso orario del browser 
    // Quando si ottiene una data, senza specificare il fuso orario,il risultato vienen convertito nel fuso orario del browser 
    //  in altre parole se una data / ora viene creta in GTM ( Greenwich Mean Time), la data / ora verra convertita in CTD(cENTRA us Daylight Time) 
    // se un utente naiga dagli stati uniti centrali
    //--------------------------------------------------------------------

    // Javascript Date brevi (short date)

    // le date brevi sono scirtte con una sintassi "MM/GG/AAAA" come questa 

    const date_36 = new Date("03-25-2015")
    window.console.log("date_36 : ", date_36, "type : ", typeof (date_36));

    // Attenzione : in alcuni browser , mesi o giorni senza 0 iniziali possono produrre errori 
    const date_37 = new Date("3-25-2015")
    window.console.log("date_37 : ", date_37, "type : ", typeof (date_37));

    const date_38 = new Date("2015-3-25")
    window.console.log("date_38 : ", date_38, "type : ", typeof (date_38));

    // il comportamento di "AAAA/MM/GG" non e definito .
    // Alcuni Browser proveranno a indovinare il formato. Alcuni restituiranno NaN

    const Date_39 = new Date("2015-03-25")
    window.console.log("Date_39 : ", Date_39, "type : ", typeof (Date_39));


    // Anche il compartamento di "GG-MM-AAAA" non e definito.
    // alcuni browser proveranno ad indovinare il formato altri restituiranno NaN

    const date_40 = new Date("25-03-2015")
    window.console.log("date_40 : ", date_40, "type : ", typeof (date_40));

    //--------------------------------------------------------------------

    // date lunghe javascript 

    // le date lunghe sono spesso scritte con una sintassi come questa  "MMM GG AAAA" come questa :
    const date_41 = new Date("Mar 25 2015");
    window.console.log("date_41 : ", date_41, "type : ", typeof (date_41));

    // mese e giorno possono essere in qualsiasi ordine 
    const date_42 = new Date("25 Mar 2015");
    window.console.log("date_42 : ", date_42, "type : ", typeof (date_42));

    // Il mese puo essere scitto per intero o abbreviato 
    const date_43 = new Date("January 25 2015");
    window.console.log("date_43 : ", date_43, "type : ", typeof (date_43));

    // mese abbreviato 
    const date_44 = new Date("Jan 25 2015");
    window.console.log("date_44 : ", date_44, "type : ", typeof (date_44));

    // le virgole vengono ignorate . I nomi non fanno distinizioni tra Maiuscole e minuscole :
    const date_45 = new Date(" JANUARY , 25, 2015");
    window.console.log("date_45 : ", date_45, "type : ", typeof (date_45));

    //--------------------------------------------------------------------

    // INPUT DATA - Analisi delle date 
    // Se si dispone di una stringa Data valida e possibile utilizzare il Date.parse() metodoper convertirla in millisecondi. 
    // Date.parse() restituisceil numero in milliseconditra la data e 1 gennaio 1970 :

    let msec = Date.parse("Jan 01 2015");
    window.console.log("msec : ", msec, "type : ", typeof (msec));

    // e quindi possibileutilizzare il numerodi millisecondiper convertirloin un oggeto data : 
    let msec_2 = Date.parse("Jan 1 2015");
    window.console.log("msec_2 : ", msec_2, "type : ", typeof (msec_2));
    const date_46 = new Date(msec_2);
    window.console.log("date_46 da msec_2( data in formato millisecondi ) : ", date_46, "type : ", typeof (date_46));

    //--------------------------------------------------------------------

    // Javascript Ottieni metodi di data

    // Questi metodi possono essere utilizzare per ottenere informazioni da un oggetto data :
    // Metodo                                               Descrizione
    // getFullYear()                                        Ottiene l'anno della data in formato da 4 lettere (AAAA)
    // getMonth()                                           Ottiene il mese come numero (0-11)
    // getDays()                                            Ottiene il giorno come numero (1-31)
    // getHours()                                           Ottiene l'ora come numero (0-23)
    // getMinutes()                                         Ottiene i minuti come numero (0-59)
    // getSeconds()                                         Ottiene i secondi come numero (0-59)
    // getMilliseconds()                                    Ottiene i millisecondi come numero (0-999)
    // getTime()                                            Ottiene il tempo in millisecondi partendo dal 1 gennaio 1970 
    // getDay()                                             Ottiene il giorno della settimana come numero (0-6)
    // Date.now()                                           Ottiene il tempo . ECMAScript 5 


    //--------------------------------------------------------------------

    const full_date = new Date();
    window.console.log("full_date new Date() : ", full_date, "type : ", typeof (full_date));

    //--------------------------------------------------------------------


    // getFullYear() , ottiene l'anno in formato numerico (AAAA) , come numero di 4 cifre 
    const date_47 = new Date().getFullYear();
    window.console.log("date_47 getFullYear(): ", date_47, "type : ", typeof (date_47));

    //--------------------------------------------------------------------


    // getMouth() , ottiene il mese in formato numerico (0-11)
    const date_48 = new Date().getMonth();
    window.console.log("date_48 getMonth(): ", date_48, "type : ", typeof (date_48));


    // puoi usare una matrice/Array per restituire il nome del mese 

    const month = ["January", "Febrary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month_used = month[new Date().getMonth()];
    window.console.log("month : ", month, "type : ", typeof (month));
    window.console.log("month_used : ", month_used, "type : ", typeof (month_used));
    //--------------------------------------------------------------------


    // getDay() , ottiene il giorno in formato numerico (1-31)
    const date_49 = new Date().getDay();
    window.console.log("date_49 getDay(): ", date_49, "type : ", typeof (date_49));

    //--------------------------------------------------------------------


    // getHours() , ottiene l'ora in formato numerico (0-23)
    const date_50 = new Date().getHours();
    window.console.log("date_50 getHours(): ", date_50, "type : ", typeof (date_50));

    //--------------------------------------------------------------------

    // getMinutes() , ottiene i minuti in formato numerico (0-59)
    const date_51 = new Date().getMinutes();
    window.console.log("date_51 getMinutes() : ", date_51, "type : ", typeof (date_51));

    //--------------------------------------------------------------------

    // getSeconds() , ottiene i secondi in formato numerico (0-59) 
    const date_52 = new Date().getSeconds();
    window.console.log("date_52 getSeconds(): ", date_52, "type : ", typeof (date_52));

    //--------------------------------------------------------------------

    // getMilliseconds() , ottiene i millisecondi in formato numerico da (0-999)
    const date_53 = new Date().getMilliseconds();
    window.console.log("date_53 getMilliseconds(): ", date_53, "type : ", typeof (date_53));

    //--------------------------------------------------------------------

    // getTime() , ottiene il tempo in millisecondi partendo da 1 gennaio 1970 
    const date_54 = new Date().getTime();
    window.console.log("date_54 : ", date_54, "type : ", typeof (date_54));

    //--------------------------------------------------------------------

    // getDay , ottiene il giorno della settimana in formato numerico da (0-6)
    // In javascript il primo giorno della settimana 0 e Domenica , anche se alcuni paesi considerano il primo giorno della settimana lunedi 
    // perche viene preso come modello la data americana , quindi 0 e Domenica e 1 e Lunedi 

    // e possibile usare una matrice / Array di nomi e getDay() metodo per restiure il nome del giorno della settimana : 
    const Days_week = ["Sunday", "Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturaday"];
    window.console.log("Days_week : ", Days_week, "type : ", typeof (Days_week));
    let name_day = Days_week[new Date().getDay()];
    window.console.log("name_day : ", name_day, "type : ", typeof (name_day));


    const date_55 = new Date().getDay();
    window.console.log("date_55 : ", date_55, "type : ", typeof (date_55));

    const date_56 = new Date("June 05 2022").getDay();
    window.console.log("date_56 : ", date_56, "type : ", typeof (date_56));

    //--------------------------------------------------------------------

    // Date.now() , ottiene la data ECMAScript 5 , in millisendi 
    const date_57 = Date.now();
    window.console.log("date_57 Date.now() : ", date_57, "type : ", typeof (date_57));
    let date_converted = new Date(date_57)
    window.console.log("date_converted da Date.now() : ", date_converted, "type : ", typeof (date_converted));

    //--------------------------------------------------------------------

    // Metodi della data UTC 
    // i metodi della data UTC vengono utilizzati per lavorare con le date UTC(date del fuso orario universale)
    // Metodo                                               Descrizione 

    // getUTCFullyear()                                        lo stesso di getFullYear(), ma ritorna una data UTC
    // getUTCMonth()                                           lo stesso di getMonth(), ma ritorna una data UTC
    // getUTCDate()                                            lo stesso di getDate(), ma ritorna  una data UTC
    // getUTCHours()                                           lo stesso di getHours(), ma ritorna una data UTC
    // getUTCMinutes()                                         lo stesso di getMinutes(), ma ritorna una data UTC
    // getUTCSeconds()                                         lo stesso di getSeconds(), ma ritorna una data UTC
    // getUTCMilliseconds()                                    lo stesso di getMilliseconds(), ma ritorna una data UTC
    // getUTCDay()                                             lo stesso di getDay(), ma ritorna una data UTC

    //--------------------------------------------------------------------
    // Javascript imposta i metodi della data 





}