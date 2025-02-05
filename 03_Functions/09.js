// rest parameters

// what i want is to get the first 3 values 
// and get the rest as array in c
// a: 1, b: 2, c: [3,4,5,6,7,8,9,10]

// function myFunc(a,b,...c) {
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `,c);
// }

// myFunc(1,2,3,4,5,6,7,8,9,10); 


// *-----------------------------------------------------
function addAll(...numbers){
    // console.log(numbers);
    console.log(Array.isArray(numbers));
    let total = 0 ;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}
const ans = addAll(1,2,3,4,5,6,7,8,9,10);
console.log(ans);




