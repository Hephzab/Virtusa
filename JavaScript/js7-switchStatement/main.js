//an example
switch("2"){//(Math.floor(Math.random()*3[then we can try with 5 to get No match as the result]+1))
    case 1:
        console.log(1);
        break;
    
    case 2:
        console.log(2);
        break;

    case 3:
        console.log(3);
        break;
    
    default:
        console.log("No Match");
}

// rock paper scissor
let playerOne = "paper";
let computer = "scissors";
switch (playerOne){
    case computer:
        console.log("Tie game!");
        break;
    case "rock":
        if(computer === "paper"){
            console.log("Computer Wins!");
        } else{
            console.log("PlayerOne wins!");
        }
        break;
    case "paper":
        if(computer === "scissors"){
            console.log("Computer Wins!");
        }
        else{
            console.log("PlayerOne wins!");
        }
        break;
    default:
        if(computer === "rock"){
            console.log("Computer wins!");
        }
        else{
            console.log("Playerone wins!");
        }
}