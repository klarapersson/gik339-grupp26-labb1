// Uppgift 4

// Hämta checkbox-element med id "divStyle" och skriva ut det i konsolen
const checkboxElement = document.getElementById("divStyle");
console.log(checkboxElement);

// Hämta alla textfält med klassen "textfield" och skriva ut det i konsolen
const textfieldCollection = document.getElementsByClassName("textfield");
console.log(textfieldCollection);

// Hämta knappen med id "buttonStyle" och skriva ut det i konsolen
const buttonStyleElement = document.querySelector("#buttonStyle button");
console.log(buttonStyleElement);

// Hämta alla div-element med klassen "empty_div" och skriva ut det i konsolen
const emptyDivElement = document.querySelectorAll(".empty_div");
console.log(emptyDivElement);

// Uppgift 5
function handleInputEvent(e) {
  // Skriver ut vilken input som triggat eventet
  console.log(e.target);

  // Hämtar name-attributet från det element som triggat eventet
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

// Loopa igenom varje input-element och lägg till eventlyssnare
for (let i = 0; i < textfieldCollection.length; i++) {
  const input = textfieldCollection[i];
  
  // Lägg till en eventlyssnare som lyssnar på "input"-händelsen
  input.addEventListener("input", handleInputEvent);
  
  // Lägg till en eventlyssnare som lyssnar på "blur"-händelsen
  input.addEventListener("blur", handleInputEvent);
}

// Uppgift 6
checkboxElement.addEventListener("change", (e) => {
  e.preventDefault(); // Förhindra standardbeteende om det behövs

  // Hämta färgvärdet från inputfältet
  const colorValue = settings.color.value;

  // Ändra bakgrundsfärgen på det tomma div-elementet
  emptyDivElement.forEach((div) => {
    div.style.backgroundColor = colorValue || ""; // Sätt bakgrundsfärgen till den valda färgen eller en tom färg
  });
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
