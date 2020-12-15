const headerTag = document.querySelector("[data-target='header']");

const randomNumber = Math.floor(Math.random() * 7) + 1  

headerTag.classList.add(`bg_${randomNumber}`);
