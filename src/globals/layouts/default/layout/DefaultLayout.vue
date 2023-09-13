<script setup lang="ts">
import { storeToRefs } from 'pinia'
import SiteStore from '~/globals/stores/site.store'
import Footer from '~/globals/layouts/default/components/footer/Footer.vue'
import Preloader from '~/globals/layouts/default/components/Preloader.vue'

const siteStore = SiteStore()
const { isLoading } = storeToRefs(siteStore)

onMounted(() => {
  window.addEventListener('load', () => isLoading.value = false)
  // setTimeout(() => isLoading.value = false, 1000)
})
</script>

<template>
  <transition>
    <Preloader v-if="isLoading" />
  </transition>
  <Header />
  <PageContent />
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
