const users = fetch("https://jsonplaceholder.typicode.com/users");

//pending
console.log(users);

const users1 = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    //console.log(response);//gives a ReadableStream so we should add json
    return response.json();
})
.then(data => {
    //console.log(data);
    data.forEach(user => {
        console.log(user);
    });
})

console.log(users1);
//this line of execution is kept pending as the code above executes first 
//this happens because it is kept in a global element which is not within the users1 code

//Here also there can be a chain of .then which will be tedious again
//So async/await is brought up
