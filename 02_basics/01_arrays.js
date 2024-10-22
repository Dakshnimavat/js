const myArr = [0,1,2,3,4]
//  console.log(myArr[2]);

myArr.push(5)
myArr.pop()
myArr.unshift(7)
myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(0));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

const myn1 = myArr.slice(0, 2)
console.log("A ", myArr);
console.log(myn1);

const myn2 = myArr.splice(0, 2)
console.log(myn2);
