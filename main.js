const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.getElementById("text"),
  form: document.getElementById("mainForm"),
  First: document.querySelector(`#First`),
  Last: document.querySelector(`#Last`),
  Remove: document.getElementById("Remove"),
  DOB: document.querySelector(`#DOB`),
};

const info = {
  firstname: DOMSelectors.First.value,
  lastname: DOMSelectors.Last.value,
  DOB: DOMSelectors.DOB.value,
};

function InputInformation() {}

function CardCreator() {
  DOMSelectors.form.insertAdjacentHTML(
    "afterend",

    `<div class="Card" id="Info"> 
        <p>First Name: ${info.firstname}, 
        Last Name: ${info.lastname}, 
        DOB: ${info.DOB}  
        <button type="button" id="removeBtn">Remove</button> </p> 
        </div>`
  );
}

function clearinput() {
  DOMSelectors.First.value = "";
  DOMSelectors.Last.value = "";
  DOMSelectors.DOB.value = "";
}

function RemoveButton() {
  const button = document.getElementById("removeBtn");
  document.querySelectorAll(".removeBtn");
  button.addEventListener("click", function removeCard(event) {
    const values = document.getElementById("Card");
    event.target.remove(values);
  });
}
