// TODO: if content tables change, or shold only super admin or dev be able to do that? 

export type ICategories = ICategory[]

export type ICategory = {
  Category: any // TODO: type from Stapi
  category: string
  id: number
  product: number
  products: IProduct[]
  slug: string
  updated_at: string
}

export type IProduct = {
  title: string
  desc: string
  id: number
  img: any // TODO: img type Strapi
  price: number
  slug: string
  created_at: string
  updated_at: string
}
