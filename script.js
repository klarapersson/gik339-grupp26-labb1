const checkboxElement = document.getElementById("divStyle");
console.log(checkboxElement);

const textfieldCollection = document.getElementsByClassName("textfield");
console.log(textfieldCollection);

const buttonStyleElement = document.querySelector("#buttonStyle");
console.log(buttonStyleElement);

const emptyDivElement = document.querySelectorAll(".empty_div");
console.log(emptyDivElement);

function handleInputEvent(e) {
  console.log("Event target:", e);
}
function handleInputEvent(e) {
  const target = e.target;
  console.log("test", target);
  const targetName = e.target.name;

  if (targetName === "content") {
    const inputValue = e.target.value;
    const outputDiv = document.getElementById("outputDiv");
    outputDiv.innerHTML = inputValue;
  }
}
