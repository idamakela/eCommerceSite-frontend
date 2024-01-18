'use server'

import axios from 'axios'

import { footerEndpoint, logoEndpoint } from './endpoints'

const storeApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
})

export const getFooter = async () => {
  const response = await storeApi.get(footerEndpoint)
  return response.data
}

export const getLogo = async () => {
  const response = await storeApi.get(logoEndpoint)
  return response.data
}
