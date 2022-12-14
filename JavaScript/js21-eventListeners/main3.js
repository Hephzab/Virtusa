//view3 of main.css is dsplayed to flex


document.addEventListener("readystatechange", (event) => {
    if (event.target.readyState === "complete"){
        console.log("readyState: complete");
        initApp();
    }
});

const initApp = () => {
    const view3 = document.querySelector("#view3");
    const myForm = view3.querySelector("#myForm");
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();//without this the data typed in will not be stored or even submit the data so this prevents the default method of not storing or submitting the data typed
        console.log("submit event");
    })
}