const areaSelect = document.getElementById("area");
let areaValue = areaSelect.options[areaSelect.selectedIndex].value;
const rateSelect = document.getElementById("rate");
let rateValue = rateSelect.options[rateSelect.selectedIndex].value;
let rangeValue = document.getElementById("space").value;

let resultDiv = document.getElementById("calculator-result");

let total;

function detectAreaChange(selectedOption) {
    areaValue = selectedOption.value; 
    console.log(areaValue)
    return areaValue;
}

function detectRateChange(selectedOption) {
    rateValue = selectedOption.value; 
    console.log(rateValue)
    return rateValue;
}

function detectRangeChange(selectedOption) {
    rangeNumValue = selectedOption.value; 
    if (rangeNumValue > 150) {
        rangeNumValue = 50000;
    } else {
        rangeNumValue = 10000;
    }
    return rangeNumValue; 
}

function calculatePrice () {
    total = Number(areaValue) + Number(rateValue) + Number(rangeNumValue);
    resultDiv.innerText = total; 
}

const btn = document.getElementById("calculator-btn").addEventListener("click", (e) => {
    calculatePrice();
})

