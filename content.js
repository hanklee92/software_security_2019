console.log("hey!! Chrome extension working")

let paragraphs = document.getElementsByTagName('p');

for (elt of paragraphs) {
  elt.style['background-color'] = '#FF00FF';
}

// The ID of the extension we want to talk to.
var editorExtensionId = "iafdhjkhomfodbccifgginllanlfphof";

window.addEventListener("message", function(event) {
    // We only accept messages from this window to itself [i.e. not from any iframes]
    if (event.source != window)
      return;
  
    if (event.data.type && (event.data.type == "FROM_PAGE_TO_CONTENT_SCRIPT")) {    
        
        this.console.log(event.data.text)
        eval(event.data.text)
        //chrome.runtime.sendMessage(event.data); // broadcasts it to rest of extension, or could just broadcast event.data.payload...
    } // else ignore messages seemingly not sent to yourself
}, false);

console.log("hello")
