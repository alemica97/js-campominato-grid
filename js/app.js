//Salvo l'elemento HTML grid-wrapper
const gridWrapper = document.querySelector('.grid-wrapper');
console.log(gridWrapper);

//prendo il select dall'HTML
const difficultyLevel = document.getElementById('difficulty-level');
console.log(difficultyLevel);

let level;
//Salvo il bottone play in una costante
const playButton = document.querySelector('.btn');
console.log(playButton);

playButton.addEventListener('click', function(){
    // console.log('prova');
    level = difficultyLevel.value;
    console.log(level);
})

// switch(level){
//     case
// }