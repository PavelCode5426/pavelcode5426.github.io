import { defineStore } from 'pinia'

export interface SiteStore {
  isLoading: boolean
}

export const initialState: SiteStore = {
  isLoading: true,
}

const siteStore = defineStore('site', {
  state: () => initialState,
})

export default siteStore
