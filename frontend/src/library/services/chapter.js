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
const create = (id, name) => {
  const c = {bookid: id, name: name, displayName: name}
  console.log(c)
  const request = axios.put(`${baseURL}/chapters`, c)
  return request.then(response => response.data)
}
export default {getAll, update, create}
