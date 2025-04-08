let rootEle = document.querySelector("#root");
let btnEle = document.querySelector("#btn");

btnEle.addEventListener("click", () => {
  let h2tag = document.createElement("h2");
  h2tag.innerText = "Hello appending data to div tag";
  h2tag.style.color = "red";
  rootEle.appendChild(h2tag);
});

let student = {
  id: 101,
  name: "Raja",
  addrs: {
    pincode: 888999,
    city: "Thane",
  },
};

let rootEle1 = document.querySelector("#root1");
let btnEle1 = document.querySelector("#btn1");

btnEle1.addEventListener("click", () => {
  let h1tag1 = document.createElement("h1");
  let h1tag2 = document.createElement("h1");
  h1tag1.innerText = student.id;
  h1tag2.innerText = student.name;
  rootEle1.appendChild(h1tag1);
  rootEle1.appendChild(h1tag2);
});
