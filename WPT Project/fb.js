'use strict'

const success = document.querySelector('#submitBtn');
success.addEventListener('click', ()=>{
    alert("Your feedback is successfully submitted. Thank you!");
    window.location.href = 'main.html';
})

let inputs = document.querySelectorAll('input');

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', ()=>{
    inputs.forEach(input => input.value = '');
})

