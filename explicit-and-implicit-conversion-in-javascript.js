/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


let result = "5" - 2; 
console.log("The result is: " + (result)); 

// Example 1: "5" - 2 → JS implicitly converts "5" to a number because of the "-" operator
// Works fine, result = 3, no fix needed


let isValid = Boolean(""); 
if (isValid) {
    console.log("This is valid!");
}
// Example 2: Boolean conversion
// Boolean("false") would be true (any non-empty string is truthy)
// Fix: Using "" makes Boolean("") = false, so the if block won't run


let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

// Example 3: String + number
// "25" + 5 = "255" (string concatenation)
// Fix: Use Number("25") + 5 = 30 (explicit conversion)


let fullPrice= "$2500";
let balance =Number(fullPrice.replace("$", "")) -250;
console.log(balance); 

// Example 4: Implicit conversion that fails
// "$2500" cannot be converted into a number because of the "$" symbol
// Trying to subtract 250 gives NaN (Not a Number)
// Fix: remove the "$" with .replace and then use Number() to convert "2500" into a valid number

let totalDays = "30"
let daysLeft = totalDays -20
console.log(daysLeft)

// Example 5: Implicit conversion that works
// "30" is a numeric string, so JS converts it to the number 30
// 30 - 20 = 10


