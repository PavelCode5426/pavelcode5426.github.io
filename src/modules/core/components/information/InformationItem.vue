<script setup lang="ts">
const props = defineProps<{
  title: string
  text: string
}>()
</script>

<template>
  <li>
    <span class="title" v-text="title" />
    <p v-text="text" />
  </li>
</template>
