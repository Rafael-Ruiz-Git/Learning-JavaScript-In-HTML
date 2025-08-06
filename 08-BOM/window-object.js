document.getElementById("btnOpen").addEventListener("click", function (){
  window.open("https://google.com", "_blank");
  console.log(window.document);
  console.log(window);
});




document.getElementById("btnShowProps").addEventListener("click", function (){
  alert(`
    ScreenWidth: ${window.screen.width}px
    ScreenHeight: ${window.screen.height}px
    ScreenavailWidth: ${window.screen.availWidth}px
    ScreenavailHeight: ${window.screen.availHeight}px
    Color Depth: ${window.screen.colorDepth}bits
    pixel Depth: ${window.screen.pixelDepth}bits
    
    `)
});
