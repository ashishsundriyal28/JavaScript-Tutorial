// sort method in js

// 5,9,1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)

// const numbers = [5, 9, 1200, 410, 3000];
// ["5", "9", "1210", "410", "3000"]
// ASCII CODES below
// [53, 57, 49, 52, 51]

// '0' : 48
// '1' :49
// '2':50
// '3':51
// '4' : 52
// '5': 53
// 16': 54
// '7' :55
// 18' : 56
// 19' : 57
// numbers.sort();
// console.log(numbers);

// capitals will be sorted first
// as there ASCII values is smaller then lower ones
const userNames = ['harshit', 'abcd', 'mohit', 'nitish','aabc', 'ABC', 'HARSHIT'];
userNames.sort();
console.log(userNames);

const numbers = [5, 9, 1200, 410, 3000];
numbers.sort((a,b)=>{
    //ascending => a-b, descending => b-a
    return a-b;
});
console.log(numbers);


// 1200,410
// a-b --- > 790
// a-b --- > postive (greater than 0) --- > b, a
// 410 , 1200

// a-b --- > negative ---- > a, b
// 5, 9 --- > -4

// price->lowToHigh, highToLow
const products = [
    {productId: 1, produceName: "p1", price: 300 },
    {productId: 2, produceName: "p2", price: 3000 },
    {productId: 3, produceName: "p3", price: 200 },
    {productId: 4, produceName: "p4", price: 8000 },
    {productId: 5, produceName: "p5", price: 500 },
]

// if i don't want to change the original array of objects
// products.sort((a,b)=>{
//     return a.price-b.price
// });
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price-b.price
});
const highToLow = products.slice(0).sort((a,b)=>{
    return b.price-a.price
});
console.log(products);
console.log(lowToHigh);
console.log(highToLow);









