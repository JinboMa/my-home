import { baseURL } from '@/config'
import axios from 'axios'
import { interceptors, errors } from './interceptor'

export default function fetch (option) {
  return new Promise((resolve, reject) => {
    let instance = axios.create({
      baseURL
    })
    instance.interceptors.request.use(interceptors, errors)
    instance.request(option)
      .then(res => {
        // success todo
        resolve(res.data)
      })
      .catch(err => {
        // fail todo
        reject(err)
      })
  })
}
