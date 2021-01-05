function taxCalc() {
    let tax = document.getElementById("taxInput").value;
    let income = document.getElementById("incomeInput").value;
    
    let result =  tax / 100 * income;
    
    document.getElementById("displayResult").innerHTML = "With an income of " + income + " and " + tax + "% in taxes. Your total tax equals: ";
    document.getElementById("displayTotalTax").innerHTML = result;
    if (tax == "" || income == "") {
        alert("Please enter a number")
        document.location.reload();
    }
}