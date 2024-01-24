import { Product } from '@/utils/types'
import { create } from 'zustand'

interface State {
  products: string[]
}

interface Action {
  setProducts: (id: string) => void
  removeProduct: (id: string) => void
  reset: () => void
}

export const useCheckout = create<State & Action>()((set) => ({
  products: [],
  setProducts: (id) =>
    set((state) => ({
      products: [...state.products, id],
    })),
  removeProduct: (id) =>
    set((state) => ({ products: state.products.filter((item) => item !== id) })),
  reset: () => set((state) => ({ products: (state.products = []) })),
}))
