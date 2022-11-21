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
  const info = {
    firstname: DOMSelectors.First.value,
    lastname: DOMSelectors.Last.value,
    DOB: DOMSelectors.DOB.value,
  };

  const values = [{ First: "", Last: "", DOB: "" }];
  console.log(values);

  values.forEach((values) => console.log(values.First));
  values.forEach((values) => console.log(values.Last));
  values.forEach((values) => console.log(values.DOB));
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",

    `<p id=Remove> First Name: ${info.firstname}, Last Name: ${info.lastname}, DOB: ${info.DOB}  <button type="button" id="removeButton">Remove</button> </p> `
  );
  let button = document.getElementById("removeButton");
  button.addEventListener("click", function removeCard(event) {
    const element = document.getElementById("Remove");
    element.remove();
  });
});
//make object from values

DOMSelectors.button.addEventListener("click", function clearinput() {
  DOMSelectors.First.value = "";
  DOMSelectors.Last.value = "";
  DOMSelectors.DOB.value = "";
});
