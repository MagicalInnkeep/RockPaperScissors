//------------------------------
// Rock-Paper-Scissor Game
//------------------------------

// Let the Machine decide a hand
function randomHand(){
    const pcHand = Math.floor((Math.random()*3))
    return pcHand
}
// Ask the User for their hand
function askUser(){
    let userHand = prompt("Rock Paper Scissors?").toLowerCase();
    switch(true){
        case ((userHand=="rock") || (userHand=="r")): return 0;
        case ((userHand=="paper") || (userHand=="p")): return 1;
        case ((userHand=="scissors") || (userHand=="s")): return 2;
        default: console.log("Wrong input!"); askUser();
    }
    return userHand;
}
// Check who won
function checkVictory(pcHand,userHand){

    if(pcHand==userHand){
        console.log("Tie!");
        return 0;
    }
    else if((pcHand==0 && userHand==1) || (pcHand==1 && userHand==2) || (pcHand==2 && userHand==0)){
        console.log("You won!");
        return 1;
    }
    else{
        console.log("You lost!");
        return -1;
    }
}

// Initiate the round
function playRound(){
    const pc = randomHand();
    const user = askUser();
    return userVictory = checkVictory(pc,user);
}

//Checks Final winner
function evaluateWinner(userScore,pcScore){
    if(userScore>pcScore){
        console.log(`Congratulations! You won ${userScore} out of 5 games!`);
    }
    else if (userScore==pcScore){
        console.log(`Ah a tie! You won ${userScore} games and lost ${pcScore}!`);
    }
    else{
        console.log(`Sorry, you've lost ${pcScore} out of 5 games! Try again!`);
    }
}

function domManipulation(){
    console.log("domManipulation Called")
    // Select our container
    const container = document.querySelector("div");

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

    // Add EventHandling to container.
    container.addEventListener('click', (event)=>{
        let target=event.target;

        switch(target.id){
            case 'r':
                console.log("rock");
                break;
            case 'p':
                console.log("paper");
                break;
            case 's':
                console.log("scissor");
                break;
        }
    })
}

domManipulation();