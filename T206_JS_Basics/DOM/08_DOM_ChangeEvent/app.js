let selectLang = document.querySelector("#selectLang");
let h2tag = document.querySelector("#addLang");

selectLang.addEventListener("change", () => {
  let newLang = selectLang.value;
  h2tag.innerText = newLang;
});
