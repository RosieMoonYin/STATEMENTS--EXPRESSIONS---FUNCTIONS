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

const tOne = ((10*13)/2);

console.log (tOne);

const tTwo = ((16.5*20.3)/2);

console.log(tOne <= tTwo);
