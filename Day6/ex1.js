//spread op
let marks = [10,20,30,33,30];

console.log(marks); 
//rest op
let [html,css,js,bs] = marks;
console.log(html);
console.log(css);
console.log(bs);
let arr1 = [1,2,3];
let arr2= [2,3,4];

let a2 = [...arr1,...arr2];
console.log(a2);