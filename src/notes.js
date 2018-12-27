import uuidv4 from 'uuidv4'
import moment from 'moment'

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

const createNote = () => {
    notes.push({
        id: uuidv4(),
        title: '',
        text: ''  ,
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    })
    saveNotes()
}

const getNotes = () => notes


loadNotes()

export { saveNotes, loadNotes, getNotes, createNote }

