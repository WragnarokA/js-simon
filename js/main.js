const randomNumbers = [];

while( randomNumbers.length < 5 ) {

    const numero = getRandomNumber(1, 100);

    if( randomNumbers.includes(numero) == false ) {
        randomNumbers.push( numero );
    }

}

console.log("Numeri Casuali", randomNumbers);

document.getElementById("numeri").innerText = randomNumbers;

setTimeout(nascondiNumeri, 2 * 1000);

setTimeout(function() {

    const numeriUtente = chiediNumeri();
    console.log("Numeri utente: ", numeriUtente);

    const numeriIndovinati = confrontaNumeri(randomNumbers, numeriUtente);

    setInnerTextByID("messaggio", "Hai indovinato i seguenti numeri");
    setInnerTextByID("numeri", numeriIndovinati);

}, 3 * 1000);

/********************** FUNZIONI DI PAGINA **************************/

function nascondiNumeri() {
    setInnerTextByID("messaggio", "Inserisci i numeri che hai visto");
    setInnerTextByID("numeri", "");
}

function chiediNumeri() {
    
    const numeriUtente = [];

    while(numeriUtente.length < 5) {

        const numeroDaInserire = numeriUtente.length + 1;
        const numero = parseInt( prompt(`Inserisci il ${numeroDaInserire}° numero` ) );

        if( numeriUtente.includes(numero)==false && numero>0 ) {
            numeriUtente.push(numero);
        }

    }

    return numeriUtente;
    
}

/********************** FUNZIONI GENERICHE **************************/

function getRandomNumber(min, max) {
    return Math.floor( Math.random() * (max - min +1) + min );
}

function setInnerTextByID(elemId, contenuto) {
    document.getElementById(elemId).innerText = contenuto;
}

function confrontaNumeri(randomNumbers, userNumbers) {

    const indovinati = [];
    
    for (let i = 0; i < randomNumbers.length; i++) {
        const currentNumber = randomNumbers[i];
        
        if(userNumbers.includes(currentNumber)) {
            indovinati.push(currentNumber);
        }

    }

    return indovinati;
}