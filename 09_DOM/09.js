// -----------------------------------------------
// innerHtml
// -----------------------------------------------

const headline = document.querySelector(".headline") ;
console.log("headline => ", headline);
console.log("headline.innerHTML => ", headline.innerHTML);

// we can change its innerHTML also

headline.innerHTML="<h1>InnerHTML changed</h1>";
headline.innerHTML+="<button class=\"btn btn-headline\">Learn more !!</button>";
console.log("headline.innerHTML => ", headline.innerHTML);
