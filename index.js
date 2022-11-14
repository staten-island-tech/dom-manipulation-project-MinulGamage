const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  form: document.getElementById("mainForm"),
  Name: document.querySelector(`#Name`),
  DOB: document.querySelector(`#DOB`),
};

DOMSelectors.button.addEventListener("click", function () {
  let Name = DOMSelectors.Name.value;
  let DOB = DOMSelectors.DOB.value;
  DOMSelectors.form.insertAdjacentHTML("afterend", `<p>${Name}</p>`);

  DOMSelectors.Name.value = "";
  DOMSelectors.DOB.value = "";
});
console.log(DOMSelectors.Name.value);
console.log(DOMSelectors.DOB.value);
