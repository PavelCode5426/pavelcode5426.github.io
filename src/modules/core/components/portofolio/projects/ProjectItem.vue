<script setup lang="ts">
import type Project from '~/data/models/Project'
import { literalCategories } from '~/helpers/utils'

interface ProjectItemProps {
  project: Project
}

const props = defineProps<ProjectItemProps>()
const emit = defineEmits(['onPreviewClick'])
const { categories, name, photos } = props.project

const { asClass: literalCategoriesClass, asNames: literalCategoriesNames } = literalCategories(categories)
</script>

<template>
  <li class="grid_item" :class="literalCategoriesClass">
    <div class="portfolio_item link-cursor" @click="emit('onPreviewClick')">
      <a class="image_link">
        <lazy-img :data-src="photos[0]" />
      </a>
      <div class="portfolio_content">
        <h5>{{ name }}</h5>
        <p>{{ literalCategoriesNames }}</p>
      </div>
    </div>
  </li>
</template>
