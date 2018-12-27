let notes = []

/*
note = {
    id
    title
    body
    createdAt
    updatedAt
}
*/

const saveNotes = () => {
    localStorage.setItem('notes',JSON.stringify(notes))
}

const loadNotes = () => {
    const notesJson = localStorage.getItem('notes')
    try {
        notes = notesJson ? JSON.parse(notesJson) : []
    } catch (e) {
        notes = []
    }
}

const getNotes = () => notes


loadNotes()

export { saveNotes, loadNotes, getNotes }