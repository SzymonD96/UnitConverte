
const converBtn = document.getElementById("converte-btn");
const numberInput = document.getElementById("number-input");

const displaySpace = document.getElementById("display-space");

const lengthCheck = document.getElementById("length-check");
const volumeCheck = document.getElementById("volume-check");
const massCheck = document.getElementById("mass-check");

let converLength = false;
let converVolume = false;
let converMass = false;

const conversionMatrix = [
    {
        name: "Length (Meeter/Feet)",
        conversionRate: 3.281
    },
    {
        name: "Volume (Liters/Gallons)",
        conversionRate: 0.264
    },
    {
        name: "Mass (Kilos/Pounds)",
        conversionRate: 2.204
    },
];

lengthCheck.addEventListener("click", function() {
    converLength = !converLength;
});
volumeCheck.addEventListener("click", function() {
    converVolume = !converVolume;
});
massCheck.addEventListener("click", function() {
    converMass = !converMass;
});

converBtn.addEventListener("click", function(){
    displaySpace.innerHTML = ""
    if(converLength) {
        convert(conversionMatrix[0])
    }
    if(converVolume) {
        convert(conversionMatrix[1])
    }
    if(converMass) {
        convert(conversionMatrix[2])
    }
 });

function convert(unit) {
    displaySpace.innerHTML += `
        <div class="converted-unite-display">
        <h2>${unit.name}</h2>
        <p id="length-display">${numberInput.value} meters = ${(numberInput.value * unit.conversionRate).toFixed(3)} feet | ${numberInput.value} feet = ${(numberInput.value * (1 / unit.conversionRate)).toFixed(3)} meters</p>
        </div>
    `;
}
