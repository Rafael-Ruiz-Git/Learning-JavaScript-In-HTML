// 1. Selecting the first child (node) of the parent container using firstChild
let parentContainer = document.getElementById("parent");
let firstNode = parentContainer.firstChild; // This could be a text node, comment, or element

console.log("First child node of parentContainer:");
console.log(firstNode);
// Output: This may be a text node (e.g., space or new line)

// 2. Selecting the last child (node) using lastChild
let lastNode = parentContainer.lastChild;

console.log("Last child node of parentContainer:");
console.log(lastNode);
// Output: <span>This is a span (Element)</span> or another type of node

// 3. Selecting the first element child using firstElementChild
let firstElement = parentContainer.firstElementChild;

console.log("First element child of parentContainer:");
console.log(firstElement);
// Output: <div class="child">First Child (Element)</div>

// 4. Selecting the last element child using lastElementChild
let lastElement = parentContainer.lastElementChild;

console.log("Last element child of parentContainer:");
console.log(lastElement);
