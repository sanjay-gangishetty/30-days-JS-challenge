// Activity 4 - Using third-party modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
import _ from "lodash";
// Merge two objects
const object1 = { a: 1, b: 2 };
const object2 = { b: 3, c: 4 };
const mergedObject = _.merge(object1, object2);
console.log("Merged object : ");
console.log(mergedObject);

// Task 7: Install a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
import axios from "axios";
// GET request
async function fetchData() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1",
    );
    console.log("Data:", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
