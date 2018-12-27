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
        body: ''  ,
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    })
    saveNotes()
}

const updateNote = ({id, title, body}) => {
    const note = notes.find((note) => note.id === id)
    if (!note) return 

    if (typeof title === 'string') {
        note.title = title
        saveNotes()
    }
    if (typeof body === 'body') {
        note.body = body
        saveNotes()
    }
}

const removeNote = (id) => {
    const index = notes.findIndex((note) => note.id === id)

    if (index > -1) {
        notes.splice(index, 1)
        saveNotes()
    }
}

const resetNotes = () => {
    notes = []
    saveNotes()
}

const getNotes = () => notes


loadNotes()

export { saveNotes, loadNotes, getNotes, createNote, updateNote, resetNotes, removeNote }

