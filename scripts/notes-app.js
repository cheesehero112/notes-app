"use strict";

let notes = getSavedNotes();

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes, filters);

document.querySelector('#create-note').addEventListener('click', (e) => {
    const uuid = uuidv4();
    const timestamp = moment().valueOf();
    notes.push({
        id: uuid,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notes);
    location.assign(`/edit.html#${uuid}`);
});


document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
});

document.querySelector('#filter-by').addEventListener('input', (e) => {
    filters.sortBy = e.target.value;
    renderNotes(notes, filters);
})


window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        renderNotes(notes, filters);
    }
})



//challenge #71
// 1. set up link href to include hash with id
// 2. set up the assign call to include hash with id

// document.querySelector('#for-fun').addEventListener('change', function(e) {
//     console.log(e.target.checked);
// })
// this prevent browser refresh when form is submitted
// document.querySelector('#name-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log(e.target.elements.firstName.value);
//     e.target.elements.firstName.value = '';
// })

// document.querySelector('#title-button').addEventListener('click', function() {
//     document.querySelector('#page-title').remove();
// })

//****** CRUD operations **********************//
// 1.C => how to store data in the local storage
//localStorage.setItem('location', 'California'); 
// 2. R => how to access the data
//console.log(localStorage.getItem('location'));
// 3. U => 
// 4. D => how to delete data in local storage
// localStorage.removeItem('location');
//localStorage.clear();

//****** JSON.stringify & JSON.parse *******//

// const user = {
//     name: 'Andrew',
//     age: 27
// }
// const userJSON =JSON.stringify(user);
// console.log(userJSON);
// localStorage.setItem('user', userJSON);
// const userJSON = localStorage.getItem('user');
// const user = JSON.parse(userJSON);
// console.log(`${user.name} is ${user.age}.`);