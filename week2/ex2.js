// 💡 Exercise 2: Update User Object

// Goal: Learn object cloning & adding new property

// You are given:
        
//         let user = {
//             name: "Ravi",
//             city: "Hyderabad"
//         };



// Tasks

//         -> Create a new object updatedUser
        
//         -> Copy all properties from user
        
//         -> Add a new property age: 25
        
//         -> Print both objects



// ✅ Expected Output
//         { name: "Ravi", city: "Hyderabad" }
//         { name: "Ravi", city: "Hyderabad", age: 25 }

// 👉 Original object should remain unchanged.


let user={
    name:'ravi',city:'hyd'
}
let updatedUser={...user,age:25}
console.log(user)
console.log(updatedUser)
// when we use to copy variable ... used to copy .but when we wnat to use this as an parameter it is used to collecting into an array.
function findSum(...a){
    console.log(a);
}
findSum(10,20,30,40)
// we cannot give any other parameter after rest parameter.(...a,b) wrong 
//write function that takes any no of args and return sum.
const findSumm=(...numbers)=>{
    return numbers.reduce((sum,el)=>sum+el)
}
let result=findSumm(10,20,30,40)
console.log(result)  //2

const findSummm=function(...numbers){
    return numbers.reduce(function(acc,el){
        return acc+el
    })
}
let r1=findSummm(10,20,30)
console.log(r1) //3


let arr=[10,20,30]
let [a,b,c]=arr
console.log(a)


let emp={
    eid:100,
    company:'TCS',
    address:{
        city:'hyd'
    }
}
let {eid,company,address:{city}}=emp
console.log(eid,company,city)

