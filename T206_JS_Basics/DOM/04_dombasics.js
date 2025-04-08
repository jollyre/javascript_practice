//DOM basics

console.log(window);

console.log(document);

console.log(document.head);
console.log(document.body);

console.log(document.nav);

// let navtag = document.getElementsByTagName(nav[0]);
// console.log(navtag);

let navtag2 = document.getElementById("one");
console.log(navtag2);

let navtag3 = document.getElementsByClassName("c");
console.log(navtag3);

let navtag4 = document.querySelector("#one");
console.log(navtag4);

let h3tag = document.querySelector("nav h3");
console.log(h3tag);
