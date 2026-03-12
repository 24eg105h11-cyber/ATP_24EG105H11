const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];
employees.splice(1,0,{eno:106,name:'liki',marks:[100,100,100]}) //1
console.log(employees)


for(let x in employees){                //2
if(employees[x].name==='Kiran'){
    employees.splice(x,1)
}
}
console.log(employees)


//3
employees[3].marks.splice(2,1,75)
console.log(employees)

// the call back function is a function that is passed as an argument to another function and is executed after some kind of event or condition is met.
// a methode can be called for a length of array times but a methode is called for one time only. so, we can use call back function to call a method for a length of array times.



