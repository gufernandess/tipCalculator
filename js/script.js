var tipPercentage = null;

function catchTip(value) {
    tipPercentage = value;
}

const button = document.querySelector(".reset-button");

button.addEventListener("click", () => {

    if(button.innerHTML == "CALC") {
        const bill = document.getElementById("bill").value;
        const numberOfPeople = document.getElementById("people").value;

       var tipAmount = (bill * tipPercentage) / numberOfPeople;
       var total = (parseInt(bill) + (bill * tipPercentage)) / numberOfPeople;

       document.querySelectorAll(".value")[0].innerHTML = `$${tipAmount.toFixed(2)}`;
       document.querySelectorAll(".value")[1].innerHTML = `$${total.toFixed(2)}`;

       button.innerHTML = "RESET"

    } else {
        document.querySelectorAll(".value")[0].innerHTML = "$00.00";
        document.querySelectorAll(".value")[1].innerHTML = "$00.00";

        button.innerHTML = "CALC";
    }
    
});