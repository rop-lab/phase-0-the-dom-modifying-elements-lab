
// Example: Remove an element with id 'main'
const mainElement = document.getElementById('main');
mainElement.parentNode.removeChild(mainElement);

// Create a new h1 element
const newHeader = document.createElement('h1');
newHeader.textContent = 'YOUR-NAME is the champion';  // Replace YOUR-NAME with your actual name

// Set the id attribute of the newHeader to 'victory'
newHeader.id = 'victory';

// Append the newHeader to the document body or another existing element
document.body.appendChild(newHeader);


