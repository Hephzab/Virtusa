alert("Hello World!");

let myBoolean = confirm("Ok === True\nCancel === False");
console.log(myBoolean);

let name = prompt("Please enter your name.");
if (name){//when we dont enter name and clicks ok
    console.log(name.length);//when entering lots of unwanted whitespaces
    console.log(name.trim().length);
    console.log(name.trim());
}else{
    console.log("You didnt enter your name.");
}


