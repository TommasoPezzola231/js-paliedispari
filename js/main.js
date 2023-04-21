/****************

function parolaPalindroma(parolaUtente) {

    let = parolaAlContrario = "";

    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        
        parolaAlContrario += parolaUtente[i]
        
    }
    parolaUtente = parolaUtente.toLowerCase();
    parolaAlContrario = parolaAlContrario.toLowerCase();

    if (parolaUtente == parolaAlContrario) {     
        alert("La parola è palindroma!")
    } else {
        alert("La parola NON è palindroma")
    }
    
}

let parolaDaVerificare = parolaPalindroma(prompt("Inserisci una parola"));

*********************************/

function PariOrDispari(numeroUtente) {
    
    let numeroComputer = Math.floor(Math.random() * 5) + 1;
    alert(`Io scelgo ${numeroComputer}`)

    let numeroVerifica = numeroComputer + numeroUtente;

    let risultato = "Ha vinto Dispari"

    if (numeroVerifica % 2 == 0) {
        risultato = "Ha vinto Pari!"
    }

    scelta = scelta.toLowerCase();

    if ((scelta == "pari") && (risultato == "Ha vinto Pari!")) {
        alert(`${numeroUtente} + ${numeroComputer} fa ${numeroVerifica} quindi Pari, congratulazioni hai vinto!`);
    } else if ((scelta == "dispari") && (risultato == "Ha vinto Dispari")) {
        alert(`${numeroUtente} + ${numeroComputer} fa ${numeroVerifica} quindi Dispari, congratulazioni hai vinto!`);
    }  else {
        alert(`${numeroUtente} + ${numeroComputer} fa ${numeroVerifica} quindi non è ${scelta} mi dispiace hai perso!`);
    }
}

let scelta = prompt("Ti sfido a Pari o Dispari! Cosa scegli?");

let numeroScelto = PariOrDispari(parseInt(prompt("Bene, scegli un numero tra 1 e 5")))
