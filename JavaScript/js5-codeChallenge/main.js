//First Code challenge

//Write a code that will return a random letter from your name
const myName = "Hephzibah";
console.log(myName.charAt(Math.floor(Math.random() *9 +1)));
//This gives value from 1to 9 but not from 0 
//So when giving myName.charAt(9) the output is blank if v give myNumber.charAt(0) only then The first letter is included so +1 should be taken out
console.log(myName.charAt(Math.floor(Math.random() *9)));

//For any Name
const anyName = "Jonathan";
console.log(anyName.charAt(Math.floor(Math.random()* anyName.length)));