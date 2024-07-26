// Activity 1 - Basic Event Handling
// Task 1: Add a click event listner to a button that changes content of a paragraph
var para = document.getElementById("para");
var btn = document.getElementById("changer");
btn.addEventListener("click", () => {
  para.textContent = "Changed content";
});

// Task 2: Add a double-click event listner to an image that toggles its visibility
var image = document.getElementById("image");
image.addEventListener("dblclick", () => {
  image.style.display = "block";
});

// Activity 2 - Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background
var heading = document.getElementById("heading");
heading.addEventListener("mouseover", () => {
  heading.style.backgroundColor = "red";
});

// Task 4: Add a mouseout event listener to an element that resets its background color.
heading.addEventListener("mouseout", () => {
  heading.style.backgroundColor = "";
});

// Activity 3 - Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console
var input = document.getElementById("inputBox");
var val = "";
input.addEventListener("keydown", (e) => {
  console.log("Pressed key : " + e.key);
});

// Task 6: Add a keyup event listener to an input field that displays the current value in paragraph
input.addEventListener("keyup", (e) => {
  val = val + e.key;
  para.textContent = val;
});

// Activity 4 - Form events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console
var form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  var formData = new FormData(form);
  console.log(formData);
  e.preventDefault();
});

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph
var select = document.getElementById("cars");
select.addEventListener("change", () => {
  para.textContent = select.value;
});

// Activity 5 - Event Delegation
/* Note - 
Event Delegation is basically a pattern to handle events efficiently. 
Instead of adding an event listener to each and every similar element, 
we can add an event listener to a parent element and call an event on a particular target using the .target property of the event object.
*/

// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation
var list = document.getElementById("myList");
list.addEventListener("click", function (event) {
  console.log(event.target.textContent);
});

// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements
var addItemButton = document.getElementById("addItem");
list.addEventListener("click", function (event) {});
function addListItem() {
  var newItem = document.createElement("li");
  var itemCount = list.getElementsByTagName("li").length + 1;
  hild(newItem);
}
addItemButton.addEventListener("click", addListItem);
