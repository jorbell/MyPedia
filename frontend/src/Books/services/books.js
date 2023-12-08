import axios from 'axios'
const baseURL = '/api'

const getAll = () => {
  const request = axios.get(`${baseURL}/books`)
  return request.then(response => response.data)
}
const update = (id, newContent, newName) => {
  const c = { newContent: newContent, name: newName}
  const request = axios.put(`${baseURL}/chapters/${id}`, c)
  return request.then(response => response.data)
}
const createBook = (newContent) => {
  const c = {newContent: newContent}
  const request = axios.put(`${baseURL}/books`, c)
  return request.then(response => response.data)
}
const createChapter = (id, name) => {
  const c = {bookid: id, name: name, displayName: name}
  console.log(c)
  const request = axios.put(`${baseURL}/chapters`, c)
  return request.then(response => response.data)
}
export default {getAll, update, createBook, createChapter}
