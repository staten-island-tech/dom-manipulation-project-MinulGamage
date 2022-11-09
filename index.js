const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  box: document.getElementById("container-box"),
  input: document.querySelector("input"),
};

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p>${input}</p>`);
  /*DOMSelectors.button.insertAdjacentHTML("afterend", `<p>${input}</p>`);*/
  DOMSelectors.input.value = "";
});
