import { loadNotes, updateNote, removeNote } from './notes'
import { initializeEditPage } from './view'

// Initialize edit Page
const id = decodeURI(location.hash.substring(1))
initializeEditPage(id)


document.querySelector('#note-title').addEventListener('input', (e) => {
    if (typeof e.target.value === 'string') {
        updateNote({ id: id, title : e.target.value })
        initializeEditPage(id)
    }
})

document.querySelector('#note-body').addEventListener('input', (e) => {
    if (typeof e.target.value === 'string') {
        updateNote({ id: id, body: e.target.value})
    }
})

document.querySelector('#remove-note').addEventListener('click', (e) => {
    removeNote(id)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notes') {
        loadNotes()
        initializeEditPage(id)
    }
})