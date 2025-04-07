//function in Javascript

//noraml fun

function fun1() {
    console.log("fun1 is execute");
}

fun1();

function greet() {
    console.log("Good Morning");

}

greet();

//expression function 

let callWish = function wishMe() {
    console.log("Good Evening Raja");
    return "hello"
}

console.log(callWish());

let callAdd = function add() {
    return 10 + 20;
}

console.log(callAdd());


//Anonymous function


let callAdd1 = function () {
    return 10 + 90;
}

console.log(callAdd1());

//Arrow Function
let callAdd2 =  () => {
    return 100 + 90;
}

console.log(callAdd2());

//function with return
//function with parameter

function calculateOp(a,b){
    return a*b;
}

console.log(calculateOp(2,3));

console.log(calculateOp());

function printMsg(name = "Aa"){
    console.log("your name is ::", `${name}`);    
   
}

printMsg("Aachal");
printMsg();


function printNumbers(start = 1 , end = 10){
    let result = ''
    for(i=start; i<=end ; i++){
       //Template String
      result += `${i} =>  `        
    }
    console.log(result);
    
}


printNumbers(1, 100);
printNumbers();
 