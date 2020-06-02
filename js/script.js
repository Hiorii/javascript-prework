let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
  computerMove = 'kamień';
}else if (randomNumber == 2){
    computerMove = 'papier';
}else if (randomNumber == 3){
    computerMove = 'nożyce'
}

printMessage('Ruch komputera to: ' + computerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}else if(playerInput == '2'){
    playerMove = 'papier'
}else if (playerInput == '3'){
    playerMove = 'nożyce'
} 

printMessage('Ruch gracza to: ' + playerMove);

if (playerMove == 'nieznany ruch'){
    printMessage('You chose incorrect number');
} else if(playerMove == 'papier' && computerMove == 'papier'){
    printMessage('remis');
} else if(playerMove == 'kamień' && computerMove == 'kamień'){
    printMessage('remis');
} else if(playerMove == 'nożyce' && computerMove == 'nożyce'){
    printMessage('remis');
} else if (playerMove == 'papier' && computerMove == 'nożyce'){
    printMessage('Computer Won!')
} else if (playerMove == 'papier' && computerMove == 'kamień'){
    printMessage('You Won!')
} else if (playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('Computer Won!')
} else if (playerMove == 'kamień' && computerMove == 'nożyce'){
    printMessage('You Won!')
} else if (playerMove == 'nożyce' && computerMove == 'kamień'){
    printMessage('Computer Won!')
} else if (playerMove == 'nożyce' && computerMove == 'papier'){
    printMessage('You Won!')
}
