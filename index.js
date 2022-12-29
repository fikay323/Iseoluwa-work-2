// copyToClipboard("Hello, world!");

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
  } catch (error) {
    console.error("Failed to copy text: ", error);
  }
}

function copy(){
    var Url = document.getElementById("box");
    Url.value = window.location.href;
    Url.focus();
    Url.select();
    document.getElementById("custom-tooltip").style.display = "inline";
    document.execCommand("copy");
    setTimeout( function() {
        document.getElementById("custom-tooltip").style.display = "none";
    }, 1000);

};