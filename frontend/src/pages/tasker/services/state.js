
import axios from 'axios'
const baseURL = '/api/tasker'

const getAll = () => {
  const request = axios.get(`${baseURL}/taskstates`)
  return request.then(response => response.data)
}

export default {getAll}
