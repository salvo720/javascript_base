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



}