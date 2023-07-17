/* global luxon */
// Function to display the date
const displayDate = () => {
  const now = luxon.DateTime.now();
  const dateElement = document.querySelector('#date');
  dateElement.textContent = `TIME: ${now.toLocaleString(luxon.DateTime.DATETIME_MED)}`;
};

export { displayDate };
