// scripts.js

// Display an alert when the page loads
window.onload = function() {
    alert("Welcome to My Website!");
};

// Change the text of the heading when it is clicked
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.querySelector('h1');
    heading.addEventListener('click', function() {
        heading.textContent = "You clicked the heading!";
    });
});
