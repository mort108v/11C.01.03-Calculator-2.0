"use strict";


const calculate = document.querySelector("#calculate");

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    calculate.addEventListener("click", calcMe);

});

function calcMe() {
    console.log("calculating");

    let firstInput = parseInt(document.querySelector("#firstnumber").value);
    console.log(firstInput);

    let operator = document.querySelector("#operator").value;
    console.log(operator);

    let secondInput = parseInt(document.querySelector("#secondnumber").value);
    console.log(secondInput);

    let result = document.getElementById("results li" [0].innerHTML);

    if (operator === 'add') {
        result = firstInput + secondInput;
        console.log(result);
    }




}