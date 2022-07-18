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
    <div class="portfolio_item">
      <a href="#" class="image_link">
        <img :src="photos[0]" alt="image">
      </a>
      <div class="portfolio_content">
        <div class="link_container">
          <a :href="photos[0]" class="image_popup"><i class="ion-image" /></a>
          <a @click="emit('onPreviewClick')"><i class="ion-plus" /></a>
        </div>
        <h5><a @click="emit('onPreviewClick')">{{ name }}</a></h5>
        <p>{{ literalCategoriesNames }}</p>
      </div>
    </div>
  </li>
</template>
