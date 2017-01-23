console.clear();
"use strict";

/* Form One
 **************************/
const formOne = document.querySelector('.form-one');
formOne.addEventListener('submit', (event) => {
    event.preventDefault();
    const movieTitle = event.target[0].value;
    const output = document.querySelector('.example.strings .output-container');
    output.innerHTML = `My favorite horror movie would have to be ${movieTitle}.`;
    formOne.reset();
});

/* Form Two
 **************************/
const formTwo = document.querySelector('.form-two');
formTwo.addEventListener('submit', (event) => {
    event.preventDefault();
    const num1 = Number(event.target[0].value);
    const num2 = Number(event.target[1].value);
    const output = document.querySelector('.example.numbers .output-container');
    let msg;

    if (num1 === num2) {
        msg = `${num1} is the same as ${num2}`;
    } else if (num1 > num2) {
        msg = `${num1} is greater than ${num2}`;
    } else {
        msg = `${num1} is less than ${num2}`;
    }
    output.innerHTML = msg;
    formTwo.reset();
});

/* Form Three
 **************************/
const formThree = document.querySelector('.form-three');
formThree.addEventListener('submit', (event) => {
    event.preventDefault();
    const showOne = document.getElementById('show-one').value;
    const showTwo = document.getElementById('show-two').value;
    const outputSpan = document.querySelector('.example.booleans .output-container span');
    const outputH3 = document.querySelector('.example.booleans .output-container h3');
    let msg, bool;

    if (showOne === showTwo) {
        bool = 'True';
        msg = `The shows selected were both ${showOne}.`;
    } else {
        bool = 'False';
        msg = `${showOne} is not the same as ${showTwo}.`;
    }

    outputH3.textContent = bool;
    outputSpan.textContent = msg;
    formThree.reset();
});
