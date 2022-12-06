//ARRAYS the array below holds 4 elements :)

const item1 = "Mat";
const item2 = "Block";
const item3 = "Strap";
const item4 = "Blanket";

//array is larger than variable containers
//storing more then one data value in chronological order unlike objects normal
//arrays are still objects!! 

const yogaItems = ["Mat","Block","Stap","Blanket"];
console.log(yogaItems);

//arrays have a zero index!
//arrays can hold different data types -strings -boolean -number

const itemAge = [2012, 2019, 2022, 2017];
console.log(itemAge);

console.log(yogaItems);
console.log(yogaItems[0])

//mutating array in simple form  wowee BUT WARNING to mutate arrays
//you need to state the chronilogical number value in the array
yogaItems[0] = "Bolster";
console.log(yogaItems);




//FUNCTIONS IN FUNCTIONS OBJECTS / arrays can become perameters
//(INTEGER times INTEGER divided INTEGER) outcome = Boolean
//equation === area = (base*height)/2
//using => operator to find BOOLEAN outcome :)

const tOne = ((10*13)/2);

console.log (tOne);

const tTwo = ((16.5*20.3)/2);

console.log (tTwo);

console.log(tOne <= tTwo);


const tFive = ((7.8*5.6)/2);
const tSix = ((9.3*12.4)/2);

console.log(tFive <= tSix);

//check in with Helena about how to use template literals in this case to print a sentence about findings!


// VARIABLES hold values FUNCTIONS hold a piece of code to be reused
//FUNCTIONS are powerful as they avoid repetition {use curly brace to make block}

//defining function:
function logFunction() {
    console.log("This is a function!")
}

//telling JavaScript to execute (print for console):
logFunction();
//super useful for large apps when we are reusing same functions over and over

//I see functions as mathematical formulea a tarot card reading could be a function
//the individual card exist as a string data value

function tarotReading(wandsFour, queenCups, coinsTen) {
    const reading = `A simple reading with ${wandsFour} situation card, ${queenCups} action card, and ${coinsTen} outcome card `;
    return reading;
}
//we NEED dynamic values! ascribe value to override `ANY`
//values of perameters are called "ARGUEMENTS" arguements quantify or give meaning to perameters
//we need to store result of function in varialble to print to console
const situationActionOutcomeReading = tarotReading(1,1,1);
console.log(situationActionOutcomeReading);

// reading does not exist outside of the function,k if you declare a variable inside FUNCTION
// it will only exist inside of curly braces - AKA the FUNCTION machine

//ONE MORE FUNCTION

function calcAge(age1, age2,) {
    const resAge = age1 + age2;
    return resAge;
}
//new CONCISE way to give ARGUEMENT to PERAMETERS
console.log(calcAge(32,42));



