let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  alert("heloooooooooo");
});

let textBox = document.querySelector("#textBox");
let ptag = document.querySelector("#ptag");

textBox.addEventListener("keyup", () => {
  ptag.innerText = textBox.value;
});
