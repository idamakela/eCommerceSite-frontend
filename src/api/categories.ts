'use server'

import axios from 'axios'
import { categoriesEndpoint } from './endpoints'

const storeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
})

export const getNavigation = async () => {
  try {
    const response = await storeApi.get(categoriesEndpoint + '/subcategories')
    return response.data
  } catch (error) {
    return error
  }
}
