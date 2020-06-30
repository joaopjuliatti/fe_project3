import axios from 'axios'
import { ROOT_URL } from '../constants'


export const api = axios.create({
    baseURL: ROOT_URL
  })


  export const addAnimal = async data => {
    try {
      const response = await api.put('/partners/users', data)
      return response
    } catch (error) {
      return error.response
    }
  }


  export const getListAnimals = async data => {
    try {
      const response = await api.put('/partners/users', data)
      return response
    } catch (error) {
    }
  }


  export const repurchaseAnimal = async data => {
    try {
      const response = await api.put('/partners/users', data)
      return response
    } catch (error) {
      return error.response
    }
  }