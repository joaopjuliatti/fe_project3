import axios from 'axios'
import { ROOT_URL } from '../constants'
import { history } from '../navigation/history'


export const api = axios.create({
    baseURL: ROOT_URL
  }) 

  export const authToken = async ({email, password}) => {
    // OK
    try {
      const response = await api.post('/auth/login', {
        email,
        password
      })
  
      return response
    } catch (error) {
      return error.response
    }
  }

  export const checkIfNotAuthorized = error => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.removeItem('token')
        history.push('/')
      }
    }
  }
  
  export const addAnimal = async (data,token) => {
    try {
      const response = await api.post('/animal/create', data, {
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }


  export const getListAnimals = async (FarmId,token) => {
    try {
      const response = await api.get(`/animal/${FarmId}/all`,{
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }

  export const repurchaseAnimal = async (data, token) => {
    try {
      const response = await api.put('/animal/repurchase', data, {
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }

  export const deactiveAnimal = async (data, token) => {
    try {
      const response = await api.put('/animal/deactive', data, {
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }


  export const sellAnimal = async (data, token) => {
    try {
      const response = await api.put('/animal/sell', data, {
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }


  export const getAllFarms = async (token) => {
    try {
      const response = await api.get('/farm/all', {
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }

  export const addFarm = async (data,token) => {
    try {
      const response = await api.post('/farm/create',data,{
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }


  export const getCashFlow = async (FarmId,data,token) => {
    try {
      const response = await api.post(`/cash-flow/${FarmId}/all`, data,{
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }

  export const getFlowTypes = async (token) => {
    try {
      const response = await api.get('/flow-type/all',{
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }

  export const deleteCashFlow = async (data, token) => {
    try {
      const response = await api.post(`/cash-flow/delete`,data,{
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }

  export const addCashFlow = async (data, token) => {
    try {
      const response = await api.post(`/cash-flow/create`,data,{
        headers: {
          Authorization: token,
        }
      })
      return response
    } catch (error) {
      checkIfNotAuthorized(error)
      return error.response
    }
  }