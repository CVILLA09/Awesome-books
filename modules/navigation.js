// Function to handle navigation
const handleNavigation = (event) => {
  event.preventDefault();
  const targetSection = event.target.dataset.section;
  const sections = document.querySelectorAll('.main-container, .second-container, .contact-info');

  sections.forEach((section) => {
    section.classList.add('hidden');
    if (section.id === targetSection) {
      section.classList.remove('hidden');
    }
  });

  // Remove active class from all nav links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach((link) => {
    link.classList.remove('active');
    link.style.color = 'inherit'; // Reset color to default
  });

  // Add active class to the clicked nav link
  event.target.classList.add('active');
  event.target.style.color = 'blue'; // Change color to blue
};

export { handleNavigation };
console.log('Navigation module loaded');