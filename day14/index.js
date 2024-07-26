// Activity 1 - Class Definition
console.log("/****************** - Activity 1 - ***********************/");
// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }

  // Task 2: Add a method to the Person class that updates the age property and logs the updated age.
  updateAge(age) {
    this.age = age;
    console.log(`Updated age : ${this.age}`);
  }

  // Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
  static stGreet() {
    return `Hey from the static greet method!!`;
  }

  // Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
  getName() {
    return `${this.name}`;
  }

  // Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
  setName(name) {
    this.name = name;
  }
}

// Task 1: Define a class Person with properties name and age, and a method to return a greeting message. Create an instance of the class and log the greeting message.
const person = new Person("Sanjay", 23);
console.log(person.greet());

// Task 2: Add a method to the Person class that updates the age property and logs the updated age.
person.updateAge(24);
console.log("\n");

// Activity 2 - Class Inheritance
console.log("/****************** - Activity 2 - ***********************/");
// Task 3: Define a class Student that extends the Person class. Add a property studentId and a method to return the student ID. Create an instance of the Student class and log the student ID.
class Student extends Person {
  // Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
  static count = 0;
  constructor(name, age, studentId) {
    super(name, age);
    this.studentId = studentId;
    Student.count++;
  }
  getStuId() {
    return `My student ID is ${this.studentId}.`;
  }

  // Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
  greet() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old. And my student ID is ${this.studentId}.`;
  }
  getStudentsCount() {
    return `Number of students : ${Student.count}`;
  }
}
const student = new Student("Sanjay", 23, 123);
console.log(student.getStuId());

// Task 4: Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message.
console.log(student.greet());
console.log("\n");

// Activity 3 - Static methods and properties
console.log("/****************** - Activity 3 - ***********************/");
// Task 5: Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message.
console.log(Person.stGreet());

// Task 6: Add a static property to the Student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students.
console.log(student.getStudentsCount());
console.log("\n");

// Activity 4 - Getters and Setters
console.log("/****************** - Activity 4 - ***********************/");
const person2 = new Person("Raju", 25);

// Task 7: Add a getter method to the Person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.
console.log("Before Updating name : " + person2.getName());

// Task 8: Add a setter method to the Person class to update the name properties (firstName and lastName). Update the name using the setter and log the updated full name.
person2.setName("Raj Kumar");
console.log("After Updating name : " + person2.getName());
console.log("\n");

// Activity 5 - Private Fields
console.log("/****************** - Activity 5 - ***********************/");
// Task 9: Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.
class Account {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  deposit(amount) {
    if (amount <= 0) {
      console.log("Amount must be greater than 0 to deposit!!");
      return;
    }
    console.log("Depositing " + amount + "....");
    this.#balance += amount;
  }
  withdraw(amount) {
    if (this.#balance < amount) {
      console.log("You do not have enough balance!!");
      return;
    }
    console.log("Withdrawing " + amount + "....");
    this.#balance -= amount;
  }
  getBalance() {
    return this.#balance;
  }
}

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.
const sanjayAccount = new Account(1000);
console.log("Your balance is : " + sanjayAccount.getBalance());
sanjayAccount.deposit(500);
console.log("Your balance is : " + sanjayAccount.getBalance());
sanjayAccount.withdraw(300);
console.log("Your balance is : " + sanjayAccount.getBalance());
console.log("\n");
