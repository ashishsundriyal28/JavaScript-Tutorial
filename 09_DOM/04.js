// change text
// textContent and innerText

// ----------------------- textContent --------------------------
// textContent property = can change text of the html

// textContent sara content dega, even jiska display none bhi hoga
// usko bhi return mei dega

const mainHeading = document.getElementById("main-heading") ;
console.log(mainHeading.textContent);

// mainHeading.textContent = "This is something else";
// console.log(mainHeading.textContent);



// ----------------------- innerText --------------------------
// textContent property = can be used to change text of the html
const mainHeading1 = document.getElementById("main-heading") ;
// innerText sirf vahi content dega, jo display mei dikh raha hoga
// sirf usko hi return mei dega
console.log(mainHeading1.innerText);















