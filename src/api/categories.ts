import axios from 'axios'

const storeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL
})

export const categoriesEndpoint = '/categories'

export const getCategories = async () => {
  const response = await storeApi.get(categoriesEndpoint)
  return response.data
}