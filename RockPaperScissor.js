//------------------------------
// Rock-Paper-Scissor Game
//------------------------------

// Let the Machine decide a hand
function RandomHand(){
    let pcHand = Math.floor((Math.random()*3))
    return pcHand
}
// Ask the User for their hand
function AskUser(){
    let userHand = prompt("Rock Paper Scissors?");
    switch(userHand){
        case "Rock": return 0;
        case "Paper": return 1;
        case "Scissors": return 2;
        default: console.log("Wrong input!"); AskUser();
    }
    return userHand;
}
// Check who won
function CheckVictory(pcHand,userHand){
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
function PlayRPS(){
    let pc = RandomHand();
    let user = AskUser();
    CheckVictory(pc,user);
}