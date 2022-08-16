//step1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    //console.log('withdraw clicked');
    const withdrawField = document.getElementById('withdraw-field');

//step2: get the withdraw amount from the withdraw field 
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //console.log(newWithdrawAmount);

//step8: clear the input field
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)){
        alert('Please provide valid number');
        return;
    }

//step3: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    //console.log(previousWithdrawTotal);

//step6: get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //console.log(previousBalanceTotal);

//validation for withdrawing more than your balance
    if(newWithdrawAmount > previousBalanceTotal){
        alert('You can not withdraw more than your balance amount');
        return;
    }


    //--------------step4-5: code age theke exicute kore felbe & withdraw money update kore felbe tai condition er niche dite hobe
    //step4: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    //step5: set total withdraw amount 
    withdrawTotalElement.innerText = currentWithdrawTotal;

    //step7: calculate new balance total and set the balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});


