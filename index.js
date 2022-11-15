const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  form: document.getElementById("mainForm"),
  Name: document.querySelector(`#Name`),
  DOB: document.querySelector(`#DOB`),
  Remove: document.getElementById("Remove"),
};
console.log(DOMSelectors.Name);
console.log(DOMSelectors.DOB);
DOMSelectors.button.addEventListener("click", function () {
  let Name = DOMSelectors.Name.value;
  let DOB = DOMSelectors.DOB.value;
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",
    `<p>${Name} ${DOB}</p> <button type="button" id="Remove">Remove</button>`
  );

  DOMSelectors.Name.value = "";
  DOMSelectors.DOB.value = "";
});

DOMSelectors.Remove.addEventListener("click", function () {});
console.log(Name);
console.log(DOB);

e.preventDefault();
