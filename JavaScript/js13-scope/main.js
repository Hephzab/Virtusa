//var, let and const

//global scope
//var x=1;
//let y=2;
//const z=3;

//local scope
//block
//{
//    let y=4;
//    console.log(y);
//}

//function
//function myFunc(){
//    const z=5;
//    console.log(z);
//}
//myFunc();

//if y and z variable are not declared in global scope and is printed out of the local scope then it will show an error saying that y and z variable are not declared. So those variabkes should be print wihtin the local scope when they are not declared in the global scope

// block can be nested inside function or even function in a function

var x=1;
let y=2;
const z=3;

console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);

function myFun(){
    var x=10;
    const y=5;
    //console.log(`function: ${x}`);
    //console.log(`function: ${y}`);
    //console.log(`function: ${z}`);

    {
        var x=11;//function scoped
        const y=6; // block scoped
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);
    }

    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
}

//Avoid using var. Stick with const and let
//Use const unless you need to reassign value
//Use let if you know you will reassign value