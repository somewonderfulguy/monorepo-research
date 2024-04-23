import { create } from 'zustand'

type ThemeStore = {
  bears: number
  increasePopulation: () => void
  removeAllBears: () => void
}

const useThemeStore = create<ThemeStore>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 })
}))

export default useThemeStore
