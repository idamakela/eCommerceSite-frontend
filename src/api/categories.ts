'use server'
import axios from 'axios'
import { categoriesEndpoint } from './endpoints'
import { CategoryAndSubcategoryRes } from '@/utils/types'

const storeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
})

export const getCategories = async (): Promise<CategoryAndSubcategoryRes> => {
  const response = await storeApi.get<CategoryAndSubcategoryRes>(categoriesEndpoint)
  return response.data
}
