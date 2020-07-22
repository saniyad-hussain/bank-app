const loginButton = document.getElementById("login-btn");
loginButton.addEventListener("click", function(){
    const BankArea = document.getElementById("bank-site");
    BankArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
});