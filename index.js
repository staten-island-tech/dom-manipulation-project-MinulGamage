const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  form: document.getElementById("mainForm"),
  First: document.querySelector(`#First`),
  Last: document.querySelector(`#Last`),
  DOB: document.querySelector(`#DOB`),
  Remove: document.getElementById("Remove"),
  value: document.getElementById("value"),
};
console.log(DOMSelectors.Name);
console.log(DOMSelectors.DOB);
DOMSelectors.button.addEventListener("click", function () {
  const First = DOMSelectors.First.value;
  const Last = DOMSelectors.Last.value;
  const DOB = DOMSelectors.DOB.value;
  //make object from values
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",
    `<p id=value> First Name: ${First}, Last Name: ${Last}, DOB: ${DOB}  <button type="button" id="Remove">Remove</button> </p> `
  );

  DOMSelectors.First.value = "";
  DOMSelectors.Last.value = "";
  DOMSelectors.DOB.value = "";
});

const Values = document.querySelectorAll("remove");
