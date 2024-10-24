function myName() {
    console.log("d");
    console.log("a");
    console.log("k");
    console.log("s");
    console.log("h");
}

// myName()

// function addition(num1, num2) {
//     console.log(num1 + num2);
// }

function addition(num1, num2) {
    // let result = num1 + num2
    // return result

    return num1 + num2
}

const result = addition(5, 5)
// console.log(result);

function userLoginMessege(username = "name") {
    if (!username) {
        console.log("please enter a username");
        return
    } 
    return `${username} just logged in`
}

// console.log(userLoginMessege("Daksh"));
console.log(userLoginMessege("daksh"));

