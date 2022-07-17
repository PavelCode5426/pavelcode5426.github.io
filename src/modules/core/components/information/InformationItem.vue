<script setup lang="ts">
interface Props {
  label: {
    type: String
  }
  value: {
    type: String
  }
}

const props = defineProps<Props>()
</script>

<template>
  <li>
    <span class="title">{{ label }}</span>
    <p>{{ value }}</p>
  </li>
</template>
