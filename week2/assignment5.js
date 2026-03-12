// ASSIGNMENT 4: 
// ------------
// Movie Streaming Platform

// You are working on a movie recommendation system.

// Test data:
// const movies = [
//   { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
//   { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
//   { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
//   { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
// ];


// Tasks:
//     1. filter() only "Sci-Fi" movies
//     2. map() to return:
//             "Inception (8.8)"

//     3. reduce() to find average movie rating
//     4. find() movie "Joker"
//     5. findIndex() of "Avengers"


const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

let r1=movies.filter(function(elements){
    if(elements.genre==='Sci-Fi'){
        return elements
    }
})
console.log(r1)   //1


let r2=movies.map(function(elements){
    if(elements.title==='Inception'){
    return elements.title+elements.rating
    }
})
console.log(r2) //2


let r3=movies.reduce(function(accumulator,elements){
    return accumulator+elements.rating
},0)
console.log(r3/movies.length) //3


let r4=movies.find(function(elements){
    if(elements.title==='Joker'){
        return elements
    }
})
console.log(r4)  //4


let r5=movies.findIndex(function(elements){
    if(elements.title==='Avengers'){
        return elements
    }
})
console.log(r5)   //5


