// Activity 1 - Basic Regular expressions
console.log("/****************** - Activity 1 - ***********************/");
// Task 1 - write a simple regex patten to match all the occurances of the word. eg-javaScript
let pattern = /JavaScript/g;
const text =
  "JavaScript is a powerful language. Many developers use JavaScript for web development.";
const matches = text.match(pattern);
console.log(matches);

// Task 2 - write a regex to match all digits in a string, log the matches
const text2 = "There are 123 apples and 456 oranges in 789 baskets.";
let pattern2 = /\d+/g;
const matches2 = text2.match(pattern2);
console.log(matches2);
console.log("\n");

// Activity 2 -Character Classes and Quantifiers
console.log("/****************** - Activity 2 - ***********************/");
// Task 3 - Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const pattern3 = /\b[A-Z][a-z]*\b/g;
let text3 = "Many developers use Javascript for web development.";
const matches3 = text3.match(pattern3);
console.log(matches3);

// Task 4 - Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const text4 = "There are 123 apples and 456 oranges in 789 baskets.";
const pattern4 = /\d+/g;
const matches4 = text4.match(pattern4);
console.log(matches4); // Output: ['123', '456', '789']
console.log("\n");

// Activity 3 - Grouping and Capturing
console.log("/****************** - Activity 3 - ***********************/");
// Task 5 - write a regular expression to capture the area code, central office code, and line number from a usa phone number format(eg- (123)456-7890). Log the captures
const text5 = "(123)456-7890 is a phone number.";
const pattern5 = /\((\d{3})\)(\d{3})-(\d{4})/;
const matches5 = text5.match(pattern5);
console.log("Area Code:", matches5[1]); // Output: Area Code: 123
console.log("Central Office Code:", matches5[2]); // Output: Central Office Code: 456
console.log("Line Number:", matches5[3]); // Output: Line Number: 7890
console.log("\n");

// Task 6 - Write a regular expression to capture the username and domain from an email address. Log the captures.
const text6 = "username@domain.com";
const pattern6 = /([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
const matches6 = text6.match(pattern6);
console.log("Username:", matches6[1]); // Output: Username: username
console.log("Domain:", matches6[2]); // Output: Domain: domain.com

// Activity 4 - Assertions and boundaries
console.log("/****************** - Activity 4 - ***********************/");
// Task 7 - Write a regular expression to match a word only if it is at the beginning of a string. Log the matches.
const text7 =
  "JavaScript is a powerful language. JavaScript is also versatile.";
const pattern7 = /^\w+/g;
const matches7 = text7.match(pattern7);
console.log(matches7);

// Task 8 - Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text8 = "JavaScript is a powerful language";
const pattern8 = /\b\w+\b$/g;
const matches8 = text8.match(pattern8);
console.log(matches8); // Output: ['language']
console.log("\n");

// Activity 5 - Practical Applications
console.log("/****************** - Activity 5 - ***********************/");
// Task 9 - Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter, one digit, and one special character). Log whether the password is valid.
const text9 = "Anyone8438%";
const pattern9 = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/g;
const isValid = pattern9.test(text9);
console.log("Password is valid ? " + isValid); // Output: true

// Task 10 - Write a regular expression to validate a URL. Log whether the URL is valid.
const text10 = "https://www.example.com";
const pattern10 =
  /^(https?:\/\/)?([a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+)(\/[^\s]*)?$/;
const isValidUrl = pattern10.test(text10);
console.log("Url is valid ? " + isValidUrl); // Output: true or false
console.log("\n");

// /** Output -------
// /****************** - Activity 1 - ***********************/
// [ 'JavaScript', 'JavaScript' ]
// [ '123', '456', '789' ]


// /****************** - Activity 2 - ***********************/
// [ 'Many', 'Javascript' ]
// [ '123', '456', '789' ]


// /****************** - Activity 3 - ***********************/
// Area Code: 123
// Central Office Code: 456
// Line Number: 7890


// Username: username
// Domain: domain.com
// /****************** - Activity 4 - ***********************/
// [ 'JavaScript' ]
// [ 'language' ]


// /****************** - Activity 5 - ***********************/
// Password is valid ? true
// Url is valid ? true

// **/
