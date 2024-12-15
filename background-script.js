// Array of background image paths
const images = [
    "assets/background (1).jpg",
    "assets/background (2).jpg",
    "assets/background (3).jpg",
    "assets/background (4).jpg",
    "assets/background (5).jpg",
    "assets/background (6).jpg",
    "assets/background (7).jpg",
    "assets/background (8).jpg",
    "assets/background (9).jpg",
    "assets/background (10).jpg",
    "assets/background (11).jpg",
    "assets/background (12).jpg",
    "assets/background (13).jpg",
    "assets/background (14).jpg",
    "assets/background (15).jpg",
    "assets/background (16).jpg",
    "assets/background (17).jpg",
    "assets/background (18).jpg",
    "assets/background (19).jpg",
    "assets/background (20).jpg",
    "assets/background (21).jpg"
];

// Get the background div
const background = document.getElementById('background');

// Function to change the background
let currentIndex = 0;
function changeBackground() {
    background.style.backgroundImage = `url('${images[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % images.length; // Loop through images
}

// Change background every 1 minute (60,000 ms)
changeBackground();
setInterval(changeBackground, 60000);
