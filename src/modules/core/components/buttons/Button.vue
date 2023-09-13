<script setup lang="ts">
import { defineProps } from 'vue'

const {
  outline = true,
  icon,
  text,
} = defineProps<{ outline: boolean; icon?: string; text: string }>()
</script>

<template>
  <button
    class="btn text-white btn-radius animation"
    :class="outline ? 'btn-outline-default' : 'btn-default'"
  >
    <i v-if="icon" :class="icon" /> {{ text }}
  </button>
</template>
