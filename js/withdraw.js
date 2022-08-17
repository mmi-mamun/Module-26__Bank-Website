// step:1
document.getElementById('withdraw-button').addEventListener('click', function () {

    // step:2
    const withdrawAmount = document.getElementById('withdraw-amount');
    withdrawBalanceString = withdrawAmount.value;
    const withdrawBalance = parseFloat(withdrawBalanceString);


    // step:3
    const withdrawTotal = document.getElementById('withdraw-total');
    const totalWithdrawString = withdrawTotal.innerText;
    const totalWithdraw = parseFloat(totalWithdrawString);

    // step:5
    const totalAmount = document.getElementById('totalBalance');
    const totalBalanceString = totalAmount.innerText;
    const totalBalance = parseFloat(totalBalanceString);

    // check fitness
    if (withdrawBalance > totalBalance) {
        alert('You have insufficient balance');
        withdrawAmount.value = '';
        return;
    }

    // step:4
    withdrawTotal.innerText = totalWithdraw + withdrawBalance;




    // step:6
    totalAmount.innerText = totalBalance - withdrawBalance;

    // step:7
    withdrawAmount.value = '';
})