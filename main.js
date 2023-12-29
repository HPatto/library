/*
A front-end library

Consider the following:
- Title
- Author
- Number of pages
- Read status
*/

const myLibrary = [];

function buildTextContent(content) {
    const idvContent = document.createElement('p');
    idvContent.textContent = content;
    return idvContent;
}

function buildBookContent(contentClass, contentString) {
    const contentElement = document.createElement('div');
    contentElement.classList.add(contentClass);
    contentElement.appendChild(buildTextContent(contentString));
    return contentElement;
}

function buildBookElements(libraryElement, bookObject) {
    const title = bookObject.title;
    const author = bookObject.author;
    const pageCount = bookObject.pages;
    const isRead = bookObject.read;

    let newBookElement = document.createElement('div');
    newBookElement.classList.add('book');

    newBookElement.appendChild(buildBookContent("book-title", title));
    newBookElement.appendChild(buildBookContent("book-author", author));
    newBookElement.appendChild(buildBookContent("book-pages", pageCount));
    newBookElement.appendChild(buildBookContent("book-read", isRead));

    libraryElement.appendChild(newBookElement); 
}

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
    
    // Get the elements we want
    const libraryElement = document.querySelector('.library');

    // Get currently stored books
    let numBooks = myLibrary.length;

    // For each book, create and build the necessary elements
    for (let i = 0; i < numBooks; i++) {
        buildBookElements(libraryElement, myLibrary[i]);

        // Create a title element
        /*
        <div class="book-title">
            <p>Harry Potter and the Prisoner of Azkerban</p>
        </div>
        */

        // Create an author element
        /*
        <div class="book-author">
            <p>Harry Potter and the Prisoner of Azkerban</p>
        </div>
        */

        // Create a pagecount element
        /*
        <div class="book-pages">
            <p>Harry Potter and the Prisoner of Azkerban</p>
        </div>
        */

        // Create a read boolean

        // Build the book element
        /*
        <div class="book">
        */

        // Add the book element to the library
    }

    // Display currently stored books

})