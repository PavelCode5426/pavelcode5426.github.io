<script setup lang="ts">
import { storeToRefs } from 'pinia'
import SiteStore from '~/globals/stores/site.store'

const siteStore = SiteStore()
const { isLoading } = storeToRefs(siteStore)

onMounted(() => {
  window.addEventListener('load', () => setTimeout(() => isLoading.value = false, 400))
})
</script>

<template>
  <transition>
    <loading-page v-if="isLoading" />
  </transition>
  <Header />
  <page-content />
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 700ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
