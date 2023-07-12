/* eslint max-classes-per-file: ["error", 2] */

// Book class to represent individual books
class Book {
  constructor(id, title, author) {
    this.id = id;
    this.title = title;
    this.author = author;
  }
}

// BooksCollection class to manage the collection of books
class BooksCollection {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.idCounter = JSON.parse(localStorage.getItem('idCounter')) || 0;
  }

  // Method to add a book to the books array and update localStorage
  addBook(title, author) {
    const book = new Book(this.idCounter, title, author);
    this.books.push(book);
    this.idCounter += 1;
    localStorage.setItem('books', JSON.stringify(this.books));
    localStorage.setItem('idCounter', JSON.stringify(this.idCounter));
  }

  // Method to remove a book from the books array and update localStorage
  removeBook(id) {
    this.books = this.books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // Method to display the books on the page
  displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    this.books.forEach((book) => {
      const bookDiv = document.createElement('div');
      const titleElement = document.createElement('p');
      titleElement.textContent = `"${book.title}" by`;
      bookDiv.appendChild(titleElement);

      const authorElement = document.createElement('span');
      authorElement.textContent = ` ${book.author}`; // Notice the space before ${book.author}
      titleElement.appendChild(authorElement);

      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        this.removeBook(book.id);
        this.displayBooks();
      });
      bookDiv.appendChild(removeButton);

      bookList.appendChild(bookDiv);
    });
  }
}

// Instantiate BooksCollection
const myBooks = new BooksCollection();

// Add an event listener to the form to add a book when the form is submitted
const form = document.getElementById('book-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  myBooks.addBook(title, author);
  myBooks.displayBooks();

  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

// Display the books when the page loads
window.onload = () => myBooks.displayBooks();
