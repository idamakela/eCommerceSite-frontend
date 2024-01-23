export type ButtonVariants =
  | 'filled'
  | 'underline'
  | 'outline'
  | 'muted'
  | 'ghost'
  | null
  | undefined

export type Subcategory = {
  id: number
  title: string
  slug: string
}

export type Navigation = {
  id: number
  title: string
  slug: string
  subcategories: Subcategory[]
}

export type Product = {
  id: number
  attributes: {
    title: string
    slug: string
    price: number
    img: {
      data: {
        id: number
        attributes: {
          formats: {
            small: {
              url: string
              name: string
              mime: string
              height: number
              width: number
            }
          }
        }
      }
    }
  }
}

export type Products = {
  data: Product[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
