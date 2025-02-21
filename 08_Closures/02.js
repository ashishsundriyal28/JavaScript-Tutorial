// ---------- CLOSURE EXAMPLE-1 -----------------

function hello(x){
    const a = "varA";
    const b = "varB";

    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans();
console.log("=>",ans);
console.log("i=-><",ans());
