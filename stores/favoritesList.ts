import { defineStore } from 'pinia'

export const useMyFavoritesListStore = defineStore({
  id: 'myFavoritesListStore',
  state: () => ({
    favoritesList: [],
  }),
  actions: {},
  persist: {
    storage: persistedState.localStorage,
  },
})
