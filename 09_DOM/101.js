const rootNode = document.getRootNode();
console.log("rootNode => ",rootNode);

// to see child nodes of the parent node
console.log("rootNode.childNodes => ",rootNode.childNodes); // NodeList

// ------------------------------------------------------------
// NodeList, therefore, can get elements with index
const htmlElementNode = rootNode.childNodes[0] ;
// ------------------------------------------------------------
console.log("htmlElementNode => ", htmlElementNode); // it is a js object

// object representation
// console.dir(htmlElementNode);

console.log("htmlElementNode.childNodes => ")
console.log(htmlElementNode.childNodes); // NodeList(3) [head, text, body]



const headElementNode = htmlElementNode.childNodes[0];
console.log("headElementNode => ", headElementNode); // it is a js object

const textNode1 = htmlElementNode.childNodes[1];
console.log("textNode1 => ", textNode1); // it is a js object

const bodyElementNode = htmlElementNode.childNodes[2];
console.log("bodyElementNode => ", bodyElementNode); // it is a js object


// child to parent relationship
console.log(headElementNode.parentNode);


// sibling relationship
console.log(headElementNode.nextSibling);
console.log(headElementNode.nextSibling.nextSibling);


// ------------------------------------------------------------
// this gives the next element sibling 
// (skipping the textNode part, directly giving the element sibling)
console.log("headElementNode.nextElementSibling => ");
console.log(headElementNode.nextElementSibling);
// ------------------------------------------------------------


// all the child nodes of the head element
console.log(headElementNode.childNodes);


const h1 = document.querySelector("h1");
const div = h1.parentNode;
div.style.color = "#efefef";
div.style.backgroundColor = "#333";


// two ways to get body
const body = h1.parentNode.parentNode;
console.log(h1.parentNode);
body.style.color = "#ghghgh";
body.style.backgroundColor = "#666";

const body2 = document.body;
console.log("body2 => ");
console.log(body2);
// body.style.color = "red";
// body.style.backgroundColor = "yellow";


// you can put *querySelector* in the HTML also
const head = document.querySelector("head");
console.log("head => ");
console.log(head);

const title = head.querySelector("title")
console.log("title => ");
console.log(title);
console.log(title.childNodes);



// ------------------------------------------------------------
// if you don't want new-line or spaces as child nodes part
const container = document.querySelector(".container");
console.log("container.childNodes => ");
console.log(container.childNodes);
// only child no new-line/spaces, just elements
console.log("container.children => ");
console.log(container.children);
// ------------------------------------------------------------


