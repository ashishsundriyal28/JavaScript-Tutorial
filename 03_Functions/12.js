// function returning function

function myFunc() {
    function hello() {
        console.log("hello world ")
    }
    return hello;
}
// bcz its function returning a function
// ans has also become a function
const ans = myFunc();
console.log(ans); // [Function: hello]
console.log(typeof ans); // function
ans();