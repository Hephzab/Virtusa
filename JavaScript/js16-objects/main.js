//Objects
//Key value pairs in curly braces
const myObj =  { name : "Me"};

const anotherObj = {
    alive: true,
    answer: 42,
    hobbies: ["Eat","Sleep","Code"],
    beverages: {
        morning: "Coffee",
        afternoon: "Iced Tea"
    },
    //action method name
    //anonimous function
    action: function(){
        return `Time for ${this.beverages.morning}`;
    }
}
console.log(myObj.name);
console.log(anotherObj.alive);
console.log(anotherObj["answer"]);
console.log(anotherObj.hobbies);
console.log(anotherObj.hobbies[1]);
console.log(anotherObj.beverages.morning);
console.log(anotherObj.action());


const vehicle = {
    wheels: 4,
    engine: function(){
        return "Vrooooom!";
    }
}

const truck = Object.create(vehicle);
truck.door = 2;
console.log(truck);
console.log(truck.wheels);//inheritance
console.log(truck.engine());
const car=Object.create(vehicle);
car.doors=4;
car.engine=function(){
    return "Whooosh!";
}
console.log(car.engine());


// to call the values
const band={
    vocals: "Robert Plant",
    guitar: "Jimmy Page",
    bass: "John Paul Jones",
    drums: "John Bonham"
};

// delete band.drums;
// console.log(band.hasOwnProperty("drums"));

console.log(Object.keys(band));
console.log(Object.values(band));

for (let job in band) {
    console.log(`On ${job}, it's ${band[job]}!`);
}

// destructuring of Objects
const { guitar: myVariable, bass: myBass} = band;
console.log(myVariable);
console.log(myBass);

const {vocals,guitar,bass,drums} = band;
console.log(guitar);
console.log(vocals);

function sings({ vocals }){
    return `${vocals} sings!`;
}
console.log(sings(band));