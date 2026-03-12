// Assignment 1: Daily Temperature Analyzer
// ----------------------------------------
// Scenario : You are analyzing daily temperatures recorded by a weather app.

// Test data:
// const temperatures = [32, 35, 28, 40, 38, 30, 42];

// Tasks:
//     1. filter() temperatures above 35
//     2. map() to convert all temperatures from Celsius → Fahrenheit
//     3. reduce() to calculate average temperature
//     4. find() first temperature above 40
//     5. findIndex() of temperature 28
const temperatures=[32,35,28,40,38,30,42]
let e1=temperatures.filter(function(elements){
    if(elements>35){
        return elements;
    }
})
console.log(e1) //1


let e2=temperatures.map(function(elements){
    return (elements*(9/5) +32);
})
console.log(e2) //2


let e3=temperatures.reduce(function(accumulator,elements){
    return (accumulator+elements)
})
console.log(e3/temperatures.length) //3


let e4=temperatures.find(function(elements){
    if(elements>40){
        return elements;
    }
})
console.log(e4) //4


let e5=temperatures.findIndex(function(elements){
    if(elements===28){
        return elements;
    }
})
console.log(e5) //5 


