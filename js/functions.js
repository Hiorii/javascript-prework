function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function printResult(res){
	let div = document.createElement('div');
	div.innerHTML = res;
	document.getElementById('result').appendChild(div);
}
function clearMessages(){
	document.getElementById('messages').innerHTML = '';
	document.getElementById('result').innerHTML = '';			
}
// Counter for game result
function counter(){
    if(document.getElementById('messages').textContent === "You Won!"){
        playerScore = playerScore + 1;            
        console.log("PlayserScore :" + playerScore);               
        document.getElementById('scorePlayer').innerHTML = playerScore;
    }
    else if(document.getElementById('messages').textContent === "Computer Won!"){
        computerScore = computerScore + 1;
        console.log("ComputerScore :" + computerScore); 
        document.getElementById('scoreComputer').innerHTML = computerScore;  
    }
}
// Main function
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
        printResult('Ruch komputera to: ' + argComputerMove + ', a ruch gracza to: ' + argPlayerMove);
        if (argPlayerMove == 'Nieznany ruch'){
            printMessage('You chose incorrect number');
            return('You chose incorrect number');
        } else if(argPlayerMove == 'papier' && argComputerMove == 'papier'){
            printMessage('Remis');
            return('Remis');
        } else if(argPlayerMove == 'kamień' && argComputerMove == 'kamień'){
            printMessage('Remis');
            return('Remis');
        } else if(argPlayerMove == 'nożyce' && argComputerMove == 'nożyce'){
            printMessage('Remis');
            return('Remis');
        } else if (argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
            printMessage('Computer Won!')
            return('Computer Won!');
        } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
            printMessage('You Won!')
            return('You Won!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'papier'){
            printMessage('Computer Won!')
            return('Computer Won!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
            printMessage('You Won!')
            return('You Won!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
            printMessage('Computer Won!')
            return('Computer Won!');
        } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
            printMessage('You Won!')
            return('You Won!');
        }        
    }   
}

