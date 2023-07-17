import { saveBooksToStorage } from './storage.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Function to add a new book to the collection
  addBook(books) {
    books.push(this);
    saveBooksToStorage(books);
  }

  // Function to remove a book from the collection
  static removeBook(title, books) {
    const updatedBooks = books.filter((book) => book.title !== title);
    saveBooksToStorage(updatedBooks);
    return updatedBooks;
  }
}

export default Book;
console.log("Book module loaded");