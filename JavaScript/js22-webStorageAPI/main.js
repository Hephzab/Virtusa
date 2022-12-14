//Web Storage API
//Its not a part of the DOM instead it refers to the Window API
//It is avalaible to JS via the global variable: window

//1
// window.alert("OK!");
// alert("OK!");

//2 - getting the web location
//window.alert(window.location);
// alert(location);

//3 - getting with storage, session and local storage
//first we need data to store
const myArray = ["eat", "sleep", "code"];
const myObj = {
    name: "Me",
    hobbies: ["eat", "sleep", "code"],
    logName: function() {
        console.log(this.name);
    }
};

//session storage- data is only stored in a session or when a particular website is open
//local storage - a persistent storage of data. can get back the data when returning to that same website

sessionStorage.setItem("mySessionStore", myObj);
const mySessionData = sessionStorage.getItem("mySessionStore");
console.log(mySessionData);
console.log(typeof mySessionData);

sessionStorage.setItem("mySessionStore1", myArray);
const mySessionData1 = sessionStorage.getItem("mySessionStore1");
console.log(mySessionData1);
console.log(typeof mySessionData1);

//for session and local storage it stores in string datatype.So wedont get the apt result we want. 
//This acts like JSON

sessionStorage.setItem("mySessionStore2", JSON.stringify(myObj));
const mySessionData2 = JSON.parse(sessionStorage.getItem("mySessionStore2"));
console.log(mySessionData2);
console.log(typeof mySessionData2);

sessionStorage.setItem("mySessionStore3", JSON.stringify(myArray));
const mySessionData3 = JSON.parse(sessionStorage.getItem("mySessionStore3"));
console.log(mySessionData3);
console.log(typeof mySessionData3);


localStorage.setItem("myLocalStore", JSON.stringify(myArray));
const myLocalData = JSON.parse(localStorage.getItem("myLocalStore"));
console.log(myLocalData);
console.log(typeof myLocalData);

 
localStorage.setItem("myLocalStore1", JSON.stringify(myArray));
//to remove items
//localStorage.removeItem("myLocalStore1");
//localStorage.clear()//to clear all local data if present (more than one)
const key = localStorage.key(0);
const storeLength = localStorage.length;
const myLocalData1 = JSON.parse(localStorage.getItem("myLocalStore1"));
console.log(key);
console.log(storeLength);
console.log(myLocalData1);
console.log(typeof myLocalData1);