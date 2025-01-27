// Loops in case of arrays

const fruits = ["apple", "mango", "grapes"];

let i = 0 ;

// while loop
while (i<fruits.length){
    console.log(fruits[i]);
    i++;
}

// for loop
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// enhanced for loop
for (let fruit of fruits)
{
    console.log("fruit => ",fruit);
}

// forEach loop
for(let index in fruits)
{
    console.log("index => ", fruits[index]);
}


