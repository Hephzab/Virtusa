//Fetch API requires a discussion of ...
//Callbacks, Promises, Thenables, and Async/Await

//Callbacks


function firstFunction(parameters, callback){
    //do code
    callback();
}

//AKA "callback hell"
firstFunction(para, function() {
    //do code
    secondFunction(para, function() {
        thirdFunction(para, function(){
            //this is a tedious work and brings in lots of confusion so callbacks are not preffered
        });
    });
});
