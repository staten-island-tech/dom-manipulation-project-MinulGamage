const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  box: document.getElementById("container-box"),
  input: document.querySelector("input"),
  input2: document.querySelector("input2"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("afterend", `<p>${input}</p>`);
  /*DOMSelectors.button.insertAdjacentHTML("afterend", `<p>${input}</p>`);*/
  DOMSelectors.input.value = "";
});
console.log(DOMSelectors.input.value);

DOMSelectors.button.addEventListener("click", function () {
  let input2 = DOMSelectors.input2.value2;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input2}</p>`);
  /*DOMSelectors.button.insertAdjacentHTML("afterend", `<p>${input}</p>`);*/
  DOMSelectors.input2.value = "";
});
