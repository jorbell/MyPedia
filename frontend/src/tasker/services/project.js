import axios from 'axios'
const baseURL = '/api/tasker'

const getAll = () => {
  const request = axios.get(`${baseURL}/projects`)
  return request.then(response => response.data)
}
const getById = (id) => {
  const request = axios.get(`${baseURL}/projects/${id}`)
  return request.then(response => response.data)

}
const getSprints = (projectid) => {
  const request = axios.get(`${baseURL}/projects/${projectid}/sprints`)
  return request.then(response => response.data)
}
const getTasks = (projectid) => {
  const request = axios.get(`${baseURL}/projects/${projectid}/tasks`)
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
  const request = axios.post(`${baseURL}/projects`, newProject)
  return request.then(response => response.data)
}
export default { getAll, create, getSprints, getById, getTasks}

