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

    let square;
    const root = Math.sqrt(num);
    for(let i = 1; i <= num; i++){
        square = document.createElement('div');
        square.classList.add('square');
        gridWrapper.append(square);
        square.innerHTML += i;
        /*calcolo l'altezza e larghezza dei quadrati con calc e la radice quadrata del parametro
        salvata nella costante root così da avere sempre le dimensioni corrette anche
        all'aumentare di righe e colonne*/
        square.style.width = `calc( 100% / ${root})`;
        square.style.height = `calc( 100% / ${root})`;

    }
    
    return square;
}
//funzione che dati come parametri righe e colonne, restituisce il numero di quadrati
function squaresNumber(row,col){

    let squaresNumber = row * col;
    return squaresNumber;
}

// let squareArray = [];
// let rows = 0;
// let columns = 0;
// console.log(`ci sono ${squaresNumber} quadrati`);
let level;
let squares;

playButton.addEventListener('click', function(){

    gridWrapper.innerHTML = ''; //tramite questo resetto il contenuto di grid-wrapper, così non si accumula
    level = difficultyLevel.value;
    // console.log(level);
    switch(level){
        case 'easy':
            console.log('hai scelto easy');
            squares = squaresNumber(7,7);
            console.log(squares);
            console.log(squaresGenerator(squares));
            break;
        case 'medium':
            console.log('hai scelto medium');
            squares = squaresNumber(9,9);
            console.log(squares);
            console.log(squaresGenerator(squares));
            break;
        case 'difficult':
            console.log('hai scelto difficult');
            squares = squaresNumber(10,10);
            console.log(squares);
            console.log(squaresGenerator(squares));
            break;
    }

})

