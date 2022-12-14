//an example
let customerIsBanned = false;//or true
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned){
    reply = "No soup for you!";
} else if(soup && crackers){
    reply =`Here's your order of ${soup} and crackers`;
} else if(soup){
    reply =`Here's your order of ${soup}`;
} else{
    reply="Sorry we are out of soup";//if we put ${soup} then the reply will be undefined
}
console.log(reply);

//checking grades
let testScore =0;
let collegeStudent= true;
let grade;
if(testScore >= 90){
    grade ="A";
} else if (testScore>=80){
    grade ="B";
} else if (testScore>=70){
    grade="C";
} else if (testScore>=60){
    grade = "D";
} else{
    if (collegeStudent){
        grade="U";
    }else{
        grade="F";
    }
}
console.log(grade);

// rock paper scissor
let playerOne = "paper";
let computer = "rock";
if(playerOne === computer){
    console.log("It is a tie");
}else if (playerOne === "rock"){
    if (computer === "paper"){
        console.log("Computer wins!");
    }
    else{
        console.log("PlayerOne wins!");
    }
}else if (playerOne === "paper"){
    if (computer === "scissors"){
        console.log("Computer wins!");
    }
    else{
        console.log("PlayerOne wins!");
    }
}else{
    if (computer === "rock"){
        console.log("Computer wins!");
    }
    else{
        console.log("PlayerOne wins!");
    }
}