<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Applicazione crud con laravel 8.55 layout</title>
    <!-- {{-- bootstrap 4 css cdn --}} -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <!-- {{-- cdn bootstraop 2 --}} -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha/css/bootstrap.css" rel="stylesheet">
</head>
<body>
    <div class="container" id="id_div_demo">
        <p id="id_p_demo">ciao</p>
        <p id="id_p_demo2">ciao</p>
        <img src="img/universe_image.jpg" id="id_image_switch" >
        <button onclick="document.getElementById('id_image_switch').src='img/india_image.jpg'">India</button>
        <button onclick="document.getElementById('id_image_switch').src='img/universe_image.jpg'">Universe</button>
   

        <p  id="id_add_style_text">questo testo sara ingrandito</p>
        <button onclick="document.getElementById('id_add_style_text').style.fontSize='40px'">Aggiungi testo</button>

        <p id="id_p_nascosto" style="display:none" >mostra p nascosto </p>
        <button onclick="document.getElementById('id_p_nascosto').style.display='block'">mostra p nascosto</button>
        <!-- stampa da javascript solo elemento corrente perche javascript non ha metodi di stampa -->
        <button onclick="window.print()">Stampa elemento corrente</button>
        <!-- data e ora con tutto nel button html  -->
        <br><br>
        <h6>data e ora con tutto nel button html</h6>
        <button onclick="document.getElementById('current_time').innerHTML=Date()">mostra data e ora</button>
        <p id="current_time"></p>
        <!-- data e ora con this javascript -->
        <h6>data e ora con this javascript</h6>
        <button onclick="(this).innerHTML=Date()">mostra data e ora</button>
        <!-- data e ora con funzione  -->
        <h6>data e ora con funzione</h6>
        <button onclick="mostra_time()">mostra data e ora</button>
        <p id="current_time2"></p>
    </div>
    <div class="container">
        <!-- @yield('content') -->
    </div>
    <!-- {{-- jquery 3.6 cdn --}} -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <!-- {{-- bootstrap 4 js cdn  --}} -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <!-- @yield('scripts') -->
    <script src="./base.js"></script>
    <script src="./base2.js"></script>
    <script src="./base3.js"></script>
</body>
</html>