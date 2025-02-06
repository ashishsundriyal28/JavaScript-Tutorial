// map method

const numbers = [3,4,6,1,8];

// always use return in case of using map
// const square = function(number){
//     // return number*number;
//     // console.log(number*number);
//     return (number*number);
// }
// const squaredArray = numbers.map(square) ;

// const squaredArray = numbers.map((number,index) => {
//     return (`index is ${index} => number is ${number*number}`);
// }) ;
// console.log(squaredArray); //console.log case, gives array of undefined




const users = [
    {firstName: "harshit", age: 23},
    {firstName: "mohit", age: 21},
    {firstName: "nitish", age: 22},
    {firstName: "garima", age: 20}
]

const userFirstName = users.map((user)=>{
    return user.firstName;
});
console.log(userFirstName);
