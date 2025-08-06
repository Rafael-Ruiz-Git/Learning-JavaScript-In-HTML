
let paragraph = document.getElementById("paragraph");


let parentUsingNode = paragraph.parentNode;
console.log("parentNode of paragraph:", parentUsingNode);


// 3. Using parentElement to get the parent of the 'paragraph'
let parentUsingElement = paragraph.parentElement;
console.log("parentElement of paragraph:", parentUsingElement);


// 4. Selecting the text node within the 'p' element
let textNode = document.getElementById("textNodeExample").firstChild;
console.log("Text Node content:", textNode.textContent);

// 5. Getting the parent node of a text node
let parentOfTextNodeUsingNode = textNode.parentNode;
console.log("parentNode of text node:", parentOfTextNodeUsingNode);
// Output: <p id="textNodeExample">Some text here.</p>
// Explanation: parentNode returns the parent, which is the <p> element even for text nodes.

// 6. Getting the parent element of a text node
let parentOfTextNodeUsingElement = textNode.parentElement;
console.log("parentElement of text node:", parentOfTextNodeUsingElement);


// 7. Example where parentNode returns a document, but parentElement returns null
let htmlElement = document.documentElement; // Refers to the <html> tag
console.log("parentNode of html:", htmlElement.parentNode); // Output: #document
console.log("parentElement of html:", htmlElement.parentElement); // Output: null
// Explanation: parentNode returns the document node, but parentElement returns null because the parent isn't an element.

// Get the div that directly follows the target comment
let divElement = document.getElementById("textNodeExample").parentNode;
// Access the comment node directly preceding the div
let commentNode = divElement.previousSibling;


while (commentNode && commentNode.nodeType !== Node.COMMENT_NODE) {
  commentNode = commentNode.previousSibling;
}

console.log(commentNode);
console.log(commentNode.data);