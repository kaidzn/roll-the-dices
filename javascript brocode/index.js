
// COUNTER PROGRAM

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function(){
//     count++;
//     countLabel.textContent = count;
// }
// decreaseBtn.onclick = function(){
//     count--;
//     countLabel.textContent = count;
// }
// resetBtn.onclick = function(){
//     count = 0;
//     countLabel.textContent = count;
// }
/**************************************************************/
// RANDOM NUMBER GENERATOR

// const myBtn = document.getElementById("myBtn");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;

// let randomNum1;
// let randomNum2;
// let randomNum3;

// myBtn.onclick = function(){
//     randomNum1 = Math.floor(Math.random() * max);
//     randomNum2 = Math.floor(Math.random() * max);
//     randomNum3 = Math.floor(Math.random() * max);
//     label1.textContent = randomNum1;
//     label2.textContent = randomNum2;
//     label3.textContent = randomNum3;
// }

/*********************************************************/
// METHOD CHAINING - Calling one method after another in one continuous line of code

// let username = window.prompt("Enter your username: ");
// --------NO METHOD CHAINING-----


// username = username.trim();
// let letter = username.charAt(0);
// letter  = letter.toUpperCase();

// let extraChars = username.slice(1);

// extraChars = extraChars.toLowerCase();
// username = letter + extraChars;
// console.log(username);

// --------METHOD CHAINING-----

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
// console.log(username)
/****************************GUESS THE NUMBER GAME***************/
// const minNum = 1;
// const maxNum = 20;
// const answer = Math.round(Math.random() * (maxNum - minNum + 1));

// let attempts = 0;
// let guess;
// let running = true;

// while(running){

//     guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    
//     guess = Number(guess);
    
//     if(isNaN(guess)){
//         window.alert("Please enter a valid number");
//     }
//     else if(guess > maxNum || guess < minNum){
//         window.alert("Please enter a valid number");
//     }
//     else {
//         attempts++;
//         if(guess < answer){
//             window.alert("TOO LOW! TRY AGAIN!!!")
//         }
//         else if(guess < answer){
//             window.alert("TOO HIGH! TRY AGAIN!!!")
//         }
//         else{
//             window.alert(`CORRECT! THE ANSWER WAS ${answer}. It took you ${attempts} attempts to find the number.`);
//             running = false;
//         }
//     }
// }

/******************************TEMPERATURE CONVERTER***********/

// const textBox = document.getElementById("textBox");
// const toFar = document.getElementById("toFar");
// const toCel = document.getElementById("toCel");
// const result = document.getElementById("result");

// function convert(event) {
//     event.preventDefault();
//     const temp = parseFloat(textBox.value);

//     if (toFar.checked) {
//         // Celsius to Fahrenheit
//         const fahrenheit = (temp * 9/5) + 32;
//         result.textContent = `${temp} °C = ${fahrenheit.toFixed(2)} °F`;
//     } else if (toCel.checked) {
//         // Fahrenheit to Celsius
//         const celsius = (temp - 32) * 5/9;
//         result.textContent = `${temp} °F = ${celsius.toFixed(2)} °C`;
//     } else {
//         result.textContent = "Select the unit";
//     }
// }

// let fruits = ["apple", "banana", "orange"]
// let vegetables = ["carrots", "potatoes", "celery"]

// let foods = [...fruits,...vegetables]
// console.log(foods);
// function combineString(...strings){
//     return strings.join(" ");
// }
// const fullName = combineString("Mr.", "Spongbob", "Squarepants", "III");

// console.log(fullName);
/******************************************************************/
/*********************Dice game */



function rollDice() {
    const numDice = document.getElementById("numDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    const result = document.getElementById("result");
    const values = [];
    const images = [];
    const seenValues = new Set();
    let won = false; // Flag to indicate a win condition

    for (let i = 0; i < numDice; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="img/${value}.png">`);

        // Check if we've seen this value before
        if (seenValues.has(value)) {
            won = true;
        } else {
            seenValues.add(value); // Add unique value to the set
        }
    }

    diceResult.textContent = `Dice rolls: ${values.join(', ')}`;
    diceImg.innerHTML = images.join('');

    // Display win or try again message based on the flag
    if (won) {
        result.textContent = "You Won!!!";
    } else {
        result.textContent = "Try again!";
    }
}
 