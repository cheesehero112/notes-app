"use strict"

// location.hash.substring("starting point", "endpoint") to get the id for each note
const titleElement = document.querySelector('#note-title');
const dateElement = document.querySelector('#last-edited');
const bodyElement = document.querySelector('#note-body');
const removeElement = document.querySelector('#remove-note');
const noteId = location.hash.substring(1);
let notes = getSavedNotes();
let note = notes.find((note) => note.id === noteId);

if (!note) {
    location.assign('/index.html');
}

titleElement.value = note.title;
bodyElement.value = note.body;
dateElement.textContent = generateLastEdited(note.updatedAt);

titleElement.addEventListener('input', (e) => {
    note.title = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
})

bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value;
    note.updatedAt = moment().valueOf();
    dateElement.textContent = generateLastEdited(note.updatedAt);
    saveNotes(notes);
})
 
removeElement.addEventListener('click', (e) => {
    removeNote(note.id);
    saveNotes(notes);
    location.assign('/index.html');
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue);
        note = notes.find((note) => note.id === noteId);
    }
    if (!note) {
        location.assign('/index.html');
    }
    titleElement.value = note.title;
    bodyElement.value = note.body;
    dateElement.textContent = generateLastEdited(note.updatedAt);
})



// challenge #76 
// 1. add a DOM elm between the title and body inputs (empty span)
// 2. set t4ext value: Last edited 4 hours ago
// 3. Update value on title/body/storage change


// challenge #72
// 1. set up input event for title
// 2. update note object and save notes list
// 3. repeat steps 1-2 for body
// 4. set up a remove button that removes notes and send users badk to home page