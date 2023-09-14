<script setup lang="ts">
import { defineProps } from 'vue'
import { defineEmits } from 'vue-demi'
import type Project from '~/data/models/Project'

const { projects } = defineProps<{ projects: Project[] }>()
defineEmits<{ (e: 'preview', project: Project): void }>()
</script>

<template>
  <transition-group
    name="list"
    tag="ul"
    class="list_none gutter_medium work_col2 portfolio_gallery portfolio_style1 animation masonry"
    data-animation="fadeInUp" data-animation-delay="0.04s"
  >
    <project-item
      v-for="(project, index) in projects" :key="index" :project="project"
      @click="() => $emit('preview', project)"
    />
  </transition-group>
</template>

<style scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
</style>
