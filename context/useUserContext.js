import { create } from 'zustand'

const useUserContext = create((set) => ({
  favorites: [],
  account: [],
  setAccount: (newAccount) => set((state) => ({ ...state, account: [...state.account, newAccount] })),
  setFavorites: (newFavorite) => set((state) => ({ ...state, favorites: [...state.favorites, newFavorite] })),
  removeFavorite: (id) => set((state) => ({ ...state, favorites: state.favorites.filter(item => item.id !== id) })),
  clearAccount: () => set((state) => ({ ...state, account: [] }))
}))

export default useUserContext

