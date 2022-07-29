<script setup lang="ts">
interface TimelineTitleProps {
  title: String
  icon: {
    type: String
    required: false
  }
}

const props = defineProps<TimelineTitleProps>()
</script>

<template>
  <div class="timeline_title">
    <i v-if="icon" :class="icon" />
    <h4>{{ title }}</h4>
  </div>
</template>
