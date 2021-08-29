"use strict";


const calculate = document.querySelector("#calculate");

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded');

    calculate.addEventListener("click", calcMe);

});

function calcMe() {
    console.log("calculating");

    let firstInput = document.querySelector("#firstnumber").value;
    console.log(firstInput);

    let secondInput = document.querySelector("#secondnumber").value;
    console.log(secondInput);

    let operator = document.querySelector("#operator").value;
    console.log(operator);

    let result = document.querySelector("#results" [0]);

    result = parseInt(firstInput) + (operator) + parseInt(secondInput);

}