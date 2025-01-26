// for loop

for (let i = 0; i < 9; i++) {
    console.log(i);
}


let total = 0;

let num = 10;

for (let i = 1; i <= num; i++) {
    total = total + i;

}

console.log(total);



// for loop with break statement
for (let i = 0; i <= 10; i++) {
    if(i===4)
    {
        break;
    }
    console.log(i);
}

// for loop with continue statement
for (let i = 0; i <= 10; i++) {
    if(i===4)
    {
        continue;
    }
    console.log(i);
}