// script.js
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.content-section');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Add active class to clicked tab
            tab.classList.add('active');
            // Show the associated section
            document.querySelector(tab.getAttribute('href')).style.display = 'block';
        });
    });
});
