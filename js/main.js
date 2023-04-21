function parolaPalindroma(parolaUtente) {

    let = parolaAlContrario = "";

    for (let i = parolaUtente.length - 1; i >= 0; i--) {
        
        parolaAlContrario += parolaUtente[i]
        
    }

    console.log(parolaAlContrario)

    if (parolaUtente == parolaAlContrario) {     
        alert("La parola è palindroma!")
    } else {
        alert("La parola NON è palindroma")
    }
    
}

let parolaDaVerificare = parolaPalindroma(prompt("Inserisci una parola"));

