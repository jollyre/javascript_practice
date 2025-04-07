let emp = {
    empid: 1,
    empname: "hardik",
    empsalary: 100000,
    emps: function(){
        console.log(this.empid + "Salary credited");
    }
}
console.log(emp);   

let student = {
    id: 12,
    name: "Hardik",
    course: [
        {
            course1d:1,
            coursename: "Java Full Stack Developer",
            coursesal: 111000
        },
        {
            course1d:1,
            coursename: "Python Full Stock Developer",
            coursesal: 111000
        },
        {
            course1d:1,
            coursename: "Data Full Stack Developer",
            coursesal: 111000
        }
    ]
}
console.log(student);