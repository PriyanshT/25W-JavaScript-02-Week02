console.log("Connected!");
/* STEP 1: Declare variables
	Use a-z, 0-9, A-Z and underscores, avoiding reserved names
	All program variables are generally declared at the beginning (called 'hoisting') */
var myName;
var myAge;

/* STEP 2: Initialize variables
	Don't confuse a variable with no value with one that doesn't exist at all */
myName = "Priyansh";
myAge = 16;

/* STEP 3: Updating variables
	Once a variable has been declared, this can be done any time */
myAge = 80;

// STEP 4: Variable types
// Numbers
var num1 = 50;
var num2 = 3.14;
console.log(typeof (num1));
console.log(typeof num2);

// Strings (use '' or "")
var string1 = "Hello. How are you?";
console.log(typeof string1);

// Booleans
var isCorrect = true;
var isCorrect2 = false;
console.log(typeof isCorrect);
console.log(typeof isCorrect2);

// Arrays
var colorsArray = ["red", "blue", "green"];
var numArray = [1, 2, 3];
var mixedArray = [1, 2, "Hundred", "green"];

// Objects
var movieObj = {
    movieName: "New Movie",
    ratings: 5
};

// STEP 5: Typing (JavaScript is a loosely-typed language)