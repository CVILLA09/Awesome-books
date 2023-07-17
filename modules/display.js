import Book from './book.js';

// Function to display all books in the collection
const displayBooks = (books) => {
  const booksContainer = document.querySelector('.books-collection');
  booksContainer.innerHTML = '';

  books.forEach((book) => {
    const bookCard = document.createElement('div');
    const titleElement = document.createElement('p');
    titleElement.textContent = `"${book.title}" by`;
    bookCard.appendChild(titleElement);

    const authorElement = document.createElement('span');
    authorElement.textContent = ` ${book.author}`; // Notice the space before ${book.author}
    titleElement.appendChild(authorElement);

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
      Book.removeBook(book.title);
      bookCard.remove();
    });
    bookCard.appendChild(removeButton);

    booksContainer.appendChild(bookCard);
  });
};

export { displayBooks };
