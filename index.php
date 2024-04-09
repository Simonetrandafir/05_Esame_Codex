<?php
// // Controlla se l'User-Agent è vuoto o contiene stringhe comuni associate ai bot
// function isBot() {
//     $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? '';

//     $botKeywords = array(
//         'bot',
//         'crawl',
//         'spider',
//         'http',
//         'https',
//         'google',
//         'yahoo',
//         'bing',
//         'yandex'
//     );

//     foreach ($botKeywords as $keyword) {
//         if (stripos($userAgent, $keyword) !== false) {
//             return true;
//         }
//     }

//     return false;
// }

// // Esempio di blacklist di indirizzi IP
// function isBlacklisted($ip) {
//     $blacklist = array(
// // Esempio di IP da bloccare
//         '96.47.225.66',
//         "96.47.225.82" ,
//         "96.47.225.74" ,
//         "173.44.37.250" ,
//         "173.44.37.242" ,
//         "173.44.37.226" ,
//         "173.44.37.234" ,
//        "96.47.224.50",
//         "96.47.225.178",  
//         "96.47.224.42"  ,
//         "96.47.225.170"  ,
//         "96.47.225.186"  ,
//         "213.163.65.177"  ,
//         "213.163.65.163"  ,
//         "46.161.9.32",
//         "96.47.224.58", 
//         "91.232.96.19" ,
//         "216.244.66.236",	
//         "88.190.37.223"  ,
//         "46.161.9.31"	,
//         "91.236.74.249"  ,
//         "62.90.102.148"  ,
//         "96.47.225.162"  ,
//         "91.236.75.97" ,
//         "91.121.221.94" , 	
//     );

//     return in_array($ip, $blacklist);
// }

// // Controlla se l'utente è un bot o se l'IP è nella blacklist
// function isSuspicious() {
//     $ip = $_SERVER['REMOTE_ADDR'] ?? '';

//     if (isBot() || isBlacklisted($ip)) {
//         return true;
//     }

//     return false;
// }

// // Esegui il controllo e blocca l'accesso se sospetto
// if (isSuspicious()) {
//     // Puoi personalizzare il messaggio di errore o reindirizzare l'utente altrove
//     die("Accesso negato. Sei stato identificato come un potenziale bot o utente malevolo.");
// }

// Se l'utente non è sospetto, puoi continuare con il normale flusso del tuo codice qui sotto
header('Location: main/index.html')
?>