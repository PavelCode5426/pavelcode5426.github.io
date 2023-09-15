<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'PavelCode5426 | Portafolio',
  meta: [
    {
      name: 'description',
      content: 'Portafolio de Pavel Perez',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <!--  <router-view /> -->
  <DefaultLayout />
</template>
