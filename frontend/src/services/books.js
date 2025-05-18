import axios from 'axios'
axios.defaults.baseURL = 'https://api.jorbel.net/mypedia'
axios.defaults.withCredentials = true

const getAll = () => {
  const request = axios.get('/books', {params: { 'token': token} })
  return request.then(response => response.data)
}
const update = (id, newContent, newName) => {
  const c = {'token': token, id:id, content: newContent, name: newName}
  const request = axios.put('/chapters', c)
  return request.then(response => response.data)
}
const create = (newName) => {
  const c = {'token': token, name: newName}
  const request = axios.post('/books', c)
  return request.then(response => response.data)
}
export default {getAll, update, create}
