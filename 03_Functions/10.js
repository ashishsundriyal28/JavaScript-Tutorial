// param destructuring

// object
//mostly used in react

const person = {
    firstName : "Ashish",
    gender : "male",
    age : 500
}


// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     console.log(obj.age);
// }



function printDetails({firstName, gender, age}){
    console.log(firstName);
    console.log(gender);
    console.log(age);
}



printDetails(person);