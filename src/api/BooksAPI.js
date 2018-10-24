const api = "https://reactnd-books-api.udacity.com"

/**
 * Generate a unique token for storing your bookshelf data on the backend server.
 *
 * @type {string | *}
 */
let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

/**
 * Pass the Http headers
 * @type {{Accept: string, Authorization: string | *}}
 */
const headers = {
  'Accept': 'application/json',
  'Authorization': token
}

/**
 * Get a book by id
 * @param bookId
 * @returns {Promise<Response | never>}
 */
export const get = (bookId) =>
  fetch(`${api}/books/${bookId}`, { headers })
    .then(res => res.json())
    .then(data => data.book)

/**
 * Get all books
 * @returns {Promise<Response | never>}
 */
export const getAll = () =>
  fetch(`${api}/books`, { headers })
    .then(res => res.json())
    .then(data => data.books)

/**
 * Update book category
 * @param book
 * @param shelf
 * @returns {Promise<Response | never>}
 */
export const update = (book, shelf) =>
  fetch(`${api}/books/${book.id}`, {
    method: 'PUT',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ shelf })
  }).then(res => res.json())

/**
 * Query the books object
 *
 * @param query
 * @returns {Promise<Response | never>}
 */
export const search = (query) =>
  fetch(`${api}/search`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query })
  }).then(res => res.json())
    .then(data => data.books)
