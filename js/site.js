function getValues(){
    let loan = document.getElementById("amount").value;
    let payments = document.getElementById("payments").value;
    let rate = document.getElementById("rate").value;
    mPayments = monthlyPayments(payments,loan, rate);
    displayResults(payments, loan, rate, mPayments)
}
function monthlyPayments(payment,loan,rate){
    let monthlyPayment = (loan)*(rate/1200)/(1- Math.pow((1+ rate/1200), -payment));
    monthlyPayment = monthlyPayment.toFixed(2);
    return monthlyPayment;
}
function displayResults(months, loan, rate, mPayments){
    let rUpdate = "";
    let tInterest = 0;
    let originalLoan = parseInt(loan);
    let pDisplay = "$"+mPayments;
    document.getElementById("totalPrincipalDisplay").innerHTML = originalLoan;
    for(term = 1; term<= months; term++){
        let interest = (loan*rate/1200);
        let principal = (mPayments - interest);
        tInterest += interest;     
        loan -= principal;
        interest = Math.round((interest + Number.EPSILON)*100)/100;
        principal = Math.round((principal + Number.EPSILON)*100)/100;
        loan = Math.round((loan + Number.EPSILON)*100)/100;
        tInterest = Math.round((tInterest + Number.EPSILON)*100)/100;
        rUpdate += `<tr><th>${term}</th><th>${mPayments}</th><th>${principal}</th><th>${interest}</th><th>${tInterest}</th><th>${loan}</th></tr>`;
    }
    
    tCost = originalLoan + tInterest;
    alert(tCost);
    document.getElementById("results").innerHTML = rUpdate;
    document.getElementById("paymentDisplay").innerHTML = pDisplay;
    document.getElementById("totalInterestDisplay").innerHTML = Math.round((tInterest + Number.EPSILON)*100)/100;
    document.getElementById("totalCostDisplay").innerHTML =Math.round(tCost);
}