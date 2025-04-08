
//let var const
var a = 10;
let b = 20;
const c = 3.14;

console.log(a);
console.log(b);
console.log(c);

a = 50
console.log(a);
b = 200;
console.log(b);
//c = 23;
//console.log(c);

{
    var vv = "Raja"; //Global var
    let l = 33;  //local var

}
console.log(vv);
//console.log(l);  //cant access it outside the block


//redeclaration of var
var v1 = 10;
var v1 = "RRR";

console.log(v1);


//redeclaration not possible in let
let l1 = 10;
//let l1 = "AAAA";    //Identifier 'l1' has already been declared (at 

console.log(l1);

//variable Hosting

//------var
console.log(v11);
var v11 = "Rajesh";  //no error

//-----let
//console.log(l11);  //ReferenceError: Cannot access 'l11' before initialization
let l11 = "Rajesh";

var sno = 123;
function myFun() {
    console.log("Inside myFun");  //var has function scope, so sno is also limited to myFun().
    let sname = "Ramesh";
    var sno = 23;
    console.log(sno);
    console.log(sname);

}
myFun();
//console.log(sname);
console.log(sno);











