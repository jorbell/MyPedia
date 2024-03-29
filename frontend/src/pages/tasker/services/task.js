import axios from 'axios'
const baseURL = '/api/tasker'

const getAll = () => {
  const request = axios.get(`${baseURL}/projects`)
  return request.then(response => response.data)
}
const create = (newTask) => {
  const request = axios.post(`${baseURL}/tasks`, newTask)
  return request.then(response => response.data)
}
const update = (newTask) => {
  const request = axios.put(`${baseURL}/tasks/${newTask.id}`, newTask)
  return request.then(response => response.data)
}
const remove = (task) => {
  const request = axios.delete(`${baseURL}/tasks/${task.id}`, task)
  return request.then(response => response.data)
}

export default {create, update, getAll, remove}
