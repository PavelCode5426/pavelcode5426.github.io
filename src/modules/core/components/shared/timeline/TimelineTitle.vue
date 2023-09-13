<script setup lang="ts">
import type { TimelineTitleProps } from '~/modules/core/components/shared/timeline/props'

const { icon, title } = defineProps<TimelineTitleProps>()
</script>

<template>
  <div class="timeline_title">
    <i v-if="icon" :class="icon" />
    <h4>{{ title }}</h4>
  </div>
</template>
