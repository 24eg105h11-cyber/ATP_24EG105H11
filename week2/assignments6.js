// ASSIGNMENT 5: 
// -------------
// Bank Transaction Analyzer

// You are building a bank statement summary.

// Test data:
// const transactions = [
//   { id: 1, type: "credit", amount: 5000 },
//   { id: 2, type: "debit", amount: 2000 },
//   { id: 3, type: "credit", amount: 10000 },
//   { id: 4, type: "debit", amount: 3000 }
// ];


// Tasks:
//     1. filter() all credit transactions
//     2. map() to extract only transaction amounts
//     3. reduce() to calculate final account balance
//     4. find() the first debit transaction
//     5. findIndex() of transaction with amount 10000

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

let r1=transactions.filter(function(elements){
    if(elements.type==='credit'){
        return elements
    }
})
console.log(r1)  //1


let r2=transactions.map(function(elements){
    return elements.amount
})
console.log(r2)   //2

let r3=transactions.reduce(function(accumulator,elements){
    return accumulator+elements.amount
},0)
console.log(r3)  //3


let r4=transactions.find(function(elements){
    if(elements.type==='debit'){
        return elements
    }
})
console.log(r4)  //4


let r5=transactions.findIndex(function(elements){
    if(elements.amount===10000){
        return elements
    }
})
console.log(r5)   //5