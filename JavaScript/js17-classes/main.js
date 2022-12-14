class Pizza{
    constructor(pizzaType,pizzaSize){
        this.type = pizzaType;
        this.size=pizzaSize;
        this.crust="original";
        this.toppings=[];
    }
    getCrust(){ //get pizzaCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){ //set pizzaCrust(pizzaCrust){
        this.crust=pizzaCrust;
    }
    getToppings(){
        return this.toppings;
    }
    setToppings(topping){
        return this.toppings.push(topping);
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust}  crust pizza`);
    }
}

const myPizza = new Pizza("pepperoni","small");
//myPizza.type="supreme";//not mostly done
myPizza.setCrust =("thin");//myPizza.pizzaCrust ="thin";
myPizza.bake();
console.log(myPizza.getCrust());//console.log(myPizza.pizzaCrust);
myPizza.setToppings("sausage");
myPizza.setToppings("cheese");
console.log(myPizza.getToppings());


//parent or super class
class Pizza1{
    constructor(pizzaSize){
        this.size=pizzaSize;
        this.crust="original";
    }
    getCrust(){ 
        return this.crust;
    }
    setCrust(pizzaCrust){ 
        this.crust=pizzaCrust;
    }
}

//child class
class specialtyPizza extends Pizza1 {
    constructor(pizzaSize){
        super(pizzaSize);
        this.type= "The Works";
    }
    slice(){
        console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
    }
}

const mySpecialty = new specialtyPizza("medium");
mySpecialty.slice();


class Pizza2{
    constructor(pizzaSize){
        this._size=pizzaSize;
        this._crust="original";
    }
    getCrust(){ 
        return this._crust;
    }
    setCrust(pizzaCrust){ 
        this._crust=pizzaCrust;
    }
}
//_ (underscore) shows that these are kept private

//Factory function
//private fields can be accessed through dot notation
function pizzaFactory(pizzaSizes){
    const crust = "original";
    const size = pizzaSizes;
    return{
        bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
    };
}
const miPizza = pizzaFactory("small");
miPizza.bake();

//advanced method but no 100% support in all browsers
//classes that support public and private fields
class Pizza3{
    crust = "original";
    #sauce = "tomato sauce"//private field with #
    #size;
    constructor(pizzaSize){
        this.#size=pizzaSize;
    }
    getCrust(){ 
        return this.crust;
    }
    setCrust(pizzaCrust){ 
        this.crust=pizzaCrust;
    }
    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} ${this.#size} pizza`);
    }
}
const miePizza = new Pizza3("large");
miePizza.hereYouGo();
//for public fields we are able to access them by using dot notation
console.log(miePizza.crust);
console.log(miePizza.getCrust());
//but we cannot do the same for private fields
console.log(miePizza.sauce);//gives output as "undefined"
//console.log(miePizza.#sauce);//gives error