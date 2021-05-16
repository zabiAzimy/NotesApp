const notesList = document.getElementById('list')
const form = document.getElementById('form')
const search = document.getElementById('search')
const note = document.getElementsByClassName('.individual-note')

const notes = getNotesFromLocalStorage()
    // render the notes to the screen
renderNotes(notes)


// Adding some event listeners
form.addEventListener('submit', (e) => {
    const title = e.target.elements.title.value

    // save the note to the array and then render that 
    const note = {
        title: title,
        completed: false,
        id: uuidv4()
    }
    notes.push(note)
    renderNotes(notes)

    // save to local storage
    saveToLocalStorage(note)

    e.target.elements.title.value = ''
    e.preventDefault()
})

// adding an event handler for the search input
search.addEventListener('input', (e) => {

    const filteredNotes = notes.filter((note) => {
        return note.title.toLowerCase().includes(e.target.value.toLowerCase())
    })

    renderNotes(filteredNotes)

})

// handling event for toggling completed
document.querySelector('.checkBox').addEventListener('change', (e) => {
    console.log(e.target)
})