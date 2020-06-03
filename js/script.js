document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});

function playGame (playerInput){
    clearMessages();
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let argComputerMove = getMoveName(randomNumber);    
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
        if (argPlayerMove == 'Nieznany ruch'){
            printMessage('You chose incorrect number');
        } else if(argPlayerMove == 'papier' && argComputerMove == 'papier'){
            printMessage('Remis');
        } else if(argPlayerMove == 'kamień' && argComputerMove == 'kamień'){
            printMessage('Remis');
        } else if(argPlayerMove == 'nożyce' && argComputerMove == 'nożyce'){
            printMessage('Remis');
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
}



    
