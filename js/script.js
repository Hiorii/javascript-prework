let randomNumber = Math.floor(Math.random() * 3 + 1);
let argComputerMove = getMoveName(randomNumber);
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let argPlayerMove = getMoveName(playerInput);

displayResult(argComputerMove, argPlayerMove);

/* Set move name depending on inserted or random generated number */
function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {        
        return 'nieznany ruch';
    }
}     
/* Check the game results depending on move names */
function displayResult(argComputerMove, argPlayerMove){
    printMessage('Ruch komputera to: ' + argComputerMove + ', a ruch gracza to: ' + argPlayerMove);
    if (argPlayerMove == 'nieznany ruch'){
        printMessage('You chose incorrect number');
    } else if(argPlayerMove == 'papier' && argComputerMove == 'papier'){
        printMessage('remis');
    } else if(argPlayerMove == 'kamień' && argComputerMove == 'kamień'){
        printMessage('remis');
    } else if(argPlayerMove == 'nożyce' && argComputerMove == 'nożyce'){
        printMessage('remis');
    } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
        printMessage('Computer Won!')
    } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage('You Won!')
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier'){
        printMessage('Computer Won!')
    } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('You Won!')
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
        printMessage('Computer Won!')
    } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('You Won!')
    }
} 
    
