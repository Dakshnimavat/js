const marvel = ["thor", "hulk", "spiderman"]
const dc = ["superman", "batman", "aquaman"]

// marvel.push(dc)
// console.log(marvel);
// console.log(marvel[3][1]);

// const allheros = marvel.concat(dc)
// console.log(allheros);

const allNewHeros = [...marvel, ...dc]
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [4, 5, [6, 7]]]

const realArray = anotherArray.flat(Infinity)
// console.log(realArray);

console.log(Array.isArray("daksh"));
console.log(Array.from("daksh"));
console.log(Array.from({name: "daksh"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
