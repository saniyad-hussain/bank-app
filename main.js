const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function(){
    const BankArea = document.getElementById("bank-site");
    BankArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});

const depositButton = document.getElementById("deposit-btn");
depositButton.addEventListener("click", function(){
    const depositAmount = document.getElementById("dep-amount").value;
    const depositAmountNumber = parseFloat(depositAmount);

    const newDeposit = document.getElementById("new-deposit").innerText;
    const newDepositNumber = parseFloat(newDeposit);
    const totalDeposit = depositAmountNumber + newDepositNumber;
    document.getElementById("new-deposit").innerText = totalDeposit;

    const newBalance = document.getElementById("new-balance").innerText;
    const newBalanceNumber = parseFloat(newBalance);
    const updatedBalance = depositAmountNumber + newBalanceNumber;
    document.getElementById("new-balance").innerText = updatedBalance;

});

