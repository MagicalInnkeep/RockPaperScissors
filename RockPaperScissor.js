//------------------------------
// Rock-Paper-Scissor Game
//------------------------------

// Let the Machine decide a hand
function randomHand(){
    let pcHand = Math.floor((Math.random()*3))
    return pcHand
}
// Ask the User for their hand
function askUser(){
    let userHand = prompt("Rock Paper Scissor?");
    switch(userHand){
        case "Rock": return 0;
        case "Paper": return 1;
        case "Scissor": return 2;
        default: console.log("Wrong input!"); askUser();
    }
    return userHand;
}
// Check who won
function checkVictory(pcHand,userHand){
    if(pcHand==userHand){
        console.log("Tie!")
    }
    else if((pcHand==0 && userHand==1) || (pcHand==1 && userHand==2) || (pcHand==2 && userHand==0)){
        console.log("You won!")
    }
    else{
        console.log("You lost!")
    }
}

// Initiate the game
function playRPS(){
    let pc = randomHand();
    let user = askUser();
    checkVictory(pc,user);
}