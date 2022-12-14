//Function declaration
function sum(num1,num2){
    if(num2===undefined){
        return num1+num1;
    }
    return num1+num2;
}
console.log(sum(2));
console.log(sum(2,5));

//first type
function getUserNameFromEmail(email){ 
    return email.slice(0, email.indexOf('@'));
}
console.log(getUserNameFromEmail("user@gmail.com"));

//second type
const getTheUserNameFromEmail= function(email){ 
    return email.slice(0, email.indexOf('@'));
}
console.log(getTheUserNameFromEmail("me@gmail.com"));

//third type - arrow function
const getNameOfUserFromEmail= (email) =>{ 
    return email.slice(0, email.indexOf('@'));
};
console.log(getNameOfUserFromEmail("hope@gmail.com"));


const toProperCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(toProperCase("november"));