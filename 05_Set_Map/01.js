// iterables

// jispe hum for-of loop laga sake
// string, array are iterable

const firstName = "Harshit";
for(let char of firstName){
    console.log(char);
}

const items = ['item1','item2','item3','item4','item5']
for (const item of items) {
    console.log(item);        
}


// --------------- Objects are not iterable --------------------
// const users = {
//     'key1':'value1',
//     'key2':'value2',
// }
// for (const user of users) {
//     console.log(user.key1);
// }


// array like object
// jinke pas length property hoti hai
// aur jiko hum index se access kar sakte hai
// example :- string


// const firstName = "Harshit"; // declared above so commented here
console.log(firstName.length);
console.log(firstName[2]);




