import { StaticImageData } from 'next/image'

export type CategoryAndSubcategoryRes = {
  data: CategoryAndSubcategory[]
  meta: Meta
}

export type Meta = {
  pagination: number
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export type CategoryAndSubcategory = {
  id: number
  attributes: {
    title: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}

export type ButtonVariants =
  | 'filled'
  | 'underline'
  | 'outline'
  | 'muted'
  | 'ghost'
  | null
  | undefined

export type ProductCard = {
  title?: string
  slug?: string
  price?: number
  imgUrl?: string | StaticImageData
  imgName?: string
}

export type Navigation = {
  id: number
  title: string
  slug: string
  subcategories: Subcategory[]
}

export type Subcategory = {
  id: number
  title: string
  slug: string
}
