type NavSubcategory = {
  id: number
  title: string
  slug: string
}

export type Navigation = {
  id: number
  title: string
  slug: string
  subcategories: NavSubcategory[]
}

type CategoryAndSubcategory = {
  id: number
  attributes: {
    title: string
    slug: string
  }
}

type ImgFormat = {
  url: string
  name: string
  mime: string
  height: number
  width: number
}

export type ProductData = {
  id: number
  attributes: {
    title: string
    desc: string
    slug: string
    price: number
    categories: CategoryAndSubcategory[]
    subcategories: CategoryAndSubcategory[]
    img: {
      data: {
        id: number
        attributes: {
          url: string
          formats: {
            large: ImgFormat
            medium: ImgFormat
            small: ImgFormat
            thumbnail: ImgFormat
          }
        }
      }
    }
  }
}

export type Meta = {
  pagination: {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
}

export type Products = {
  data: ProductData[]
  meta: Meta
}

export type Product = {
  data: ProductData
  meta: Meta
}
