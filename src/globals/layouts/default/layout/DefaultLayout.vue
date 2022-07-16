<script setup lang="ts">
import { storeToRefs } from 'pinia'
import SiteStore from '~/globals/stores/site.store'

const siteStore = SiteStore()
const { isLoading } = storeToRefs(siteStore)
</script>

<template>
  <loader v-if="isLoading" />
  <Header />
  <page-content />
</template>
