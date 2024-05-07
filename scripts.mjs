//1. Fizz Buzz Problem

//To begin, solve the following classic “Fizz Buzz” problem. 
//There are a few different ways to do this - experiment with what you think is the most efficient. 
//Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
//Accomplish the following:

//Loop through all numbers from 1 to 100.

for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//If a number is divisible by 3, log “Fizz.”
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
}


//If a number is divisible by 5, log “Buzz.”

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//If a number is divisible by both 3 and 5, log “Fizz Buzz.”

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else {
        console.log(i);
    }
}

//If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

//2. Prime Time

//Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. 
//For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. 
//Similarly, the numbers 7 and 11 are prime. 
//As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!

//Write a script that accomplishes the following:

//Declare an arbitrary number, n.

//Create a loop that searches for the next prime number, starting at n and incrementing from there.

//As soon as you find the prime number, log that number and exit the loop.

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}

// An arbitrary number, n
let num = 20; // this can be any given number

// A loop to search for the next prime number
while (true) {
    if (isPrime) {
        console.log("Next prime number after",num, "is", num);
        break;
    }
    n++;
}


//Continuing with the example above, if n is equal to 4, your loop should log 5. 
//Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. 
//Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.

// Function to check if a number is prime


// Try with a higher number
let n = 1000000; // a higher number test

// A loop to search for the next prime number
while (true) {
    n++;
    if (isPrime(num)) {
        console.log("Next prime number after", n - 1, "is", n);
        break;
    }
}


3. //More Loopy

// Given CSV string
let csvString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";

// Initialize variables to store cell data
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";

// Loop through the characters of the CSV string
for (let i = 0; i < csvString.length; i++) {
    // If the character is a comma, move to the next cell
    if (csvString[i] === ",") {
        continue;
    }
    // If the character is a line feed indicating the end of a row
    else if (csvString[i] === "\n") {
        // Log the row of data
        console.log(cell1, cell2, cell3, cell4);
        // Cell variables for the next row are rest here.
        cell1 = "";
        cell2 = "";
        cell3 = "";
        cell4 = "";
    }
    // This is how the character is placed in the appropriate cell if the character is a letter or digit. 
    else if ((csvString[i] >= '0' && csvString[i] <= '9') || (csvString[i] >= 'A' && csvString[i] <= 'Z') || (csvString[i] >= 'a' && csvString[i] <= 'z')) {
        if (cell1 === "") {
            cell1 += csvString[i];
        } else if (cell2 === "") {
            cell2 += csvString[i];
        } else if (cell3 === "") {
            cell3 += csvString[i];
        } else if (cell4 === "") {
            cell4 += csvString[i];
        }
    }
}


console.log(cell1, cell2, cell3, cell4); //this logs the last row of data


