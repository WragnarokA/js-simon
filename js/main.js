console.log("ciao");


const randomNambers = [];

while( randomNambers.length < 5 ) {
    const numero = getRandomNamber(1, 100);
    
    if (!randomNambers.includes(numero)) {
        randomNambers.push( numero );
        
    }
    
}
console.log(randomNambers);

document.getElementById("numeri").innerText = randomNambers;

setTimeout(nascondiNumeri, 3 * 1000);

setTimeout(chiediNumeri, 4 * 1000);




function getRandomNamber(min, max) {
    return Math.floor( Math.random() * (max - min +1) + min);
}


function nascondiNumeri(){
    document.getElementById("messaggio").innerText = "inserice i numei que hai visto!";
    document.getElementById("numeri").innerText = "";
}
    
function chiediNumeri(){
    let x = prompt("inserisci numeri");
    console.log(x);
}

