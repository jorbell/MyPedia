import axios from 'axios'
//axios.defaults.baseURL = 'https://api.jorbel.net/mypedia'
axios.defaults.baseURL = '/api/library'
axios.defaults.withCredentials = true

const getAll = () => {
  const request = axios.get('/books')
  return request.then((response) => response.data)
}
const create = (newName) => {
  const c = { name: newName }
  const request = axios.post('/books', c)
  return request.then((response) => response.data)
}
export default { getAll, create }
