document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const sections = document.querySelectorAll('.content-section');

    // Function to handle tab clicks
    function handleTabClick(event) {
        event.preventDefault();

        // Remove 'active' class from all tabs and content sections
        tabs.forEach(tab => tab.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));

        // Add 'active' class to the clicked tab
        this.classList.add('active');

        // Show the corresponding content section
        const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href
        document.getElementById(targetId).classList.add('active');
    }

    // Add click event listeners to all tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
    });

    // Optional: Activate the first tab by default
    if (tabs.length > 0) {
        tabs[0].click();
    }
});
