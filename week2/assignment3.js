// ASSIGNMENT 2:
// -------------
// Student Performance Dashboard

// You are working on a college result analysis system.

// Test Data:
// const students = [
//   { id: 1, name: "Ravi", marks: 78 },
//   { id: 2, name: "Anjali", marks: 92 },
//   { id: 3, name: "Kiran", marks: 35 },
//   { id: 4, name: "Sneha", marks: 88 },
//   { id: 5, name: "Arjun", marks: 40 }
// ];

// Tasks:
//     1. filter() students who passed (marks ≥ 40)
//     2. map() to add a grade field
//               ≥90 → A
//               ≥75 → B
//               ≥60 → C
//               else → D

//    3. reduce() to calculate average marks
//    4. find() the student who scored 92
//    5. findIndex() of student "Kiran"

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

let r1=students.filter(function(elements){
    if(elements.marks>=40){
        return elements
    }
})
console.log(r1)  //1


let r2=students.map(function(elements){
    if(elements.marks>=90){
        return 'A'
    }
    else if(elements.marks>=75){
        return 'B'
    }
    else if(elements.marks>=60){
        return 'C'
    }
    else{
        return 'D'
    }
})
console.log(r2) //2


let r3=students.reduce(function(accumulator,elements){
    return accumulator+elements.marks
},0)
console.log(r3/students.length)  //3



let r4=students.find(function(elements){
    if(elements.marks===92){
        return elements
    }
})
console.log(r4) //4



let r5=students.findIndex(function(elements){
    if(elements.name==='Kiran'){
        return elements
    }
}) 
console.log(r5)   //5