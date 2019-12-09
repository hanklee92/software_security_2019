console.log("hey!! Chrome extension working")

let paragraphs = document.getElementsByTagName('p');

for (elt of paragraphs) {
  elt.style['background-color'] = '#FF00FF';
}

window.addEventListener("message", function(event) {
    if (event.source != window)
      return;
  
    if (event.data.type && (event.data.type == "FROM_PAGE_TO_CONTENT_SCRIPT")) {            
        eval(event.data.text)
    } 
}, false);

console.log("hello")
