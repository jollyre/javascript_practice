let wishMsg1 = () => {
  let h2tag = document.querySelector("#msg");
  h2tag.innerText = "Good Morning";
  h2tag.style.backgroundColor = "yellow";
  h2tag.style.padding = "23px";
  h2tag.style.color = "red";
};

let wishMsg2 = () => {
  let h2tag = document.querySelector("#msg");
  h2tag.innerText = "Good Afternnon";
  h2tag.style.backgroundColor = "blue";
  h2tag.style.padding = "23px";
  h2tag.style.color = "red";
};

let wishMsg3 = () => {
  let h2tag = document.querySelector("#msg");
  h2tag.innerText = "Good Evening";
  h2tag.style.backgroundColor = "black";
  h2tag.style.padding = "23px";
  h2tag.style.color = "white";
};

let wishMsg4 = () => {
  let h2tag = document.querySelector("#msg");
  h2tag.innerText = "Good Night";
  h2tag.style.backgroundColor = "brown";
  h2tag.style.padding = "23px";
  h2tag.style.color = "red";
};

function printMsg(message, color) {
  let h2tag = document.querySelector("#msg");
  h2tag.innerText = message;
  h2tag.style.backgroundColor = color;
  h2tag.style.padding = "23px";
  h2tag.style.color = "red";
}
