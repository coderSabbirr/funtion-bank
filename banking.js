
function getInputValue (getId){
    const inputFiled =document.getElementById(getId);
    const inputTextValue = inputFiled.value;
    const amountValue =parseFloat(inputTextValue);
    inputFiled.value='';
    return amountValue;
}

function inputValue(getInputeId,amount){
    const totalFiled = document.getElementById(getInputeId);
    const valueText = totalFiled.innerText;
    const previousAmount = parseFloat(valueText);
    totalFiled.innerText =  previousAmount + amount;
}
function name(params) {
    
}

document.getElementById('deposit-button').addEventListener('click',function(){

    const newDepositAmount =getInputValue('deposit-input');

    inputValue('total-diposit',newDepositAmount);

    inputValue('total-balance',newDepositAmount);
});

// handal withdraw event handalar
document.getElementById('withdraw-button').addEventListener('click',function(){

    const withdrawAmount =getInputValue('withdraw-input');
    //set withdraw total 
    const withdrawTotal =document.getElementById('withdraw-total');
    const previousWithdrawText=withdrawTotal.innerText;
    const previousWithdraw =parseFloat(previousWithdrawText);
     withdrawTotal.innerText =previousWithdraw + withdrawAmount;

    // update balance
    const balanceTotal =document.getElementById('total-balance');
    const previousBalanceText= balanceTotal.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceText);
    const newTotalBalance =previousBalanceTotal - withdrawAmount;
    balanceTotal.innerText=newTotalBalance;
    //clear withdraw input filed
    withdrawInput.value='';
})