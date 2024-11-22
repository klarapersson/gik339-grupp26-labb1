const checkboxElement = document.getElementById("divStyle");
console.log(checkboxElement);

const textfieldCollection = document.getElementsByClassName("textfield");
console.log(textfieldCollection);

const buttonStyleElement = document.querySelector("#buttonStyle");
console.log(buttonStyleElement);

const emptyDivElement = document.querySelectorAll(".empty_div");
console.log(emptyDivElement);


function handleInputEvent(e) {
    console.log("Event target:", e.target);
}
function handleInputEvent(e){
    const target = e.target;
    console.log("test", target)
}

