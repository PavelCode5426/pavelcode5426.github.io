<script setup lang="ts">
import { ref } from 'vue-demi'
import { projectCategories } from '~/data'
import type Category from '~/data/models/Category'

const emit = defineEmits<{ (e: 'selected', category: Category): void }>()
const selectedCategory = ref<Category>({ id: '*', name: 'Todos' })

function clickItemHandler(item: Category) {
  if (selectedCategory.value.id !== item.id) {
    selectedCategory.value = item
    emit('selected', item)
  }
}
</script>

<template>
  <ul class="d-flex flex-wrap justify-content-center animation" data-animation="fadeInUp" data-animation-delay="0.04s">
    <category-item
      :category="{ id: '*', name: 'Todos' }" :is-current="selectedCategory.id === '*'"
      @click="clickItemHandler"
    />
    <category-item
      v-for="(category, index) in projectCategories" :key="index" :category="category"
      :is-current="selectedCategory.id === category.id"
      @click="clickItemHandler"
    />
  </ul>
</template>
