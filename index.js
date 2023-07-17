import Book from './modules/book.js';
import { saveBooksToStorage, retrieveBooksFromStorage } from './modules/storage.js';
import displayBooks from './modules/display.js';
import handleNavigation from './modules/navigation.js';
import { displayDate } from './modules/date.js';

document.addEventListener('DOMContentLoaded', () => {
  // Declare booksCollection as an empty array
  const books = retrieveBooksFromStorage();

  // Function to display the date
  displayDate();

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

  // Add event listener to update the display whenever localStorage changes
  window.addEventListener('storage', () => {
    displayBooks(retrieveBooksFromStorage());
  });
});
