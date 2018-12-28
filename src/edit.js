import { getFilters, setFilters } from './filters'
import { saveNotes, loadNotes, getNotes, createNote, upateNote, updateNote, resetNotes, removeNote } from './notes'
import { generateNoteDOM, renderNotes, getFilteredNotes, generateLastEditedText, initializeEditPage } from './view'

// Initialize edit Page
const id = decodeURI(location.hash.substring(1))
initializeEditPage(id)