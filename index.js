const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  form: document.getElementById("mainForm"),
  First: document.querySelector(`#First`),
  Last: document.querySelector(`#Last`),
  DOB: document.querySelector(`#DOB`),
  Remove: document.getElementById("Remove"),
};
console.log(DOMSelectors.Name);
console.log(DOMSelectors.DOB);
DOMSelectors.button.addEventListener("click", function () {
  let First = DOMSelectors.First.value;
  let Last = DOMSelectors.Last.value;
  let DOB = DOMSelectors.DOB.value;
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",
    `<p id=Value> First Name: ${First} Last Name: ${Last} DOB: ${DOB}  <button onclick="Remove()" type="button" id="Remove">Remove</button> </p> `
  );

  DOMSelectors.First.value = "";
  DOMSelectors.Last.value = "";
  DOMSelectors.DOB.value = "";
});

function Remove() {
  const element = document.getElementById("Value");
  element.remove();
}

e.preventDefault();
