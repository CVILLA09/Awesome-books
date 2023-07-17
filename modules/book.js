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
    const index = books.findIndex((book) => book.title === title);
    if (index !== -1) {
      books.splice(index, 1);
      saveBooksToStorage(books);
    }
  }
}

export default Book;
