//view2 of main.css is dsplayed to flex

// Syntax: addEventListener(event, function, useCapture)
document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 =div.querySelector("h2");

    view.addEventListener("click", (event) => {
        view.style.backgroundColor = "purple";
    },true);

    div.addEventListener("click", (event) => {
        div.style.backgroundColor = "blue";
    },true);

    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    },true);
};

/*const initApp = () => {
    const view = document.querySelector("#view2");
    const div = view.querySelector("div");
    const h2 =div.querySelector("h2");

    view.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "purple";
    },false);

    div.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "blue";
    },false);

    h2.addEventListener("click", (event) => {
        event.target.textContent = "Clicked";
    },false);
};*/
//when all are set to event.target it all refers to the value of the view element, which is not feasible

//when the useCapture is kept in default that is "false" then when clicking on h2, the style of view and div also changes. So the changes happens in beginning with h2 then div and view as h2 inside div and div is inside view.This event is called bubbling event.
//but when setting the useCapture to true and when clicking on h2 all other elements also changes but the changes is seen from outward to inward that is from view to div then to h2
//So to see the transititon or to visualize the change we use stopPropagation()

//to see the change from inward to outward that is when useCapture is false or default
/*view.addEventListener("click", (event) => {
    view.style.backgroundColor = "purple";
},false);

div.addEventListener("click", (event) => {
    div.style.backgroundColor = "blue";
},false);

h2.addEventListener("click", (event) => {
    event.stopPropagation();
    event.target.textContent = "Clicked";
},false);*/