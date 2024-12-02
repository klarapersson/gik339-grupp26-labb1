// Uppgift 4

// Hämta checkbox-element med id "divStyle" och skriva ut det i konsolen
const checkboxElement = document.getElementById("divStyle");
console.log(checkboxElement);

// Hämta alla textfält med klassen "textfield" och skriva ut det i konsolen
const textfieldCollection = document.getElementsByClassName("textfield");
console.log(textfieldCollection);

// Hämta knappen med id "buttonStyle" och skriva ut det i konsolen
const buttonStyleElement = document.querySelector("#buttonStyle");
console.log(buttonStyleElement);

// Hämta alla div-element med klassen "empty_div" och skriva ut det i konsolen
const emptyDivElement = document.querySelectorAll(".empty_div");
console.log(emptyDivElement);



// Uppgift 5
function handleInputEvent(e) {
  // Skriver ut vilken input som triggat eventet
  console.log(e.target);

  // Hämtar name-attributet
  const inputName = e.target.name;

  // Kollar om name-attributet är "content"
  if (inputName === "content") {
    // Hämtar värdet från inputfältet
    const contentValue = e.target.value;

    // Hämtar div-elementet där vi ska skriva ut värdet
    const outputDiv = emptyDivElement[0];

    // Sätter innerHTML på div-elementet till värdet från inputfältet
    outputDiv.innerHTML = contentValue;
  }
}

// Hämta alla input-element med klassen "textfield"
const inputs = document.querySelectorAll(".textfield");
// Loopa igenom varje input-element och lägg till eventlyssnare
inputs.forEach((input) => {
  // Lägg till en eventlyssnare som lyssnar på "input"- händelse
  input.addEventListener("input", handleInputEvent);
  // Lägg till en eventlyssnare som lyssnar på "blur" händelsen
  input.addEventListener("blur", handleInputEvent);
});

// Uppgift 6
checkboxElement.addEventListener("change", (e) => {
  e.preventDefault(); // Förhindra att formuläret skickas

  // Hämtar referensen till färgfältet från formuläret
  const colorInput = settings.color;

  // Kolla om checkboxen är markerad
  if (checkboxElement.checked) {
    // Om checkboxen är markerad, hämta färgvärdet från inputfältet
    const colorValue = colorInput.value;

    // Ändra bakgrundsfärgen på det första div-elementet
    emptyDivElement[0].style.backgroundColor = colorValue;
  } else {
    // Om checkboxen inte är markerad, återställ bakgrundsfärgen
    emptyDivElement[0].style.backgroundColor = ""; // återställ till standardfärg
  }
});


buttonStyleElement.addEventListener("click", (e) => {
  e.preventDefault();

  // Uppdatera NodeList varje gång eftersom den är statisk, detta säkerställer att den innehåller aktuella element
  const emptyDivElement = document.querySelectorAll(".empty_div");

  // Kollar om det finns några div-element med klassen "empty_div"
  if (emptyDivElement.length > 0) {
    // itererar igenom alla div-element och tar bort dem
    emptyDivElement.forEach((divElement) => {
      divElement.remove(); // tar bort det aktuella div-element från DOM
      console.log("Div-element har tagits bort");
    });
  } else {
    // Om det finns några element att ta bort, skriv ut ett meddelande
    console.log("Div-elementet är redan borttaget");
  }
});
 