// reduce method

const numbers = [1, 2, 3, 4, 5];

// aim : sum of all numbers in array

// accumulator, currentValue, return
//      1           2           3
//      3           3           6
//      6           4           10
//      10          5           15

// 100 is kind-off initial value of the accumulator
const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
},100);
console.log(sum);


const userCart = [
    { productId: 1, productName: "mobile", price: 12000 },
    { productId: 2, productName: "laptop", price: 22000 },
    { productId: 3, productName: "tv", price: 15000 },
]

const totalAmount = userCart.reduce((totalPrice,currentProduct)=>{
    return totalPrice+currentProduct.price
},0);

// accumulator(totalPrice), currentValue,   return
//      0                       {}          12000
//      12000                  22000        34000     
//      34000                  15000        49000

console.log(totalAmount);

const ans = userCart.every((cartItem)=>cartItem.price<30000) ;
console.log(ans);
