const makeError =() => {
    try{
        const name ="ME";
        name = "NOTME";
    } catch(err){
        console.log(err);
        console.error(err);
        console.warn(err);
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    }
};
makeError();

//custom error
console.log(" MAKING A CUSTOM ERROR ");
const makeErrorAgain =() => {
    try{
        throw new customError("This is a custom error!");
    } catch(err){
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    }
};
makeErrorAgain();

function customError(message){
    this.message = message;
    this.name = "customError";
    this.stack = `${this.name}: ${this.message}`;
}

//generic built in error
console.log(" MAKING A GENERIC ERROR ");
const makeErrorAgainAndAgain =() => {
    try{
        throw new Error("This is an error!");
    } catch(err){
        console.error(err.name);
        console.error(err.message);
        console.error(err.stack);
    } 
};
makeErrorAgainAndAgain();


console.log(" TRY. CATCH. FINALLY. ");
const moreError =() => {
    let i=1;
    while(i<=5){
        try{
            if (i % 2 !== 0){
                throw new Error("Odd Number!");
            }
            console.log("Even Number!");
        } catch(err){
            console.error(err.stack);
        } finally{
            console.log(".....finally");
            i++;
        }
    }
};
moreError();

