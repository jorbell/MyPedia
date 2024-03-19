import axios from 'axios'
const baseURL = '/api/tasker'

const create = (newTask) => {
  const request = axios.put(`${baseURL}/tasks`, newTask)
  console.log(newTask)
  return request.then(response => response.data)
}
const update = (newTask) => {
  const request = axios.put(`${baseURL}/tasks/${newTask.id}`, newTask)
  return request.then(response => response.data)
  console.log(newTask);
}

export default {create, update}
