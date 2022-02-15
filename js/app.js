//Salvo l'elemento HTML grid-wrapper
const gridWrapper = document.querySelector('.grid-wrapper');
console.log(gridWrapper);
//prendo il select dall'HTML
const difficultyLevel = document.getElementById('difficulty-level');
console.log(difficultyLevel);
//Salvo il bottone play in una costante
const playButton = document.querySelector('.btn');
console.log(playButton);
//faccio una funzione che dato un numero ritorna un array con n DIV ed n Numeri
function squaresGenerator(num){
    // const numArray = [];
    let square
    for(let i = 1; i <= num; i++){
        square = document.createElement('div');
        square.classList.add('square');
        gridWrapper.append(square);
        square.innerHTML += i;
        // numArray.push(i);
    }

    return square;
}


let level;
// let squareArray = [];
let rows = 7;
let columns = 7;
let squaresNumber = rows * columns;
console.log(`ci sono ${squaresNumber} quadrati`);

playButton.addEventListener('click', function(){
    // console.log('prova');
    level = difficultyLevel.value;
    // console.log(level);
    switch(level){
        case 'easy':
            console.log('hai scelto easy');

            break;
        case 'medium':
            console.log('hai scelto medium');
            break;
        case 'difficult':
            console.log('hai scelto difficult');
            break;
    }
})

console.log(squaresGenerator(squaresNumber));