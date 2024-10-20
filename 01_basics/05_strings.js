const name = "Daksh"
const repoCount = 3

// console.log(name + repoCount + " value");

// console.log(`My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Daksh Fc Barcelona")

// console.log(name.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('F'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   daksh  nimavat   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://daksh.com/daksh%20nimavat"
console.log(url.replace("%20", "-"));

console.log(gameName.split(" "));

