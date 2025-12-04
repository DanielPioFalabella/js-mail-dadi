// creo una lista di invitati alla festa
const listaMailInvitati = ["Aurora@gmail.com", "Andrea@gmail.com", "Giorgia@gmail.com", "Tommaso@gmail.com", "Gabriele@gmail.com", "Fabio@gmail.com", "Manuel@gmail.com"]

// chiedo all'utente la sua mail
const mailUtente = prompt("Inserisci la mail per vedere se sei in lista")
console.log(mailUtente);

// controllo se può accedere alla festa
let mailUtenteCorretta = false; 

for (let i = 0; i < listaMailInvitati.length; i++) {
    if (mailUtente === listaMailInvitati[i]) {
        mailUtenteCorretta = true;
        break; // è possibile anche nn usare break
    }
}

// se può accedere gli dirò che è in lista
if (mailUtenteCorretta === true) {
    console.log("sei invitato!")
} else {
    console.log("spiacente nn sei in lista!")
}
