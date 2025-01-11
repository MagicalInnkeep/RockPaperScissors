//------------------------------
// Rock-Paper-Scissor Game
//------------------------------

// Let the Machine decide a hand
function RandomHand(){
    const pcHand = Math.floor((Math.random()*3))
    return pcHand
}
// Ask the User for their hand
function AskUser(){
    let userHand = prompt("Rock Paper Scissors?").toLowerCase();
    switch(true){
        case ((userHand=="rock") || (userHand=="r")): return 0;
        case ((userHand=="paper") || (userHand=="p")): return 1;
        case ((userHand=="scissors") || (userHand=="s")): return 2;
        default: console.log("Wrong input!"); AskUser();
    }
    return userHand;
}
// Check who won
function CheckVictory(pcHand,userHand){

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
function PlayRound(){
    const pc = RandomHand();
    const user = AskUser();
    return userVictory = CheckVictory(pc,user);
}

//Checks Final winner
function EvaluateWinner(userScore,pcScore){
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

function PlayRPS(){
    let userScore =0;
    let pcScore =0;
    for(i=0;i<5;i++){
        roundVal = PlayRound();
        if(roundVal>0){
            ++userScore;
        }
        else if(roundVal<0){
            ++pcScore;
        }
    }
    EvaluateWinner(userScore,pcScore);
}