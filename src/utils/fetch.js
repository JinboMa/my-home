import { baseURL } from '@/config'
import axios from 'axios'
import { interceptors, errors } from './interceptor'

export default async function fetch (option) {
  let instance = axios.create({
    baseURL
  })
  instance.interceptors.request.use(interceptors, errors)
  let res = await instance.request(option)

  return res.data
}
