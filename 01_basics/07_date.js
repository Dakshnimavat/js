let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday:  'long'
})
console.log(newDate);
