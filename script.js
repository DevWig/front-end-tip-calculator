// let calcTip = () => {
//     let billAmt = $("#bill-amount").value;
//     let tPerc = $("#tip-percentage").value;
//     let tFrac = tPerc / 100;
//     let tip = billAmt * tFrac;
//     let total = billAmt + tip;

//     return tip, total
// }

calcBtn = document.getElementById("calc-btn");
billField = document.getElementById("bill-amount");
tipField = document.getElementById("tip-percentage");


var billAmt;
var tPerc;
var tFrac;
var tip;
var total;


function tipCalc() {
    billAmt = Number(billField.value);
    tPerc = Number(tipField.value);
    tFrac = tPerc / 100;
    tip = billAmt * tFrac;
    tipR = tip.toFixed(2);
    total = billAmt + tip;
    totalR = total.toFixed(2);


    document.getElementById("calculations").innerHTML = (
        `<h5 class="">Tip Amount: $${tipR} </h5>
        <h5 class="">TOTAL (Bill + Tip): $${totalR} </h5>`
    );
};



calcBtn.onclick = function() {
    tipCalc();
};