
import axios from 'axios'
const baseURL = '/api/tasker'

const create = (sprint) => {
  const request = axios.post(`${baseURL}/sprints`, sprint)
  return request.then(response => response.data)
}
const update = (sprint) => {
  const request = axios.put(`${baseURL}/sprints/${sprint.id}`, sprint)
  return request.then(response => response.data)
}
const getAll = () => {
  const request = axios.get(`${baseURL}/sprints`)
  return request.then(response => response.data)
}

const getTasks = (sprintid) => {
  const request = axios.get(`${baseURL}/sprints/${sprintid}/tasks`)
  return request.then(response => response.data)
}
const remove = (sprint) => {
  const request = axios.delete(`${baseURL}/sprints/${sprint.id}`, sprint)
  return request.then(response => response.data)
}

export default {create, update, getAll, getTasks, remove}
