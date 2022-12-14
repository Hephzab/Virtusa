const view1 = document.getElementById("view1");
console.log(view1);

const view2 = document.querySelector("#view2");//adding # here indicates that it is from a div elemenet 
console.log(view2);

//style to show or hide the different views
view1.style.display = "flex";
view2.style.display = "none";

//selection of both the views
const views = document.getElementsByClassName("view");
console.log(views);
// gives the output of HTMLCollections which are present of elements

const sameViews = document.querySelectorAll(".view");//. represents class as we do in css
console.log(sameViews);// this returns a NodeList which consists of nodes only and not elements

//selecting the divs
const divs = view1.querySelectorAll("div");
console.log(divs);
const sameDivs = view1.getElementsByTagName("div");
console.log(sameDivs);

const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for(let i=0; i<evenDivs.length; i++){
    evenDivs[i].style.backgroundColor = "darkblue";
    evenDivs[i].style.width = "150px";
    evenDivs[i].style.height = "150px";
}

const navText = document.querySelector("nav h1");
console.log(navText);
navText.textContent = "Document Object Model";

const navbar = document.querySelector("nav");
navbar.innerHTML = '<h1>Hello!</h1> <p>This should align right</p>';
console.log(navbar);
navbar.style.justifyContent = "space-evenly";

console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(evenDivs[0].nextElementSibling.nextElementSibling);

//to add and remove elements
view1.style.display = "none";
view2.style.display = "flex";
view2.style.flexDirection = "row";
view2.style.flexWrap = "wrap";
view2.style.margin = "10px";

while (view2.lastChild){
    view2.lastChild.remove(); //removes the nodes present
}

const createDivs = (parent, iter) => {
    const newDiv = document.createElement("div");
    newDiv.textContent = iter;
    newDiv.style.backgroundColor = "black";
    // newDiv.style.color = "black";
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.margin = "10px";
    newDiv.style.display = "flex";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    parent.append(newDiv);
};
// createdivs(view2, 10);
for (let i=1; i<=12; i++){
    createDivs(view2, i);
}