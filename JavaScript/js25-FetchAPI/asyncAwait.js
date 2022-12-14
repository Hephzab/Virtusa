const myUsers = {
    userList: []
}

async function myCoolFunction() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    //console.log(jsonUserData);
    return jsonUserData;
}

//myCoolFunction();

const anotherFunc = async () => {
    const data = await myCoolFunction();
    //console.log(data);
    //when using the obj myUsers
    myUsers.userList = data;
    console.log(myUsers.myUsers);//so this executes later eventhough anotherFunc(); is called first. This is because await is kept for this.
}

anotherFunc();
console.log(myUsers.myUsers);//This executes first as it is in global space