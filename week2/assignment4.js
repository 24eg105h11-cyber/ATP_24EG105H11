// ASSIGNMENT 3:
// -------------
// Employee Payroll Processor

// You are building a salary processing module in a company HR app.

// Test data:
// const employees = [
//   { id: 201, name: "Amit", salary: 45000, department: "IT" },
//   { id: 202, name: "Neha", salary: 60000, department: "HR" },
//   { id: 203, name: "Rahul", salary: 75000, department: "IT" },
//   { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
// ];

// Tasks:
//     1. filter() employees from IT department
//     2. map() to add:
//             netSalary = salary + 10% bonus

//     3. reduce() to calculate total salary payout
//     4. find() employee with salary 30000
//     5. findIndex() of employee "Neha"


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];


let r1=employees.filter(function(elements){
  if(elements.department==='IT'){
    return elements
  }
})
console.log(r1)  //1


let r2=employees.map(function(elements){
   return elements.salary+((elements.salary)*0.1)
  })
  console.log(r2) //2


let r3=employees.reduce(function(accumulator,elements){
  return accumulator+elements.salary
},0)
console.log(r3) //3


let r4=employees.find(function(elements){
  if(elements.salary===30000){
    return elements
  }
})
console.log(r4)  //4


let r5=employees.findIndex(function(elements){
  if(elements.name==='Neha'){
    return elements
  }
})
console.log(r5)     //5

