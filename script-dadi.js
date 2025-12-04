let continua = true; // input per permettere all'utente di terminare la partita

while (continua) {
// devo generare dei numeri random per l'utente 1-6
let numeroUtente = Math.floor(Math.random() * 6) + 1;
console.log("Il tuo numero è ", numeroUtente);

// devo generarli anche per il computer 1-6
let numeroComputer = Math.floor(Math.random() * 6) + 1;
console.log("Il numero dell'avversario è ", numeroComputer);

// devo stabilire chi ha vinto confrontando i 2 numeri e prendendo quello più grande
    if (numeroUtente > numeroComputer) {
        console.log("Hai vinto!!!");
    } else if (numeroUtente === numeroComputer) {
        console.log("Pareggio... riprova!");
    } else {
        console.log("Hai perso");
    }

    let continuaPartita = prompt("Vuoi fare un'altra partita?");
    if (continuaPartita !== "si") {
        console.log("Gioco terminato!");
        continua = false;
    }
}