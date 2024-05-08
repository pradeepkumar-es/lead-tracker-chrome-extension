// 1. Save a key-value pair in localStorage
// 2. Refresh the page. Get the value and log it to the console
// 3. Clear localStorage

// HINTS:
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings

// localStorage.setItem("myLeads", "www.example.com");
// console.log(localStorage.getItem("myLeads"));
// localStorage.clear();

//How do I store an array in localStorage?
/*localStorage only support only Strings. Use JSON.stringify() and JSON.parse() 
var names = [];
names[0] = prompt("New member name?");
localStorage.setItem("names", JSON.stringify(names));

//...
var storedNames = JSON.parse(localStorage.getItem("names"));
*/
//JSON.stringify(arrayName) it convert array into string
//JSON.parse(stringName) it convert string into array

//truthy and Falsy Values
/*
const credits = 0

if (credits) {
    console.log("Let's play 🎰")
} else {
    console.log("Sorry, you have no credits 😭")
}

truthy
falsy

false
0
""
null -> how you as a developer signalize emptiness
undefined -> how JavaScript signalizes emptiness
NaN
*/


//Guess the expression: truthy or Falsy //way to guess
// console.log(  Boolean("")   ) // false 
// console.log(  Boolean("0")  ) // true
// console.log(  Boolean(100)  ) // true
// console.log(  Boolean(null) ) // false
// console.log(  Boolean([0])  ) // true
// console.log(  Boolean(-0)   ) // false