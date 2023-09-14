<script setup lang="ts">
import type Project from '~/data/models/Project'
import { literalCategories } from '~/helpers/utils'

interface ProjectItemProps {
  project: Project
}

const props = defineProps<ProjectItemProps>()
const { categories, name, photos } = props.project

const { asClass: literalCategoriesClass, asNames: literalCategoriesNames } = literalCategories(categories)
</script>

<template>
  <li class="col-md-6" :class="literalCategoriesClass">
    <div class="portfolio_item link-cursor">
      <a class="image_link">
        <p-image :lazy="true" :src="photos[0]" style="height: 250px;width: 100%;aspect-ratio: 16/9" />
      </a>
      <div class="portfolio_content">
        <h5 v-text="name" />
        <p v-text="literalCategoriesNames" />
      </div>
    </div>
  </li>
</template>
