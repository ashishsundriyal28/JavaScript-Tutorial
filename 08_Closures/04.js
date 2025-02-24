// ---------- CLOSURE EXAMPLE-3 -----------------
function func() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("Hi, you called me !!");
            counter++;
        }
        else {
            console.log("Already called one time !!");
        }
    }
}

const myFunc = func();
myFunc();
myFunc();
myFunc();

const myFunc2 = func();
myFunc2();
myFunc2();
myFunc2();