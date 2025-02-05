// lexical scope

const myVar = "value1";

function myApp(){
    function myFunc(){
        // const myVar = "value59";
        //console.log("inside myFunc", myVar);

        const myFunc2 = () => {
            console.log("inside myFunc2", myVar);
        }
        myFunc2();
    }
    console.log(myVar);
    myFunc();
}

myApp();
