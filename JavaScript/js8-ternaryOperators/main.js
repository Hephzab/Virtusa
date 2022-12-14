//syntax
// condition ? ifTrue : ifFalse;

let soups = "Chicken Noodle soup";
let response = soups ? "Yes, we have soup" : "Sorry, no soup today.";
console.log(response);

let soup;
let isCustomerBanned = false;
let soupAccess = isCustomerBanned ? "Sorry, no soup for you!"
:soup
? `Yes, we have ${soup} today`
: "Sorry, no soup today";
console.log(soupAccess);

let testScore =78;
let myGrade= testScore >90 ? "A"
:testScore >80 ? "B"
:testScore >70 ? "C"
:testScore >60 ? "D"
:testScore >50 ? "E"
:"F";
console.log(`My test grade is ${myGrade}`); 

let playerOne = "rock";
let computer = "rock";
let result = 
playerOne === computer ? "Tie game!":
playerOne === "rock" && computer === "paper" ? "Computer wins!":
playerOne === "paper" && computer ==="scissors"?
"Computer Wins!":
playerOne === "scissors" && computer === "rock"?
"Computer Wins!":
"PlayerOne Wins!";
console.log(result);