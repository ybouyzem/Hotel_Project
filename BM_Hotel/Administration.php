<?php
    session_start();
    // $BDD = new PDO('mysql:host=localhost;dbname=login', 'root' ,'');
    // $membres = $BDD->query('SELECT * FROM membres');


?>
<!DOCTYPE html>

<html>
    <head>
        <title>Espace d'administration</title>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <h1>Hello World</h1>
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="22" height="22" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
            <path d="M7 12h14l-3 -3m0 6l3 -3" />
        </svg>
        <a href="index.html">Log out</a>
    </body>
</html>




