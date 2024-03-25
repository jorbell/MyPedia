import axios from 'axios'
const baseURL = '/api/library'

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
const remove = (id) => {
  const c = {id: id}
  const request = axios.put(`${baseURL}/chapter/delete/${id}`, c)
  return request.then(response => response.data)
}
export default { update, create, remove }
