// while loops
let myNumber =50;
while(myNumber < 50){
    // myNumber++; output 0 to 50
    console.log(myNumber);
    myNumber++;
}

//do while loop
do{
    console.log(myNumber);
    //myNumber++;
}while(myNumber < 50);

//for loop
for(let i=0;i<=10;i++){
    console.log(i);
}

let name = "Dave";
for (let i=0; i<name.length; i++){
    console.log(name.charAt(i));
}

let counter = 0;
let myLetter;
while(true){
    myLetter = name[counter];
    console.log(myLetter);
    if(myLetter == "e") break;
    counter++;
}

while(counter <=3){
    myLetter = name[counter];
    console.log(myLetter);
    if(counter ===1){
        counter +=2;
        continue
    }
    if(myLetter == "e") break;
    counter++;
}
console.log(counter);