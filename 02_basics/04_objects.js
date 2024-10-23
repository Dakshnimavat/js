const user = {}

user.id = "123abc"
user.name = "same"
user.isLoggedIn = false

// console.log(user);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Daksh",
            lastname: "Nimavat"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b"
}

const obj2 = {
    3: "c",
    4: "d"
}

const obj4 = {
    5: "e",
    6: "f"
}

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "daksh@gmail.com"
    },
    {
        id: 1,
        email: "daksh@gmail.com"
    },
    {
        id: 1,
        email: "daksh@gmail.com"
    },
]

console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

console.log(user.hasOwnProperty('isLogged'));

