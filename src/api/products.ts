'use server'

import axios from 'axios'

import { productsEndpoint } from './endpoints'

const storeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
})

export const getProduct = async (id: string) => {
  try {
    const response = await storeApi.get(productsEndpoint + `/${id}?populate[0]=img`)
    return response.data
  } catch (error) {
    return error
  }
}

export const getProducts = async (endpoint: string) => {
  try {
    const response = await storeApi.get(productsEndpoint + endpoint + '?populate[0]=img')
    return response.data
  } catch (error) {
    return error
  }
}

export const getCheckoutProducts = async (query: string) => {
  try {
    const response = await storeApi.get(productsEndpoint + `/?${query}`)
    return response.data
  } catch (error) {
    return error
  }
}
