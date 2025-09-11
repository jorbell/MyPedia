import axios from 'axios'
axios.defaults.baseURL = 'https://api.jorbel.net/mypedia'
axios.defaults.withCredentials = true
const token = "b0e8a41b51bafbdaaed8a2b5246a699d"
const update = (id, newContent, newName) => {
  const c = {'token': token, id:id, content: newContent, name: newName}
  const request = axios.put('/chapters', c)
  return request.then(response => response.data)
}
const create = (id, name) => {
  const c = {'token': token, bookid: id, name: name, displayName: name}
  const request = axios.post('/chapters', c)
  return request.then(response => response.data)
}
const remove = (id) => {
  const c = {id: id}
  const request = axios.put('/chapter/delete/${id}', c)
  return request.then(response => response.data)
}
export default { update, create, remove }
