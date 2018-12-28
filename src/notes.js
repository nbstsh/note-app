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
    const id = uuidv4()
    notes.push({
        id,
        title: '',
        body: ''  ,
        createdAt: moment().valueOf(),
        updatedAt: moment().valueOf()
    })
    saveNotes()
    
    return id
}

const updateNote = ({id, title, body}) => {
    const note = notes.find((note) => note.id === id)
    if (!note) return 

    if (typeof title === 'string') {
        note.title = title
        note.updatedAt = moment().valueOf()
        saveNotes()
    }
    if (typeof body === 'string') {
        note.body = body
        note.updatedAt = moment().valueOf()
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

