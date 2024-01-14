export type CategoryRes = {
  data: Category[]
  meta: Meta
}

export type Meta = {
  pagination: number
  page: number
  pageCount: number
  pageSize: number
  total: number
}

export type Category = {
  id: number
  attributes: {
    title: string
    slug: string
    createdAt: string
    updatedAt: string
    publishedAt: string
  }
}
