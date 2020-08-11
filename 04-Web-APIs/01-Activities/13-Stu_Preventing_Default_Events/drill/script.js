var cost = document.querySelector("#cost");
var tippercent = document.querySelector("#tipPercent");
var tipamount = documnet.querySelector("#tip-amount");
var newTotal = document.querySelector("#new-total");
var submit = document.querySelector("submit");

submit.addEventListener("click",function(event){
    event.preventDefault();
    var tipamountresult = cost.value * tippercent.value;
})

