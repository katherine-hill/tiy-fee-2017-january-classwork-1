console.clear();
"use strict";

const addForm = document.querySelector('.add-form');
let allContacts = [{
    name: 'Ragnar',
    cell: '123-123-1234',
    home: '345-345-3456'
}];

function updateTotalCount() {
    document.querySelector('.total-contacts').innerHTML = allContacts.length;
}

function collectFormData(formData) {
    const length = formData.length;
    let newContact = {};

    for (let index = 0; index < length; index++) {
        // console.dir(formData[index]);
        if (formData[index].value && formData[index].type !== 'submit') {
            newContact[formData[index].name] = formData[index].value;
        }
    }

    return newContact;
}

function addContactToList(contact) {
    allContacts.push(contact);
}

addForm.addEventListener('submit', () => {
    // addForm.addEventListener('submit', function() {
    event.preventDefault();
    // const allInputs = event.target;
    const contactToPush = collectFormData(event.target);
    addContactToList(contactToPush);
    updateTotalCount();
    addForm.reset();
});

updateTotalCount();







// const dogs = {
//     abbie: {
//         breed: 'Whippet',
//         age: 5,
//         hobbies: ['fetch', 'eating', 'running']
//     },
//     ragnar: {
//         breed: 'Norwegian Elkhound',
//         age: 10,
//         hobbies: ['raiding', 'sailing', 'drinking']
//     }
// };
// console.log(dogs.ragnar.hobbies[2]);
//
// const drink = 'vodka';
//
// dogs.ragnar[drink] = 'Koskenkorva';
//
// console.log(dogs.ragnar);

// const words = ['apple', 'orange', 'pizza', 'chocolate'];
// const secondary = ['rotten', 'peel', 'yum', 'yummier'];
// const wordsLength = words.length;
// const food = {
//     name: 'Daniel'
// };
//
// food.chocolate = 'babushka';
//
// for (let index = 0; index < wordsLength; index++) {
//     food[words[index]] = secondary[index];
// }
//
// console.log(food);







// const test = "This is a string.";
// const num1 = 12;
// const isPuddingAwesome = true;
//
//
// let testArray = ['red', num1, 'green', test];
// let counter = 0;
// let whatever = '';
// testArray.push('testing');
// const length = testArray.length;

// while (counter < length) {
// DONT FORGET TO INCREMENT!!!!
//     console.log(testArray[counter]);
//     counter++;
// }

// do {
//     whatever += testArray[counter];
//     counter++;
//     // DONT FORGET TO INCREMENT!!!!
// } while (counter < length);
// console.log(whatever);

// for (let index = 0; index < length; index++) {
//     console.log(testArray[index]);
// }

// console.log(testArray);
//
// testArray.push('New Value');
// console.log(testArray);
//
// let ourValue = testArray.pop();
// console.log(ourValue);
//
// testArray.unshift('newest value');
//
// let sliceArray = testArray.slice(1, 3);
// console.log(sliceArray);
// console.log(testArray);
//
// console.log(testArray[0]);
