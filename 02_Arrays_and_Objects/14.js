console.clear();
// Objects inside array
// very useful in real world applications

const users = [
    {userId:1, firstName:"Ashish", gender:"male"},
    {userId:2, firstName:"Mohit", gender:"male"},
    {userId:3, firstName:"Nitish", gender:"male"},
]

// for(let user of users){
//     console.log(user.firstName);
// }

// nested destructuring

// const [user1, user2, user3] = users;
// console.log(user1);
// console.log(user2);
// console.log(user3);

// name change for user1 from firstName to user1firstName
const [{firstName:user1firstName}, , {gender}] = users ;
console.log(user1firstName);
console.log(gender);













