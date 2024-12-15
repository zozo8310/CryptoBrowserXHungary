document.addEventListener('DOMContentLoaded', () => {
    console.log('renderer.js loaded successfully');

    function toggleContent(sectionId) {
        const target = document.getElementById(sectionId);
        const contents = document.querySelectorAll('.content');

        if (target) {
            if (target.style.display === 'block') {
                target.style.display = 'none'; // Második kattintásra elrejti
            } else {
                contents.forEach(content => content.style.display = 'none');
                target.style.display = 'block';
            }
        } else {
            console.warn(`Section with ID '${sectionId}' not found`);
        }
    }

    window.toggleContent = toggleContent;

    // Google Search gomb működése
    window.openGoogleSearch = () => {
        console.log('Google Search button clicked');
        window.open('https://www.google.com', '_blank');
    };

    console.log('AI Manager initialized successfully.');
});
