/* Note - 
 -------------------------- Local Storage -------------------------------- 
 Defn - The localStorage "object" allows you to save key/value pairs in the browser.
 Save Data to Local Storage           -->    localStorage.setItem(key, value);
 Read Data from Local Storage         -->    localStorage.getItem(key);
 Remove Data from Local Storage       -->    localStorage.removeItem(key);
 Remove All (Clear Local Storage)     -->    localStorage.clear();

 -------------------------- Session Storage -------------------------------- 
 Defn - The sessionStorage "object" let you store key/value pairs in the browser. The sessionStorage object stores data for only one session. (The data is deleted when the browser is closed).
  Save Data to Session Storage           -->    localStorage.setItem(key, value);
  Read Data from Session Storage         -->    localStorage.getItem(key);
  Remove Data from Local Storage       -->    localStorage.removeItem(key);
  Remove All (Clear Local Storage)     -->    localStorage.clear();

   -------------------------- Differences -------------------------------- 
   Local and session storage are same, except that sessionStorage data gets cleared when the page session ends—that is, when the page is closed.
*/

// Activity 1 - Understanding local storage
console.log("/****************** - Activity 1 - ***********************/");
// Task 1 - write a script to save string value to local storage and retrieve it. log the retrieved value.
const str = "Here is a string!!";
localStorage.setItem("String", str);
// Output - "Here is a string!!"
/* Note - It stores the data as below - 
Storage {name: 'Hello World!!', length: 2}
*/

// Task 2 - write a script to save object value to local storage by converting it to JSON string. Retrieve and parse the object, then log the it.
let obj = { "name": "sanjay", "age": 23, "state": "Telangana" };
obj = JSON.stringify(obj);
localStorage.setItem("obj", obj);
var retrievedObj = localStorage.getItem("obj");
console.log(retrievedObj);
// Output - { "name": "sanjay", "age": 23, "state": "Telangana" };

// Activity 2 - Using Local storage
console.log("/****************** - Activity 2 - ***********************/");
// Task 3 - Create a simple form that saves user input to local storage when submitted, retrieve and display the data on page load.
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    //   Creates new form data object
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    localStorage.setItem("FormData", JSON.stringify(formValues));
    displayData();
});

// Retrieve and display the data from local storage
function displayData() {
    const formStorageData = JSON.parse(localStorage.getItem("FormData"));
    const tb = document.getElementById("table-body");
    const createRow = (data, index) => {
        const tr = document.createElement("tr");
        const indexTd = document.createElement("td");
        indexTd.textContent = index + 1;
        tr.appendChild(indexTd);
        Object.values(data).forEach((value) => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        return tr;
    };
    tb.innerHTML = ""; // Clear existing table rows
    tb.appendChild(createRow(formStorageData, tb.rows.length));
}


// Task 4 - write a script to remove an item from local storage, log the local storage object before and after removing the item.
setTimeout(() => {
    console.log(localStorage);
    localStorage.removeItem("FormData");
    console.log(localStorage);
}, 5000);
/* Output - 
Storage {FormData: "{"name":"sanjay","age":"23","state":"Telangana"}", length: 1}
Storage {length: 0}
*/

// Activity 3 - Understanding session storage
console.log("/****************** - Activity 3 - ***********************/");
// Task 5 - write a script to save string value to session storage and retrieve it. log the retrieved value.
const string = "The quick brown fox jumps over the lazy dog";
sessionStorage.setItem("String", string);
console.log("Storing in session storage : ", sessionStorage.getItem("String"));
// Output - Storing in session storage :  The quick brown fox jumps over the lazy dog

// Task 6 - write a script to save object value to session storage by converting it to JSON string. Retrieve and parse the object, then log the it.
sessionStorage.setItem("obj", obj);
var retrievedObj = sessionStorage.getItem("obj");
var parsedObj = JSON.parse(retrievedObj);
console.log("Retrieved from session storage:", parsedObj);
/*
Output -
Retrieved from session storage: {age: 23,name: "sanjay",state: "Telangana"}
*/

// Activity 4 - Using Session Storage
console.log("/****************** - Activity 4 - ***********************/");
// Task 7 - Create a simple form that saves user input to session storage when submitted, retrieve and display the data on page load.
document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    //   Creates new form data object
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    sessionStorage.setItem("FormData", JSON.stringify(formValues));
    console.log("Storing in session storage : ", sessionStorage.getItem("FormData"));
    displayData();
});

// Task 8 - write a script to remove an item from session storage, log the session storage object before and after removing the item.
setTimeout(() => {
    console.log(sessionStorage);
    sessionStorage.removeItem("FormData");
    console.log(sessionStorage);
}, 5000);

// Activity 5 - Comparing Local Storage and Session Storage
console.log("/****************** - Activity 5 - ***********************/");
// Task 9 - write a function that takes a key and value and saves the value to both local storage and session storage. Retirieve and log the values from both storage mechanisms.
function saveToBoth(key, value) {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
    console.log("Local Storage : ", localStorage.getItem(key));
    console.log("Session Storage : ", sessionStorage.getItem(key));
};

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    //   Creates new form data object
    const formData = new FormData(e.target);
    const formValues = {};
    formData.forEach((value, key) => {
        formValues[key] = value;
    });
    saveToBoth("FormData", JSON.stringify(formValues));
    console.log("Clearing the data from both local storage and session storage after 5 seconds.....");
    setTimeout(() => {
        clearBoth();
    }, 5000);
});

// Task 10 - write a function that clears all the data from both local storage and session storage and verify the operation.
function clearBoth() {
    localStorage.clear();
    sessionStorage.clear();
    console.log("Local Storage : ", localStorage);
    console.log("Session Storage : ", sessionStorage);
};
