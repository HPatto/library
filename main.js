/*
A front-end library

Consider the following:
- Title
- Author
- Number of pages
- Read status
*/

const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(bookObject) {
  // do stuff here
  myLibrary.push(bookObject);
}

const book1 = new Book("HP", "JK", 250, true);
const book2 = new Book("HP", "JK", 250, true);
const book3 = new Book("HP", "JK", 250, true);
const book4 = new Book("HP", "JK", 250, true);
const book5 = new Book("HP", "JK", 250, true);

addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
addBookToLibrary(book5);

this.document.addEventListener("DOMContentLoaded", function() {
    // Get currently stored books
    let numBooks = myLibrary.length;

    // For each book, create and build the necessary elements
    for (let i = 0; i < numBooks; i++) {
        
    }

    // Display currently stored books

})