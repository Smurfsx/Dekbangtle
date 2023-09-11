// script.js
const textToSlide = document.getElementById('textToSlide');
const textArray = ['Im not a programmer, but I like code 📜', 'Money is everything 💸', 'Rest in peace, see you in the next world "Pleng" 🤍🌷', 'I miss you fah 🤍'];

let currentIndex = 0;

function updateText() {
    textToSlide.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(updateText, 800); // Change text every 3 seconds