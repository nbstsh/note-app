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
    
    notes.forEach((note) => {
        notesEl.append(generateNoteDOM(note))
    })
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


export { generateNoteDOM, generateLastEditedText, renderNotes, initializeEditPage }