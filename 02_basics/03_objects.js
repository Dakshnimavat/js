
const mySym = Symbol("key1")

const user = {
    name: "Daksh",
    "full name": "daksh nimavat",
    [mySym]: "mykey1",
    age: 20,
    location: "surat",
    email: "daksh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Sunday","Monday"]
}

// console.log(user.name);
// console.log(user["name"]);
// console.log(user["full name"]);
// console.log(typeof user[mySym]);

user.email = "daksh@yahoo.com"
// Object.freeze(user)
user.email = "daksh@microsoft.com"
// console.log(user);

user.greetings = function() {
    console.log("hello user"); 
}
user.greetingstwo = function() {
    console.log(`hello user, ${this.name}`); 
}

console.log(user.greetings());
console.log(user.greetingstwo());
