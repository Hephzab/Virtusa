const myPromise = new Promise((resolve, reject) =>{
    const error = false;
    if(!error){
        resolve("Yes! resolved the promise");
    } else {
        reject("No! rejected the promise");
    }
});

//to delay the execution of code
const myNextPromise = new Promise((resolve, reject) =>{
    setTimeout(function() {
        resolve("myNextPromise resolved!");
    }, 3000);
});

myNextPromise.then(value =>{
    console.log(value);
});
//eventhough this is written first it results after myPromise because of the delay given, 3000 - 3 secs
//It tells to myPromise to do its work first then this code will run later

myPromise.then(value =>{
    console.log(value);
});