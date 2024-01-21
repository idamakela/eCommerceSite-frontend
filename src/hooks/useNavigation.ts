import { create } from 'zustand'

interface NavigationState {
  open: boolean
  toggleOpen: () => void
  setOpen: (input: boolean) => void
}

export const useNavigation = create<NavigationState>()((set) => ({
  open: false,
  toggleOpen: () => set((state) => ({ open: !state.open })),
  setOpen: (input) => set((state) => ({ open: (state.open = input) })),
}))
