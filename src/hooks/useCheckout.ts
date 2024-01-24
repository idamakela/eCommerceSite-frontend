import { create } from 'zustand'

type Image = {
  id: string
  image: string
}

interface State {
  products: string[]
  images: Image[]
}

interface Action {
  setProducts: (id: string) => void
  removeProduct: (id: string) => void
  resetProducts: () => void
  setImages: (img: Image) => void
  removeImage: (id: string) => void
  resetImages: () => void
}

export const useCheckout = create<State & Action>()((set) => ({
  images: [],
  products: [],
  setProducts: (id) =>
    set((state) => ({
      products: [...state.products, id],
    })),
  removeProduct: (id) =>
    set((state) => ({ products: state.products.filter((item) => item !== id) })),
  resetProducts: () => set((state) => ({ products: (state.products = []) })),
  setImages: (img) => set((state) => ({ images: [...state.images, img] })),
  removeImage: (img) => set((state) => ({ images: state.images.filter((item) => item.id !== img) })),
  resetImages: () => set((state) => ({ images: (state.images = []) })),
}))
