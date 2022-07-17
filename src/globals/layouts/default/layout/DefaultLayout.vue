<script setup lang="ts">
import { storeToRefs } from 'pinia'
import SiteStore from '~/globals/stores/site.store'

const siteStore = SiteStore()
const { isLoading } = storeToRefs(siteStore)

setTimeout(() => isLoading.value = false, 1000)
</script>

<template>
  <transition>
    <loader v-if="isLoading" />
  </transition>
  <Header />
  <page-content />
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
