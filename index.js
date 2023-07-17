import Book from './book.js';
import { saveBooksToStorage, retrieveBooksFromStorage } from './storage.js';
import { displayBooks } from './display.js';
import { handleNavigation } from './navigation.js';

// Declare booksCollection as an empty array
let books = retrieveBooksFromStorage();

document.addEventListener('DOMContentLoaded', () => {
  // Add event listeners to the navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', handleNavigation);
  });

  // Form submit event handler
  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleInput = document.querySelector('.title-tag');
    const authorInput = document.querySelector('.author-tag');

    const title = titleInput.value;
    const author = authorInput.value;

    const book = new Book(title, author);
    book.addBook(books);
    saveBooksToStorage(books);

    displayBooks(books);

    titleInput.value = '';
    authorInput.value = '';
  });

  // Initial display of books
  displayBooks(books);
});
