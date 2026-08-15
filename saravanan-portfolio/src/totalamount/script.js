let amount = document.getElementById("amount");
let tipPercentage = document.getElementById("tipPercentage");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let btn = document.getElementById("btn");



btn.onclick = function() {
    let userAmount = amount.value;
    let userTip = tipPercentage.value;

    let tipAmountFromUser = (userTip / 100) * userAmount;
    let totalAmountOfUser = parseInt(userAmount) + tipAmountFromUser;

    tipAmount.textContent = tipAmountFromUser;
    totalAmount.textContent = totalAmountOfUser;
}

