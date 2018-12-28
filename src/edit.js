import { getFilters, setFilters } from './filters'
import { saveNotes, loadNotes, getNotes, createNote, upateNote, updateNote, resetNotes, removeNote } from './notes'
import { generateNoteDOM, renderNotes, getFilteredNotes, generateLastEditedText, initializeEditPage } from './view'

// Initialize edit Page
const id = decodeURI(location.hash.substring(1))
initializeEditPage(id)


document.querySelector('#note-title').addEventListener('input', (e) => {
    if (typeof e.target.value === 'string') {
        updateNote({ id: id, title : e.target.value })
    }
})

document.querySelector('#note-body').addEventListener('input', (e) => {
    if (typeof e.target.value === 'string') {
        console.log(e.target.value)
        updateNote({ id: id, body: e.target.value})
    }
})
