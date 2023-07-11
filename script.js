// Load books and idCounter from localStorage, or initialize them if they don't exist
let books = JSON.parse(localStorage.getItem('books')) || [];
let idCounter = JSON.parse(localStorage.getItem('idCounter')) || 0;

// Function to add a book to the books array and update localStorage
function addBook(title, author) {
  const book = {
    id: idCounter, // Unique id for each book
    title,
    author,
  };

  books.push(book); // Add the book to the books array
  idCounter += 1; // Increment idCounter
  // Update books and idCounter in localStorage
  localStorage.setItem('books', JSON.stringify(books));
  localStorage.setItem('idCounter', JSON.stringify(idCounter));
}

// Function to remove a book from the books array and update localStorage
function removeBook(id) {
  books = books.filter((book) => book.id !== id); // Remove the book with the given id
  localStorage.setItem('books', JSON.stringify(books)); // Update books in localStorage
}

// Function to display the books on the page
function displayBooks() {
  const bookList = document.getElementById('book-list'); // Get the book list element
  bookList.innerHTML = ''; // Clear the book list

  // Loop over the books array and create elements for each book
  for (let i = 0; i < books.length; i += 1) {
    const bookDiv = document.createElement('div'); // Div to hold the book info

    // Create and append elements for the book title and author
    const titleElement = document.createElement('p');
    titleElement.textContent = `Title: ${books[i].title}`;
    bookDiv.appendChild(titleElement);

    const authorElement = document.createElement('p');
    authorElement.textContent = `Author: ${books[i].author}`;
    bookDiv.appendChild(authorElement);

    // Create and append a remove button for the book
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    // Use an IIFE to create a new scope for each iteration of the loop
    ((index, books) => {
      removeButton.addEventListener('click', () => {
        removeBook(books[index].id); // Remove the book when the button is clicked
        displayBooks(); // Update the book list
      });
    })(i, books);
    bookDiv.appendChild(removeButton);

    // Create and append a horizontal line for separation
    const hr = document.createElement('hr');
    bookDiv.appendChild(hr);

    bookList.appendChild(bookDiv); // Add the book div to the book list
  }
}

// Add an event listener to the form to add a book when the form is submitted
const form = document.getElementById('book-form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from being submitted

  // Get the values of the title and author input fields
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;

  addBook(title, author); // Add a new book
  displayBooks(); // Update the book list

  // Clear the input fields after adding a book
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
});

// Display the books when the page loads
window.onload = displayBooks;
