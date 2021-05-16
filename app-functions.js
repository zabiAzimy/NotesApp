const renderNotes = (notes) => {
    notesList.innerHTML = ''

    if (notes.length == 0) {
        notesList.innerHTML = `
        <p class="message">No note yet</p>
        <div class="loading"><div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div>`
    } else {
        notes.forEach(note => {
            generateDom(note)
        });

    }

}

// get the notes back from local storagge
const getNotesFromLocalStorage = () => {
    const notes = localStorage.getItem('notes')
    if (notes !== null) {
        return JSON.parse(notes)
    } else {
        return []
    }
}

// saving to local storage
const saveToLocalStorage = (note) => {
    const notesFromLocalStorage = localStorage.getItem('notes')

    if (notesFromLocalStorage == null) {
        localStorage.setItem('notes', JSON.stringify(notes))
    }

    const LSNotes = JSON.parse(notesFromLocalStorage)
    LSNotes.push(note)

    localStorage.setItem('notes', JSON.stringify(LSNotes))
}

// generating a dom element
const generateDom = (note) => {

    const ListDiv = document.createElement('div')
    ListDiv.className = "individual-note"

    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    checkBox.className = "checkBox"
    ListDiv.appendChild(checkBox)

    const noteText = document.createElement('p')
    noteText.textContent = note.title
    if (note.completed) {
        noteText.style.textDecoration = "line-through"
    }
    ListDiv.appendChild(noteText)

    const deleteButton = document.createElement('i')
    deleteButton.className = "fas fa-trash-alt"
    deleteButton.style.color = '#e60000';

    ListDiv.appendChild(deleteButton)

    notesList.appendChild(ListDiv)
}