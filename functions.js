// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting (firstName, lastName) {
  console.log(`Hey there ${firstName} ${lastName}!`);
}
printGreeting ("Rosa", "Parks")
printGreeting ("Martin", "Luther King")
printGreeting ("John", "Lewis")

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function favoriteFood(name) {
  console.log(`I love ${name}!`)
}
favoriteFood("tacos")

// 3: Write a function that has 3 parameters: a string and two numbers.
//The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job.
// The function should print out a sentence that includes the name of the company and the range itself
//(if the numbers passed in are 90000 and 110000, the pay range is 20000).

function salaryRange(name, minimumPay, maximumPay, positionTitle) {
  console.log(`${name} has a salary range of ${minimumPay + maximumPay} for the ${positionTitle} position.`)
}
salaryRange("Anthem", 50000, 75000, "customer service")


// 4: Write a function that satifies the following interaction pattern:

function checkStock(num, name){
  if (num >= 4){
    console.log(`${name} is stocked`)
  } else if (num>=1 && num<=3){
    console.log(`${name} running LOW`)
  } else {
  console.log(`${name} OUT of stock!`)
  }
}


checkStock(4, "Coffee");
// => "Coffee is stocked"

checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

checkStock(1, "Salsa");
// => "Salsa - running LOW"
