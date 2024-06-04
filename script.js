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
  let read =
    prompt("Have you read this book? (yes/no)").toLowerCase();

  let newBook = new books(title, author, pages, read);
  myLibrary.push(newBook);
  displayLibrary();
}

addBookToLibrary();

function displayLibrary() {
  const titleDiv = document.getElementById("title");
  const authorDiv = document.getElementById("author");
  const pagesDiv = document.getElementById("pages");
  const readDiv = document.getElementById("read");

  myLibrary.forEach((books) => {
    const titles = document.createElement("p");
    const authors = document.createElement("p");
    const pages = document.createElement("p");
    const reads = document.createElement("p");

    titles.textContent = books.title;
    authors.textContent = books.author;
    pages.textContent = books.pages;
    reads.textContent = books.read;

    titleDiv.appendChild(titles);
    authorDiv.appendChild(authors);
    pagesDiv.appendChild(pages);
    readDiv.appendChild(reads);
  });
}
