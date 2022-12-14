//Promises
// 3 states: Pending, Fullfilled, Rejected

const myPromise = new Promise((resolve, reject) =>{
    const error = false;//when kept true error appears so it returns the catch value.
    if(!error){
        resolve("Yes! resolved the promise");
    } else {
        reject("No! rejected the promise");
    }
});

console.log(myPromise);

myPromise
.then(value => {
    return value + 1;
})
.then(newValue =>{
    console.log(newValue);
})
.catch(err =>{
    console.error(err);
})