// script.js
const textToSlide = document.getElementById('textToSlide');
const textArray = ['Not a programmer, but I like code 📜', 'Use money to buy success 💸', 'Everyone wants to spend money 💰', 'Want to live happily without relying on anyone 🖤'];

let currentIndex = 0;

function updateText() {
    textToSlide.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(updateText, 1100); // Change text every 3 seconds