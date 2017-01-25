console.clear();
"use strict";

const addForm = document.querySelector('.add-form');
const searchForm = document.querySelector('.search-form');
const results = document.querySelector('.results-container');
const navItems = document.querySelectorAll('.main-nav li');
const panels = document.querySelectorAll('.add-container, .search-container');

const sports = {
    type: 'Basketball',
    teams: ['Hornets', 'Thunder', 'Trailblazers'],
    conferences: ['East', 'West'],
    mvp: 'Russell Westbrook',
    printMVP() {
        // debugger;
        console.log(this.mvp);
    }
};
sports.printMVP();

const numberTesting = {
    num1: 19,
    num2: 35,
    addNumbers() {
        results.innerHTML = (this.num1 + this.num2);
    }
}

numberTesting.addNumbers();

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

    // newContact['age']
    newContact.age = Math.floor(Math.random() * 99) + 1;
    newContact.dateAdded = Date.now();

    // console.dir(newContact);

    return newContact;
}

function addContactToList(contact) {
    allContacts.push(contact);
}

function toggleActiveClass(babushka) {
    babushka.classList.toggle('is-active');
}

function handleNavClick(tab) {
    if (tab.classList.contains('is-active')) return;

    for (let tab of navItems) {
        // tab.classList.toggle('is-active');
        toggleActiveClass(tab);
    }
    for (let item of panels) {
        // item.classList.toggle('is-active');
        toggleActiveClass(item);
    }
}

for (let tab of navItems) {
    // tab.addEventListener('click', function() {
    tab.addEventListener('click', () => {
        handleNavClick(tab);
    });
}

addForm.addEventListener('submit', () => {
    // addForm.addEventListener('submit', function() {
    event.preventDefault();
    // debugger;
    // const allInputs = event.target;
    const contactToPush = collectFormData(event.target);

    // console.log(contactToPush);

    addContactToList(contactToPush);
    // console.log(allContacts);
    updateTotalCount();
    addForm.reset();
});

searchForm.addEventListener('submit', () => {
    event.preventDefault();
    // console.dir(event.target);
    const searchName = event.target[0].value;

    results.innerHTML = '';

    for (let index = 0; index < allContacts.length; index++) {
        console.log(allContacts[index].name, searchName);
        if (allContacts[index].name === searchName) {

            let content = '';
            const contactContainer = document.createElement('div');
            contactContainer.classList = 'contact-container has-spacer';

            for (let key in allContacts[index]) {
                content += `<p><span>${key}: </span>${allContacts[index][key]}</p>`;
            }

            contactContainer.innerHTML = content;
            results.appendChild(contactContainer);

            return;

        } else {
            results.innerHTML = 'No Match Found.';
        }
    }
});

updateTotalCount();
