// Problem Statement: Library Book Management System
// -------------------------------------------------
// Objective : Create a Book class and use it to manage a collection of books in a library.

// Requirements:
//   Create a Book class with the following:

//   Properties:
//       title (string)
//       author (string)
//       pages (number)
//       isAvailable (boolean, default: true)


//   Methods:
//       borrow() - Marks the book as not available
//       returnBook() - Marks the book as available
//       getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
//       isLongBook() - Returns true if pages > 300, false otherwise




//   1. Create at least 5 book objects using the class:
//       Example: "Harry Potter", "1984", "The Hobbit", etc.


//   2. Perform the following operations:

//       i. Display info of all books
//       ii. Borrow 2 books and show their availability status
//       iii. Return 1 book and show updated status
//       iv. Count how many books are "long books" (more than 300 pages)
//       v. List all available books


class Book{
    title;
    pages;
    author;
    isAvailable;
    constructor(title,pages,author,isAvailable){
        this.title=title;
        this.pages=pages;
        this.author=author;
        this.isAvailable=isAvailable;
    }
    borrow(){
        if(!this.isAvailable){
            return 'Book is not Available';
        }
        return this.isAvailable;
    }
    getInfo(){
        return (this.title+this.pages+this.author+this.isAvailable);
    }
    returnBook(){
        return this.title,this.pages,this.author,this.isAvailable;
    }
    isLongBook(){
        if(this.pages>300){
            return 'true';
        }
        else{
            return 'false';
        }
    }
}
let s1=new Book('One Piece',1000,'Oda','false')
let s2=new Book('Naruto',2000,'Eshwar','true')
let s3=new Book('JJK',3000,'Rev','true')
let s4=new Book('tokyo revangers',4000,'Oda','thop')
console.log(s1.getInfo())
console.log(s1.borrow())
console.log(s1.borrow())
if(this.pages>300){
        console.log(isLongBook);
    }



