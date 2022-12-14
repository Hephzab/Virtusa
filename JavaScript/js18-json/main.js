// JSON: JavaScript Object Notation
// JSON is used to send and recieve data.
// JSON is a text format that is completely language independent.
// Meaning JSON is used to send & recieve data in many languages...not just in Javascript also in C#,python etc

const myObj =  { 
    name : "Me",
    hobbies: ["Eat","Sleep","Code"],
    hello: function() {
        console.log("Hello!");
    }
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);

const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);//does not sends any funtion or method that is defined in the object
console.log(typeof sendJSON);
console.log(sendJSON.name);//scince object have been converted into string name is no more an attribute inside JSON so the output will be "undefined"

const receiveJSON =JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);