import { defineStore } from 'pinia'

export interface SiteStore {
  isLoading: boolean
}

export const initialState: SiteStore = {
  isLoading: false,
}

const siteStore = defineStore('site', {
  state: () => initialState,
})

export default siteStore
