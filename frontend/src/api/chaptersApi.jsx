import axios from 'axios'
axios.defaults.baseURL = '/api/library'
axios.defaults.withCredentials = true
const update = (id, newContent, newName) => {
  const c = {id:id, content: newContent, name: newName}
  const request = axios.put('/chapters', c)
  return request.then(response => response.data)
}
const create = (id, name) => {
  const c = {bookid: id, name: name, displayName: name}
  const request = axios.post('/chapters', c)
  return request.then(response => response.data)
}
const remove = (id) => {
  const c = {id: id}
  const request = axios.put(`/chapter/delete/${id}`, c)
  return request.then(response => response.data)
}
export default { update, create, remove }
