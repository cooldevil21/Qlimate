// script.js

// DOM elements
const celsiusElem = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");

// Event listener for page load
window.addEventListener("load", () => {
  degree.value = "";
  celsiusElem.innerHTML = "";
});

// Event listener for convert button click
convertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});

// Function to convert temperature to Celsius
function convertToCelsius() {
  const inputValue = degree.value;

  if (tempType.value === "fahrenheit") {
    const fahrenheitToCelsius = (inputValue - 32) * (5 / 9);
    celsiusElem.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;C`;
  } else if (tempType.value === "kelvin") {
    const kelvinToCelsius = inputValue - 273.15;
    celsiusElem.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;C`;
  }
}
