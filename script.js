"use strict";

function books(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `The ${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

const bookOne = new books("Hobbit", "J.R.R. Tolien", 295, "not read yet");
console.log(bookOne.info());

let myLibrary = [];

function addBookToLibrary() {
  let title = prompt("Enter the title of the book:");
  let author = prompt("Enter the author of the book:");
  let pages = prompt("Enter the number of pages:");
  let read = prompt("Have you read this book? (yes/no)").toLowerCase() === "yes";

  let newBook = new books(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary();
console.log(myLibrary);
