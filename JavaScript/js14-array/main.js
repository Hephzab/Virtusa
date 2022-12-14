const myArray = [];

//add elements to an array
myArray[0] = "Me";
myArray[1] = 2928;
myArray[2] = true;

//refer to an array
console.log(myArray);

//length
console.log(myArray.length);

//last element
console.log(myArray[myArray.length-1]);

console.log(myArray[1]);

myArray.push("school");
console.log(myArray);

//myArray.pop();
//console.log(myArray);
//or to recieve the ouput of the last item/ element 

const lastItem = myArray.pop();
console.log(lastItem);

//myArray.unshift(42);//adds element to the front 
//console.log(myArray);

const newLength = myArray.unshift(42);
console.log(newLength);

const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);

// delete myArray[1];//the element is still availabe
// console.log(myArray);
// console.log(myArray[1]);
// the better way is:

//to remove element in middle of the array the array
myArray.splice(1,1);
console.log(myArray);
console.log(myArray[1]);

//splice can also be used to replace
myArray.splice(1,0,43);//0 doesnt delete anything
console.log(myArray);
console.log(myArray[1]);

//slice
const miArray = ['A','B','C','D','E','F'];
const newArray= miArray.slice(2,5);
console.log(newArray);

//reverse
miArray.reverse();
console.log(miArray);

//join
const newString = miArray.join();
console.log(newString);

const newArrays = newString.split(",")
console.log(newArrays);

const miArrayA = ['A','B','C'];
const miArrayB = ['D','E','F'];
const newArrayC = miArrayB.concat(miArrayA);
console.log(newArrayC);

//instead of concat method we can use spread operator
const newArrayD = [...miArrayA, ...miArrayB];//spread operator
const newArrayE = [miArrayA,miArrayB];//sans
console.log(newArrayE);


//multi dimensional Arrays
const equipShelfA = ["basketball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfB[0]);

//2D Array
const equipDept = [equipShelfA,equipShelfB];
const clothesDept = [clothesShelfA,clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

//3D Array
const sportsStore =[equipDept,clothesDept];
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);