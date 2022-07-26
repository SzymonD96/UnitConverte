
const converBtn = document.getElementById("converte-btn");
const numberInput = document.getElementById("number-input");
const lengthDisplay = document.getElementById("length-display");
const volumeDisplay = document.getElementById("volume-display");
const massDisplay = document.getElementById("mass-display");

converBtn.addEventListener("click", function(){ converUnit((numberInput.value)) });

function converUnit(number) {
    
    let lenghtFeet = (number * 3.281).toFixed(3);
    let lenghtMeter = (number / 3.281).toFixed(3);
    let volumeGallons = (number * 0.264).toFixed(3);
    let volumeLiters = (number / 0.264).toFixed(3);
    let massPounds = (number * 2.204).toFixed(3);
    let massKilos = (number / 2.204).toFixed(3);

    lengthDisplay.textContent = `
        ${numberInput.value} meters = ${lenghtFeet} feet | ${numberInput.value} feet = ${lenghtMeter} meters
    `;

    volumeDisplay.textContent = `
        ${numberInput.value} liters = ${volumeGallons} gallons | ${numberInput.value} gallons = ${volumeLiters} liters
    `;

    massDisplay.textContent = `
    ${numberInput.value} kilos = ${massPounds} pounds | ${numberInput.value} pounds = ${massKilos} kilos
    `;

    
}   
