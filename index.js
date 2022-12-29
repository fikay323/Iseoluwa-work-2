// copyToClipboard("Hello, world!");
let copied = document.querySelector('.copied')

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log("Text copied to clipboard");
    copied.style.visibility = 'visible'
    setTimeout(() =>{
      copied.style.visibility = 'hidden'
    }, 1000)

  } catch (error) {
    console.error("Failed to copy text: ", error);
  }
}