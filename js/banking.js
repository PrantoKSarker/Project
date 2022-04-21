// Event handeler for Deposit Button
document.getElementById('deposit-button').addEventListener('click',function(){
 const depositInputField = document.getElementById('depositInput');
 const depositInputFieldText= depositInputField.value;
 const depositInputValue= parseFloat(depositInputFieldText);

// get current deposit
const depositTotal = document.getElementById('deposit-total');
const depositTotalText= depositTotal.innerText;
const PreviousdepositTotalvalue = parseFloat(depositTotalText);
const newdepositToatlvalue= PreviousdepositTotalvalue+depositInputValue;
depositTotal.innerText= newdepositToatlvalue;
// Clear inputField
depositInputField.value='';
// Update an BlanceTotal
const blanceToatal = document.getElementById('blance-total');
const blanceToatalText=blanceToatal.innerText;
const previousBlanceTotalValue= parseFloat(blanceToatalText);
const newBlanceTotal= previousBlanceTotalValue+depositInputValue;
blanceToatal.innerText= newBlanceTotal;
})

// Event Handeler for Withdraw Button
document.getElementById('withdraw-button').addEventListener('click',function(){
  const withdrawInputField = document.getElementById('withdrawInput');
  const withdrawInputFieldText= withdrawInputField.value;
  const withdrawInputValue = parseFloat(withdrawInputFieldText);
// get current Withdraw
const withdrawTotal = document.getElementById('withdraw-total');
const withdrawTotalText= withdrawTotal.innerText;
const PreviousWithdrawTotalValue= parseFloat(withdrawTotalText);
const newwithdrawToatlValue= PreviousWithdrawTotalValue+withdrawInputValue;
withdrawTotal.innerText= newwithdrawToatlValue;
// Clear Input value
withdrawInputField.value='';
// Update Blance Total
const blanceToatal = document.getElementById('blance-total');
const blanceToatalText=blanceToatal.innerText;
const previousBlanceTotalValue= parseFloat(blanceToatalText);
const newBlanceTotal= previousBlanceTotalValue-withdrawInputValue;
blanceToatal.innerText= newBlanceTotal;
})