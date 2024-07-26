// Activity 1
// Task 1: Select an HTML element by its ID and change its text content
document.getElementById("heading").textContent = "Manipulated Heading";

// Task 2: Select an HTML element by its class and change its background color
const h = (document.querySelector(".heading2").style.backgroundColor = "red");

// Activity 2
// Task 3: Create a new 'div' element with some text content and append it to the body
const divElement = "<div><h3>This is an appended div</h3></div>";
document.body.innerHTML += divElement;

// Task 4: Create a new 'li' element and add it to an existing 'ul' list
const node = document.createElement("li");
const textnode = document.createTextNode("D");
node.appendChild(textnode);
document.querySelector("ul").appendChild(node);

// Activity 3
// Task 5: Select an HTML element and remove it from the DOM
const element = document.getElementById("heading");
element.remove();

// Task 6: Remove the last child of the specific HTML elment
let e = document.querySelector("ul");
let child = e.lastElementChild;
e.removeChild(child);

// Activity 4
// Task 7: Select an HTML element and change one of it's attributes (e.g.src of an 'img' tag)
const img = document.querySelector("img");
img.src =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUEzLKGWhf-Oc2y46H9-0xSXITsgTQklZNQ&s";

// Task 8: Add and remove a CSS class to/from an HTMl element
img.classList.add("img");
img.classList.remove("img");

// Activity 5
// Task 9: Add a click event listner to button that changes the text content of a paragraph
function changeContent() {
    let element = document.getElementById("text-content");
    element.textContent = "Hey!!";
}

// Task 10: Add a mouseover event listner to an element that changes its border color
let eventElement = document.getElementById("mouse-over");
function mouseOver() {
    eventElement.style.border = "2px solid red";
    eventElement.style.backgroundColor = "blue";
    eventElement.style.color = "white";
    eventElement.style.textAlign = "center";
}
function mouseOut() {
    eventElement.style.border = "none";
    eventElement.style.backgroundColor = "";
    eventElement.style.color = "black";
    eventElement.style.textAlign = "left";
}
