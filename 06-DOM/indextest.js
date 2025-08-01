let originalLink = document.getElementById("learnMoreLink").getAttribute("href");

document.getElementById('learnMoreLink').setAttribute('href', 'https://www.example.com/new');



const infoBox = document.querySelector('.info-box');
const originalClass = infoBox.getAttribute('class');
infoBox.setAttribute('class', originalClass + ' highlighted');