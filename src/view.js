import moment from 'moment'
import { getFilters, setFilters } from './filters'
import { saveNotes, loadNotes, getNotes, createNote, upateNote, updateNote, resetNotes, removeNote } from './notes'

/*
div.notes
	a.list-item
		p.list-item__title
		p.list-item__subtitle
*/

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
    titleEl.textContent = title
    return titleEl
}

const generateLastEditedElement = (updatedAt) => {
    const lastEditedEl = document.createElement('p')
    lastEditedEl.classList.add('list-item__subtitle')
    lastEditedEl.textContent = generateLastEditedText(updatedAt)
    return lastEditedEl 
}

const generateLastEditedText = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`


export { generateNoteDOM, generateLastEditedText }