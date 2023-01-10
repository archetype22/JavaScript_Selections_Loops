console.log("Hello TrueCoders!\n==========\n");

// Exercise 1 Section

console.log("EXERCISE 1:\n==========\n");

//Iterating through numbers (1-100) via a For loop
//"Skipping" the even numbers via continue keyword
//Will display 1-99, by odd

for (let i = 0; i < 100; i++){
    if(i % 2 === 0){
        continue;
    }
    else{
        console.log(i);
    }
}

// Exercise 2 Section

console.log("EXERCISE 2:\n==========\n");

//Iterating through numbers (1-100) via a For loop
//If a number is divisible by both, 3 and 5, it will
//print `FizzBuzz` to the console.
//If a number is divisible by only 3, it will print
//`Fizz` to the console.
//If a number is divisible by only 5, it will print
//`Buzz` to the console.

for (let i = 0; i < 100; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log(`FizzBuzz`)
    }
    else if(i % 3 === 0){
        console.log(`Fizz`)
    }
    else if(i % 5 === 0){
        console.log(`Buzz`)
    }
    else {
        console.log(i);
    }
}

// Exercise 3a Section

console.log("EXERCISE 3a:\n==========\n");

//Iterating through numbers (1-100) using a While loop
//"Skipping" the even numbers via continue keyword

for (let i = 1; i < 100; i+=2){
    while (i % 2 === 0){
        continue;
    }
    console.log(i);
}

// Exercise 3b Section

console.log("EXERCISE 3b:\n==========\n");

//Iterating through numbers (1-100) using a Do-While loop
//"Skipping" the even numbers by incrementing startingNum by 2

let startingNum = 1;
do{
    console.log(startingNum);
    startingNum += 2;
}
while(startingNum <= 100);

// Exercise 3c Section

console.log("EXERCISE 3c:\n==========\n");

//Iterating through numbers (1-100) via a While loop
//If a number is divisible by both, 3 and 5, it will
//print `FizzBuzz` to the console.
//If a number is divisible by only 3, it will print
//`Fizz` to the console.
//If a number is divisible by only 5, it will print
//`Buzz` to the console.

var i = 1;
while (i < 100){
    if (i % 5 === 0 && i % 3 === 0){
        console.log(`FizzBuzz`);
    }
    else if (i % 3 === 0){
        console.log(`Fizz`);
    }
    else if (i % 5 === 0){
        console.log(`Buzz`);
    }
    else {
        console.log(i);
    }
    i++;
}

// Exercise 3d Section

console.log("EXERCISE 3d:\n==========\n");

//Iterating through numbers (1-100) via a Do-While loop
//If a number is divisible by both, 3 and 5, it will
//print `FizzBuzz` to the console.
//If a number is divisible by only 3, it will print
//`Fizz` to the console.
//If a number is divisible by only 5, it will print
//`Buzz` to the console.

var j = 1;
do{
    if (j % 5 === 0 && j % 3 === 0){
        console.log(`FizzBuzz`);
    }
    else if (j % 3 === 0){
        console.log(`Fizz`);
    }
    else if (j % 5 === 0){
        console.log(`Buzz`);
    }
    else {
        console.log(j);
    }
    j++;
}
while (j < 100);

// Exercise 4 Section

console.log("EXERCISE 4:\n==========\n");

//Iterating through a collection of numbers until the randomly generated number has been found.
let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let m = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500

for (let v = 0; v <= m; v++){
    if (v == value){
        console.log(`Found value! ${v}.`);
        break;
    }
    if (v == m){    
        console.log(`Did not find value.`)
    }
}

// Exercise 5 Section

console.log("EXERCISE 5:\n==========\n");

//Iterating through a randomly generated numberset
//Checking selected number to see if it is divisible by `fizz`, `buzz` or both (3 and/or 5)

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let start = 0; start <= n; start++){
    if(i % buzzDivisor === 0 && i % fizzDivisor === 0){
        console.log(`FizzBuzz`)
    }
    else if(i % fizzDivisor === 0){
        console.log(`Fizz`)
    }
    else if(i % buzzDivisor === 0){
        console.log(`Buzz`)
    }
    else {
        console.log(i);
    }
}

