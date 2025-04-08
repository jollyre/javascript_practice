//count APP
let textArea = document.querySelector("#textArea");
let textCount = document.querySelector("#textCount");

textArea.addEventListener("keyup", () => {
  contentLength = textArea.value.length;
  textCount.innerText = contentLength;
});
