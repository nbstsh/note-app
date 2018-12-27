const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

const validValues = [ 'byEdited', 'byCreated', 'alphabetical']


const getFilters = () => filters


const setFilters = ({ searchText, sortBy }) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
    }
    if (typeof sortBy === 'string' && validValues.includes(sortBy)) {
        filters.sortBy = sortBy
    }
}


export { getFilters, setFilters }