//Async/Await
//Example

//EXAMPLE 1
//workflow function

const getAllUserEMails = async() =>{
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    });

    //console.log(userEmailArray);

    //return userEmailArray;//To use the return we can do the below

    postTowebPage(userEmailArray);
}

//getAllUserEMails();

//console.log(getAllUserEMails); // gives output as pending

const postTowebPage = (data) => {
    console.log(data);
}

getAllUserEMails();

//EXAMPLE 2
// 2nd parameter of Fetch, which is always an object

const getDadJoke = async () => {
    const response =  await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();

    console.log(jsonJokeData);
    console.log(jsonJokeData.joke);
}

getDadJoke();

//sans json
const getMoreDadJoke = async () => {
    const response =  await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "text/plain"
        }
    });
    const textJokeData = await response.text();

    console.log(textJokeData);
}

getMoreDadJoke();

//EXAMPLE 3
const jokeObj = {
    id: 'v4wAlO7USf', 
    joke: 'What type of music do balloons hate? Pop music!'
}

const postData = async () => {

    const response =  await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();

    console.log(jsonResponse);
}

postData(jokeObj);

//EXAMPLE 4
const requestJoke = async (firstName, lastName) => {
    const response =  await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=${nerdy}`);

    const jsonResponse = await response.json();

    console.log(jsonResponse.value);
    console.log(jsonResponse.value.joke);
}

requestJoke("Bruce","Lee");

//Example 5
//abstract into function
//maybe from a form
const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "Lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJokes = async (url) => {
    const response = await fetch(url);
    const jsonResponse = await response.json();
    const joke = jsonResponse.value.joke;
    postJokeToPage(joke);
}

const postJokeToPage= (joke) => {
    console.log(joke);
}

//Procedural "workflow" function
const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished!"); 
}

processJokeRequest();