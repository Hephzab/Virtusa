//Refactored the Game with While loop and Array
let playGame = confirm("Shall We play rock, paper or scissors?");
if(playGame){
    //play
    while (playGame){
        const playerChoice = prompt("Please enter rock,paper, or scissors.");
    if(playerChoice || playerChoice === ""){
        const playerOne = playerChoice.trim().toLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){

            const computerChoice = Math.floor(Math.random()*3);
            const rpsArray = ["rock","paper","scissors"];
            const computer = rpsArray[computerChoice];
            
            const result = 
            playerOne === computer ? "Tie game!":
            playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            :playerOne === "paper" && computer ==="scissors"?
            `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            :playerOne === "scissors" && computer === "rock"?
            `playerOne: ${playerOne}\nComputer: ${computer} \nComputer wins!`
            :`playerOne: ${playerOne}\nComputer: ${computer} \nPlayerOne Wins!`;
        alert(result);
        playGame =confirm("Play Again?");
        if(!playGame) alert("Ok, Thanks for playing.");
        continue;
    }else{
        alert("You didnt enter rock,paper or scissors");
        }
    } else{
        alert("I guess you changed your mind. Maybe next time");
        break;
    } 
}
}else{
    alert("Ok, maybe next time");
}