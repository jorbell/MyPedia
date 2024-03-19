import axios from 'axios'
const baseURL = '/api/tasker'

const getAll = () => {
  const request = axios.get(`${baseURL}/projects`)
  return request.then(response => response.data)
}
/*
const update = (id, newContent, newName) => {
  const c = { newContent: newContent, name: newName}
  const request = axios.put(`${baseURL}/chapters/${id}`, c)
  return request.then(response => response.data)
}
*/
const create = (newProject) => {
  const request = axios.put(`${baseURL}/projects`, newProject)
  return request.then(response => response.data)
}
export default {getAll, create}

