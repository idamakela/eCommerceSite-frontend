'use server'

import axios from 'axios'
import { subcategoriesEndpoint } from './endpoints'
import { CategoryAndSubcategoryRes } from '@/utils/types'

const storeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
})

export const getSubcategories = async (): Promise<CategoryAndSubcategoryRes> => {
  const response = await storeApi.get<CategoryAndSubcategoryRes>(
    subcategoriesEndpoint,
  )
  return response.data
}
