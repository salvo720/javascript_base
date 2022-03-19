// w3school tutorial inzio da: JS Home
// w3school tutorial fine in : JS Objects / Oggetti JS 

$(function() {
    console.log( "ready!" )
    prova()
});
function prova(){
    document.getElementById('id_p_demo').innerHTML="ciao 200";
    console.log('metodo caricato')
    // window.alert(5 + 6);
    let a,b,c;
    a=5
    b=6
    c=a+b;
    console.log('il valore di a e ' + a)
    console.log('il valore di b e ' + b)
    console.log('il valore di c e ' + c)
    document.getElementById('id_p_demo').innerHTML="ciao " + c ;
    //variabile js
    var as = 5
    // variabile del blocco js 
    let ad = 5
    // definizione costante 
    const ac = 5
    //javascript e case sensitive , ovvero fa distinzione fra maiuscole e minuscole , nell'esempio
    // creiamo 2 variabili diverse 
    let lastname, lastName;
    lastName = "Doe";
    lastname = "Peterson";
    //  ridichiarando una variabile javascript non perde il suo valore
    var  d = 11
    var d
    console.log("il valore di d e ", d);
    // alla prima stringa che viene trovata il resto dei dati anche se numeri 
    // vengo interpretati come stringhe 
    var x = "5" + 2 + 3;
    console.log("il valore di string e ", x)

    // esempio con stringa alla fine , dove la prima operazione viene eseguita perche avviene tra due numeri ma alla 
    // seconda tra numero e stringa diventa stringa 
    var string = 2 + 3 + "5";
    console.log("il valore di string e ",string)

    // javascript tratta il dollaro come carattere quindi puo esssere usato quando dichiari un variabile 
    //  steddo discorso per _(trattino basso)
    $id= "il valore di $id";
    window.console.log("il valore di $id e ",$id);
    //  quando usiamo let :
    // 1)non possiamo ridichiarare accidentalmente la stessa variabile o javascript andra in errore 
    // 2) possiamo usare le variabili solo in block scope ovvero sono nella funzione dove sono dichiarate 
    let x2 = 2 
    // qiuando usiamo var : 
    // 1)possiamo ridichiarare le variabili
    // 2)possiamo usare una variabile globale in una funzione (block scope ) o blocco , e viceverse
    var variabile = 22
    var variabile = 43
    window.console.log("il valore di variabile e " , variabile)
    //  nel caso in cui abbiamo una variabile globale e una di blocco , per non modificare il valore della variabile esterna possiamo usare il 
    // seguente tipo di sintassi :
    // ---------------------------------------
    // let x = 10;
    // // Here x is 10

    // {
    // let x = 2;
    // // Here x is 2
    // }

    // // Here x is 10
    // --------------------------------------

    // le variabile definite con var possono essere usate prima che vengano dichiarate grazie al sollevamento , 
    // questo non e possibile farlo con let perche javascript soleva pure le let ma non le inizializza , quindi andra in errore 
    // con un errorReferece 
    carName = "Volvo";
    var carName;
    window.console.log("il valore di carname e ",carName)

    //  le variabili definite in const :
    // 1) non possono essere ridichiarte 
    // 2) non puoi effettuare altre assegnazioni oltre la prima 
    // 3) hanno block space 
    const PI = 3.141592653589793;
    window.console.log("il valore di pi e ",PI)


    //  QUANDO USI le costanti non puoi riassegnarle ma puoi aggiungere degli elementi ,
    // ad esempio se usiamo un aray possuamo fare un push , o se usiamo un chiave -> valore 
    // possiamo modificare i valori delle propieta

    // You can create a const object:
    const car = {type:"Fiat", model:"500", color:"white"};

    // You can change a property:
    car.type = "red";

    // You can add a property:
    car.owner = "Johnson";

    // aggiunta elemento 
    car.ciao="ciao"
    // windwow in genere lo possiamo omettere perche quando chiamiamo javascript andiamo a lavorare sul window di default 
    window.console.log("il valore di car e",car)
    // opetare per aggiungere un valure con += dove quindi prima si eseguoe un x+5 
    var variabilex = 10;
    variabilex += 5;
    window.console.log("il valore di variabilex e ",variabilex)
    let variabilez = "Hello" + 5;
    window.console.log("il valore di variabile z e ",variabilez)
    // se non specificato la moltiplicazione ela divisione hanno la priorita su addizione esottrazione 
    let conti = 100 + 50 * 3;
    window.console.log("il valore di conti e ",conti)
    // = 250
    // altrimenti per stabilire la priorita bisonga usare le parentesi tonde 
    // le operazione nelle tonde vengono eseguite prima ,
    // tutte le altre se sono addizioni e sosstrazione o a parita di priorita saranno
    //  eseguite da sinistra verso destra
    let contiparentesi = (100 + 50) * 3;
    window.console.log("il valore di contiparentesi e ",contiparentesi)
    // javascript value le espressioni da sinistra a destra , quindi sequenze diverse otterrano risultati diversi 
    // nel momento in cui javascript incontra una stringa trattera tutti i dati come stringhe 
    let variabile_prova = 6 + 10 + "volvo"
    let variabile_prova2 = 5 + "volvo" + 10 
    let variabile_prova3 ="Volvo" + 16 + 4;
    console.log("il valore di variabile_prova e " , variabile_prova )
    console.log("il valore di variabile_prova2 e " , variabile_prova2 )
    console.log("il valore di variabile_prova3 e " , variabile_prova3 )

    //  javascript ha solo 1 tipo di numeri 
    // per scrivere numeri extra grandi o exstra piccoli su isa la notazione scientifica (esponenziale )
    let variabileprova44 = 123e5;      // 12300000
    let variabileprova45 = 123e-5;     // 0.00123
    window.console.log("il valore di varibile di prova44 e " , variabileprova44)
    window.console.log("il valore di varibile di prova45 e " , variabileprova45)
    
    //  si puoi usare il tipeof su javascript per farci tornare il tipo di dato 
    window.console.log("il tipo di (stringa vuota)" ,typeof "")
    window.console.log("il tipo di (numero )" ,typeof 10)

    //  in javascript una variabile senza valore ha valore undefined e diventa anche di tipo undefined
    // qualsiasi valore puo essere scartato per impostare undefined
    var variabile_undef = 9
    variabile_undef = undefined  
    window.console.log("il tipo di (numero )" ,typeof variabile_undef , variabile_undef)

    // una variabile vuota non ha nulla a che fare con un undefined 
    var variabile_vuota2= ""
    window.console.log("il valore della variabile vuota e " , typeof variabile_vuota2 , variabile_vuota2)

    // le funzioni javascript devono essere invocate (chiamate) , per essere eseguite 
    // javascript puo interrompere l'esecuzione delle funzioni quando incontra un return es 

    var return_prova= prova()
    window.console.log("il tipo e il valore di return_prova e ", typeof return_prova,return_prova)

    function prova(){
        a+= 10;
        return a
    }

    // se invochi un funzione senza le parentesi tonde otterai l'oggetto funzione 
    document.getElementById("id_p_demo2").innerHTML = "il valore dell'oggetto funzione e : " + prova;
    var return_function_object = prova 
    window.console.log("il tipo dell'oggetto funzione e il valore sono ", typeof return_function_object ,return_function_object)
    //  possiamo dichiarare un ogettop su javascript l'imporntaten e usare le parentesi greffe({}) + 
    //  usare la sintassi nome=valore 
    var variabile_oggetto2 = {auto:"punto",cabrurante:"diesel"}
    window.console.log("il tipo ed il valore di variabile ogetto 2 e :",typeof variabile_oggetto2,variabile_oggetto2)
    
    // le variabili dichiarate dentro una funzione diventano local e quindi accessibili solo dentro la funzione
    
    // puoi accedere ad un oggetto ad un ogetto javascript in due modi :
    // 1) oggetto.nomepropieta
    // 2) oggetto["nomepropieta"]
    var auto2 = { tipo:"punto" , marca:"fiat" , carburante:"gasolio"}
    window.console.log("il tipo e il valore di auto2 e : " , typeof auto2 , auto2)
    window.console.log("il tipo e il valore di auto2.tipo e : " , typeof auto2.tipo , auto2.tipo)
    window.console.log("il tipo e il valore di auto2['tipo'] e : " , typeof auto2['tipo'] , auto2['tipo'])

    // un oggetto puo avere pure dei metodi :
    var auto3={
        tipo:"fiat",
        carburante:"gasolio",
        immatricolazione : "2009",
        dati_completi : function(){
            let dati_auto3 = "il tipo dell'auto e : " + this.tipo + " il carburante dell'auto e : " + this.carburante + " l'anno di immatricolazione e : " + this.immatricolazione
            return  dati_auto3
        }
    };

    // si accede ad un metodo di un oggetto con la seguente sintassi 
    var dati_auto3_prova = auto3.dati_completi()
    window.console.log(" il tipo e il valore di dati_auto3_prova e :" ,typeof dati_auto3_prova,dati_auto3_prova) 

    // se gli accedimao senza parenti avremo la definizione della funzione 
    var dati_auto3_prova2 = auto3.dati_completi 
    window.console.log(" il tipo e il valore di dati_auto3_prova2 e :" ,typeof dati_auto3_prova2,dati_auto3_prova2) 

    // quando una variabile viene dichiarata con la parola chiave new , viene dichiarata come oggetto 
    // quando puoi evita di dichiarare dei valori come oggetto perche complica il codice 

    provax = new String();        // Declares x as a String object
    provay = new Number();        // Declares y as a Number object
    provaz = new Boolean();       // Declares z as a Boolean object
    window.console.log("il tipo e il valore di prova x e : " , typeof provax,provax)
    window.console.log("il tipo e il valore di prova y e : " , typeof provay,provay)
    window.console.log("il tipo e il valore di prova z e : " , typeof provaz,provaz)
    
}