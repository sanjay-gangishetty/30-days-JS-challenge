// Activity 1 - Object creation and access
// Task 1 - create an object named book and properties like title, author and log the object to the console
console.log("/****************** - Activity 1 - ***********************/");
var book1 = {
  title: "4 Hour work week",
  author: "Tim Ferris",
  year: "2012",
};

console.log(book1);
// Task 2 - access and log the title and author properties of the book
console.log(book1.title + " by " + book1.author);
console.log();
console.log();

console.log("/****************** - Activity 2 - ***********************/");
// Activity 2 - Object Methods
// Task 3 - Add a method to book object that returns a string with the book's title and author and log the result of calling this method
// Task 4 - Add a method to book object that takes a parameter (year) and updates the books's year property, then log the updated object
var book = {
  title: "Tools of Titans",
  author: "Tim Ferris",
  year: "2012",
  bookDetail: () => { // Task 3
    return book.title + " by " + book.author;
  },
  updateYear: (year) => { // Task 4
    book.year = year;
    return book.year;
  },
  returnsThis: function () {
    return this.title + " by " + this.author;
  },
};
console.log(book.bookDetail());
console.log(book.updateYear(2000));
console.log();
console.log();

console.log("/****************** - Activity 3 - ***********************/");
// Activity 3 - Nested Objects
// Task 5 - Create a nested object representing a library with properties like name and books (array of book objects) and log the library object to the console.
var library = {
  name: "Test Library",
  books: [book, book1],
};
console.log(library);
// Task 6 - Access and log the name of the library and the titles of all the books in the library 
console.log(library.name);
library.books.forEach((book) => {
  console.log(book.title);
});
console.log();
console.log();

console.log("/****************** - Activity 4 - ***********************/");
// Activity 4 - The `this` keyword
/*
Note - 
In JavaScript, the this keyword behaves differently in arrow functions compared to regular functions. Arrow functions do not have their own this context; instead, they inherit this from the surrounding lexical context. 
*/
// Task 7 - Add a method to the book object that uses `this` keyword to return a string with the book's title and year and log the result of calling this method.
console.log(book.returnsThis());
console.log();
console.log();

console.log("/****************** - Activity 5 - ***********************/");
// Activity 5 - Object iteration
// Task 8 - Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (key in book) {
  console.log(key + " : " + book[key]);
}
// Task 9 - Use Object.keys and Object.values methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));
console.log();
console.log();
