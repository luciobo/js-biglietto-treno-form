const userAge = document.getElementById('');
// let userAgeNumber = parseInt(userAge)

console.log(userAge)

const userChilometers = document.getElementById('chilometri');

console.log(userChilometers)

let prezzoBiglietto = (userChilometers * 0.21)

console.log(prezzoBiglietto)

console.log(typeof userAge, typeof userAgeNumber, userAge, userAgeNumber)


if (userAge < 18) {
    let prezzoBigliettoScontato = prezzoBiglietto - (prezzoBiglietto * 20 / 100)
    console.log(prezzoBigliettoScontato)
} else if (userAge > 65) {
    let prezzoBigliettoScontato = prezzoBiglietto - (prezzoBiglietto * 60 / 100)
    console.log(prezzoBigliettoScontato)
} else {
    let prezzoBigliettoIntero = (userChilometers * 0.21)
    console.log(prezzoBigliettoIntero)
}





/* 
1 se l'user age number ha meno di 18 anni applico lo sconto di 20 %
2 
Formula percentuale = prezzo - (prezzo * sconto / 100)
*/