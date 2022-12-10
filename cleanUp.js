// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function displayNameQuestion() {
  console.log("Hello, what is your name?")
}

displayNameQuestion() // I changed the naming convention to reflect an action.

// EX 2:
function addThreeNums (first, second, third){
  console.log(`${first + second + third}`)
}
addThreeNums (1, 2, 3)
addThreeNums (4, 2, 7) // I removed the variable line of (var sum = first +seond + third) and use interpolation to include the equation inside the code block.


// EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");
 }

makeFreshPesto(); // I corrected the spelling of "func" to "function".


//  EX 4:
function avg(num1, num2) {
var sum = num1 + num2;
     return avg = sum / 2;
}
console.log(`The average is:${avg(10, 30)}.`)
   //I moved the closed curly bracket above the call line, I changed the second var line to return, added parenthesis inside the curly brackets on the call line and used interpolation the average equation, capatilized the T on "the" and moved the period inside the back tick in call statement
