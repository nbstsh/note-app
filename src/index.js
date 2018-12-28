import { setFilters } from './filters'
import { createNote } from './notes'
import { renderNotes } from './view'


renderNotes()


document.querySelector('#search-text').addEventListener('input', (e) => {
    setFilters({ searchText: e.target.value.trim() })
    renderNotes()
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    setFilters({ sortBy: e.target.value} )
    renderNotes()
})

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = createNote()
    location.assign(`edit.html#${id}`)
})