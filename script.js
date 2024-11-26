// Select all links in the head_links div
const links = document.querySelectorAll('.head_links a');

// Loop through links and add a click event listener to each
links.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        links.forEach(l => l.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
  });


  // Hamburger menu toggle
document.getElementById('hamburger').addEventListener('click', function() {
    const navbar = document.getElementById('head_links');
    navbar.classList.toggle('active'); // Toggle the active class on click
});