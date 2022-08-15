//step1: add eventListener/click handler to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
    //console.log('deposit button clicked');
//step2: get the deposit amount from the deposit input field
//for input field always use .value to get the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    //console.log(depositAmount);
//step3: get the curent deposit total amount
//for non-input field use .innerText to get the text || for input field(input, textarea) use .value to the the value
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    //console.log(previousdepositTotalString);
    const previousDepositTotal = parseFloat(previousDepositTotalString);

//step4: add numbers to the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    //set the deposit total element
    depositTotalElement.innerText = currentDepositTotal;

//step5: get balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

//step6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total element
    balanceTotalElement.innerText = currentBalanceTotal;


//step7: clear the deposit field
    depositField.value = '';
});