<script setup lang="ts">
import { defineEmits } from 'vue-demi'
import type Category from '~/data/models/Category'

interface CategoryProps {
  category: Category
  isCurrent: boolean
}

const { category, isCurrent = false } = defineProps<CategoryProps>()
const emit = defineEmits<{
  (e: 'click', item: Category): void
}>()

const { id, name } = category
</script>

<template>
  <Button class="mx-1 btn-sm" :outline="!isCurrent" :text="name" @click="emit('click', category)" />
</template>
