//------------------------------
// Rock-Paper-Scissor Game
//------------------------------

// Let the Machine decide a hand
function randomHand(){
    const pcHand = Math.floor((Math.random()*3))
    return pcHand
}
// Validates User input.
function validateUserInput(userHand){
    switch(true){
        case ((userHand=="r")): return 0;
        case ((userHand=="p")): return 1;
        case ((userHand=="s")): return 2;
    }
    return userHand;
}
// Check who won
function checkVictory(pcHand,userHand){
    const pMessage = document.getElementById("pMessage");

    if(pcHand==userHand){
        pMessage.textContent="A tie!";
        gamesTied = gamesTied+ 1;
    }
    else if((pcHand==0 && userHand==1) || (pcHand==1 && userHand==2) || (pcHand==2 && userHand==0)){
        pMessage.textContent="You won!";
        gamesWon = gamesWon+ 1;
    }
    else{
        pMessage.textContent="You lost!";
        gamesLost = gamesLost+1;
    }

}

// Initiate the round
function playRound(user){
    const pc = randomHand();
    const userInput = validateUserInput(user);
    checkVictory(pc,userInput);
}

//Checks Final winner
function evaluateWinner(userScore,pcScore){
    const pMessage = document.getElementById("pMessage");
    if(userScore>pcScore){
        pMessage.textContent=`Congratulations! You won ${userScore} out of 5 games!`;
    }
    else if (userScore==pcScore){
        pMessage.textContent=`Ah a tie! You won ${userScore} games and lost ${pcScore}!`;
    }
    else{
        pMessage.textContent=`Sorry, you've lost ${pcScore} out of 5 games! Try again!`;
    }
}

function updateHeader(){
    const h1content = document.querySelector("h1");
    h1content.textContent="Rock, Paper, Scissors! Round: "+roundCount;
}

function updateGameState(){
    const gameStatus = document.getElementById("gameStatus");
    gameStatus.textContent=`Games Won: ${gamesWon} \r\nGames Lost: ${gamesLost} \r\nGames Tied: ${gamesTied}`
    
}

function domManipulation(){
    console.log("domManipulation Called")
    // Select our container
    const container = document.querySelector("div");

    const h1content = document.createElement("h1");
    h1content.textContent="Rock, Paper, Scissors! Round: "+roundCount;
    container.appendChild(h1content);
    // Create 3 buttons
    const btnRock = document.createElement("button");
    btnRock.textContent = "Rock";
    btnRock.setAttribute("id","r");
    container.appendChild(btnRock);
    const btnPaper = document.createElement("button");
    btnPaper.textContent = "Paper";
    btnPaper.setAttribute("id","p");
    container.appendChild(btnPaper);
    const btnScissors = document.createElement("button");
    btnScissors.textContent = "Scissors";
    btnScissors.setAttribute("id","s");
    container.appendChild(btnScissors);
    
    const gameStatus = document.createElement("p");
    gameStatus.style.whiteSpace="pre";
    gameStatus.setAttribute("id","gameStatus");
    gameStatus.textContent=`Games Won: ${gamesWon} \r\nGames Lost: ${gamesLost} \r\nGames Tied: ${gamesTied}`
    container.appendChild(gameStatus);
    const pMessage = document.createElement("p");
    pMessage.setAttribute("id","pMessage");
    container.appendChild(pMessage);
    // Add EventHandling to container.
    container.addEventListener('click', (event)=>{
        let target=event.target;
        roundCount=roundCount+1;
        playRound(target.id);
        updateGameState();
        if (roundCount==6){
            evaluateWinner(gamesWon,gamesLost);
            container.removeChild(btnRock);
            container.removeChild(btnPaper);
            container.removeChild(btnScissors);
        }
        else{
        updateHeader();
        }
    })



}


//Start the game.
let roundCount =1;
let gamesWon =0;
let gamesLost =0;
let gamesTied =0;
domManipulation();