// Function to save the books collection to localStorage
const saveBooksToStorage = (books) => {
  localStorage.setItem('books', JSON.stringify(books));
};

// Function to retrieve the books collection from localStorage
const retrieveBooksFromStorage = () => {
  const storedBooks = localStorage.getItem('books');
  return storedBooks ? JSON.parse(storedBooks) : [];
};

export { saveBooksToStorage, retrieveBooksFromStorage };
