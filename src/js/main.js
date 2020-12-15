const headerTag = document.querySelector("[data-selector='header']"); // Grab header element // Note the attribute selector
const randomNumber = Math.floor(Math.random() * 7) + 1  // Generate a random number between 1 and 7

// headerTag.setAttribute("data-target",`bg_${randomNumber}`); // Onload, add a random number attribute to the background
headerTag.setAttribute("data-target",`bg_1`); // Onload, add a random number attribute to the background
