function getForm(formClass) {
  console.log(formClass);
  return document.querySelector(formClass);
}

// Listen for a form submission
// const formOne = document.querySelector('.form-one');
const formOne = getForm('.form-one');

formOne.addEventListener('submit', () => {
  // Prevent the page from refreshing
  event.preventDefault();

  // Grab the movie title value
  const movieTitle = document.querySelector('#movie-title').value;

  // Insert that value into our new string
  //const outputMsg = 'My favorite horror movie would be ' + movieTitle + '.'; // String Concatenation
  const outputMsg = `My favorite horror movie would be ${movieTitle}.`; // String interpolation

  // Insert our new string into the output container
  const outputContainer = document.querySelector('.example.strings .output-container p');
  outputContainer.textContent = outputMsg;

  // Reset the form to its original state
  formOne.reset();
});

/*
*** FORM TWO - Numbers
*/
// const formTwo = document.querySelector('.form-two');
const formTwo = getForm('.form-two');
formTwo.addEventListener('submit', function() {
  event.preventDefault();
  const num1 = document.querySelector('#num-1').value;
  const num2 = document.getElementById('num-2').value;
  const outputContainer = document.querySelector('.example.numbers .output-container');
  let msg;

  if (num1 === num2) {
    msg = `${num1} is the same as ${num2}.`;
  } else if (num1 > num2) {
    msg = `${num1} is greater than ${num2}.`;
  } else {
    msg = `${num1} is less than ${num2}.`;
  }

  outputContainer.innerHTML = msg;
  formTwo.reset();
});

/*
*** FORM THREE - Booleans
*/
// const formThree = document.querySelector('.form-three');
const formThree = getForm('.form-three');
formThree.addEventListener('submit', () => {
  event.preventDefault();
  // console.log(event);
  const showOne = document.getElementById('show-one').value;
  const showTwo = event.target[1].value;
  const outputH3 = document.querySelector('.example.booleans .output-container h3');
  const outputSpan = document.querySelector('.example.booleans .output-container span');
  let msg, bool;

  if (showOne === showTwo) {
    bool = 'True';
    msg = `The shows selected were both ${showOne}.`;
  } else {
    bool = 'False';
    msg = `${showOne} is not the same as ${showTwo}.`;
  }

  outputH3.textContent = bool;
  outputSpan.innerHTML = msg;
  formThree.reset();
});














/*
const testString = 'This is a string';
const newString = 'This ain\'t real';
console.log(testString);

const puddingCount = 20;
const puddingEaten = 10;
const testNumber = (puddingCount / puddingEaten) * 2 + (3 * 3);
console.log(testNumber);

const isCorrect = '4';
console.log(isCorrect === 4);


1 = assigns a value
2 == compare value only
3 === compare value and data type


const whatever = 10;


// const currentAge = 20;
// console.log(currentAge >= 21);

*/
