'use server'
import axios from 'axios'
import { categoriesEndpoint } from './endpoints'
import { CategoryRes } from '@/utils/types'

const storeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
})

export const getCategories = async (): Promise<CategoryRes> => {
  const response = await storeApi.get<CategoryRes>(categoriesEndpoint)
  return response.data
}
