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

export type ButtonVariants = 'filled' | 'ghost' | 'outline' | null | undefined