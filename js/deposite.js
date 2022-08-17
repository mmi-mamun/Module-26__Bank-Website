document.getElementById('deposit-button').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const depositAmountString = depositField.value;
    const depositAmount = parseFloat(depositAmountString);
    console.log(depositAmount);

    const totalDeposit = document.getElementById('total-deposit');
    const depositeTotalString = totalDeposit.innerText;


    const depositeTotal = parseFloat(depositeTotalString);

    const currentDeposit = depositAmount + depositeTotal;

    totalDeposit.innerText = currentDeposit;


    const totalAmount = document.getElementById('totalBalance');
    const totalBalanceString = totalAmount.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    totalAmount.innerText = depositAmount + totalBalance;



    depositField.value = '';



})