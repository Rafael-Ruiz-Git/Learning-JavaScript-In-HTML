function updateImageAttributes() {
  let imageElement = document.getElementById("exampleImage");

  let imSrc = imageElement.getAttribute("src");
  let imAlt = imageElement.getAttribute("alt");



console.log(imSrc);
console.log(imAlt);

imageElement.setAttribute("src","/06-DOM/images/small.jpg");
imageElement.setAttribute("alt","updated Placeholder Image");

};