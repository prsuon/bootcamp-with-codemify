// 9 - Older Than Me: Create a function that outputs a string specifying if the person in the example below is older or younger than you."


// Your code here
function compareAge(name, age) {
    const my_age = 27;
    let message;
    if (age > my_age) {
        message = `${name} is older than me.`;
    } else {
        message = `${name} is younger than me.`;
    }
    console.log(message); 1
}

compareAge("Joel", 36) // ➞ "Joel is older than me."
compareAge("Samuel", 24) // ➞ "Samuel is younger than me."
compareAge("Lily", 28) // ➞ "Lily is oder than me."

const prompt = require("prompt-sync")();

let name = prompt("What's your name? ");

console.log(`Hello, ${name}!`);