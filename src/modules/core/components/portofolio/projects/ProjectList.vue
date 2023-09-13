<script setup lang="ts">
import { defineProps } from 'vue'
import { defineEmits } from 'vue-demi'
import type Project from '~/data/models/Project'

const { projects } = defineProps<{ projects: Project[] }>()
defineEmits<{ (e: 'preview', project: Project): void }>()
</script>

<template>
  <ul
    class="list_none gutter_medium work_col2 portfolio_gallery portfolio_style1 animation masonry"
    data-animation="fadeInUp" data-animation-delay="0.04s"
  >
    <project-item
      v-for="(project, index) in projects" :key="index" :project="project"
      @click="() => $emit('preview', project)"
    />
  </ul>
</template>
