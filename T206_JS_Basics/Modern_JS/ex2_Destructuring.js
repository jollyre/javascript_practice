// //destructuring the array
// //unpack the mul values into single variable
// let marks = [55, 66, 77, 88];
// console.log(marks);

// let [html, css, BS, JS] = marks;
// console.log(html);
// console.log(css);
// console.log(BS);

// let names = ["Raja", "Ramesh", "Rammi", "Rani", "gggg", "ffff"];

// // let [value1, value2] = names;
// // console.log(value1);
// // console.log(value2);

// //rest op
// let [valu1, ...values] = names;
// console.log(valu1);
// console.log(values);

// let arr1 = [1, 2, 3];
// let arr2 = [5, 6, 7];
// let arr3 = arr1 + arr2;
// console.log(arr3);

// //spread op
// let arr4 = [...arr1, ...arr2];
// console.log(arr4);

// let a = [10, 20, 30, 40];
// let [char1, , , char4] = a;
// console.log(char1);
// console.log(char4);

// //destructuring with object
// let person = {
//   pid: 101,
//   pname: "yoyo",

//   jobDetails: {
//     jobId: "TT123",
//     jobRole: "Java Developer",
//     location: "Pune",
//   },
// };

// console.log(person);
// console.log(person.pid);

// let { pid, pname, jobDetails } = person;

// console.log(pid);

// console.log(pname);
// console.log(jobDetails);

//rest op
//always come on left side of =
let marks = [98, 95, 96, 95, 92];
let [java, sql, ...rest_of_subjects] = marks;
console.log(java); //98
console.log(sql); //95
console.log(rest_of_subjects); //[ 96, 95, 92 ]

let employee = { name: "amit", age: 25, salary: 25000 };
let { name, ...rest_of_details } = employee;
console.log(name); //amit
console.log(rest_of_details); //{ age: 25, salary: 25000 }

//spread op
console.log("=======================");
let arr1 = [22, 33, 44];
let arr2 = arr1;
console.log(arr1);
console.log(arr2);
let arr3 = [...arr1];
console.log(arr3);

//merging the array
let one = [22, 33, 44];
let two = [101, 33, 44];
let merge = [...one, ...two];
console.log(merge);

//spread with object
let student = { name: "raj", age: 25 };
let address = { city: "pune", pincode: 123456 };

let all_details_copy = { student, address };
console.log(all_details_copy);
//{student: { name: 'raj', age: 25 },address: { city: 'pune', pincode: 123456 }}
let all_details = { ...student, ...address };
console.log(all_details);
//{ name: 'raj', age: 25, city: 'pune', pincode: 123456 }
