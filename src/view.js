import moment from 'moment'
import { getFilters, setFilters } from './filters'
import { saveNotes, loadNotes, getNotes, createNote, upateNote, updateNote, resetNotes, removeNote } from './notes'


const generateNoteDOM = ({ id, title, updatedAt }) => {
    const noteEl = document.createElement('a')
    noteEl.classList.add('list-item')
    noteEl.setAttribute('href', `/edit.html#${id}`)

    const titleEl = generateTitleElement(title)
    noteEl.appendChild(titleEl)

    const lastEditedEl = generateLastEditedElement(updatedAt)
    noteEl.appendChild(lastEditedEl)

    return noteEl
}

const generateTitleElement = (title) => {
    const titleEl = document.createElement('p')
    titleEl.classList.add('list-item__title')
    titleEl.textContent = title ? title : 'Unamed Note'
    return titleEl
}

const generateLastEditedElement = (updatedAt) => {
    const lastEditedEl = document.createElement('p')
    lastEditedEl.classList.add('list-item__subtitle')
    lastEditedEl.textContent = generateLastEditedText(updatedAt)
    return lastEditedEl 
}

const generateLastEditedText = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`


const renderNotes = () => {
    const notes = getNotes()
    if (!notes) return
    
    const notesEl = document.querySelector('#notes')
    
    getFilteredNotes(notes).forEach((note) => {
        notesEl.append(generateNoteDOM(note))
    })
}

// get filtered and sorted notes
const getFilteredNotes = (notes) => {
    if (!notes) return
    const filters = getFilters()

    return notes
    .filter((note) => note.title.toLowerCase().includes(filters.searchText))
    .sort(compareNotes)
}

//compare function to sort notes
const compareNotes = (a, b) => {
    const sortBy = getFilters().sortBy

    return  sortBy === 'byEdited' ? compareNotesByEdited(a, b) :
            sortBy === 'byCreated' ? compareNotesByCreated(a, b) :
            sortBy === 'alphabetical' ? compareNotesAlphabeticaly(a, b) : 0
}

const compareNotesByEdited = (a, b) => {
    if (a.updatedAt > b.updatedAt) return -1
    if (a.updatedAt < b.updatedAt) return 1
    return 0
}

const compareNotesByCreated = (a, b) => {
    if (a.createdAt > b.createdAt) return -1
    if (a.createdAt < b.createdAt) return 1
    return 0
}

const compareNotesAlphabeticaly = (a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
    return 0
}


const initializeEditPage = (id) => {
    const notes = getNotes()
    if (!notes) return

    const note = notes.find((note) => note.id === id)
    if (!note) return

    const lastEditedEl = document.querySelector('#last-edited')
    lastEditedEl.textContent = generateLastEditedText(note.updatedAt)

    const titleEl = document.querySelector('#note-title')
    titleEl.value = note.title

    const noteBodyEl = document.querySelector('#note-body')
    noteBodyEl.value = note.body
}


export { generateNoteDOM, generateLastEditedText, renderNotes, initializeEditPage, getFilteredNotes }