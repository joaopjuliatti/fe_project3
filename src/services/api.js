import axios from 'axios'
import { ROOT_URL } from '~/constants'


export const api = axios.create({
    baseURL: ROOT_URL
  })