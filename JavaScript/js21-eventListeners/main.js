//view2 of main.css is dsplayed to flex

const view = document.querySelector("#view2");// for this to be displayed we should either add "differ" in the script tag within the head tag otherwise we can put the scrpt tag after the main tag.
const div = view.querySelector("div");
const h2 =div.querySelector("h2");

// Syntax: addEventListener(event, function, useCapture)

const doSomething = () =>{
    alert("Doing something");
};

h2.addEventListener("click", doSomething, false);
h2.removeEventListener("click", doSomething, false);

//creating an anonymous function, we cannot then remove it
h2.addEventListener("click", function(event){
    console.log(event.target);
    event.target.textContent = "Clicked";
}) 