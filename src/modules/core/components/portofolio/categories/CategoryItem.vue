<script setup lang="ts">
import type Category from '~/data/models/Category'

interface CategoryProps {
  category: Category
  isCurrent: { type: Boolean;default: false }
}

const props = defineProps<CategoryProps>()

const { id, name } = props.category
const literalID = id === '*' ? id : `.${id}`
</script>

<template>
  <li>
    <a href="#" class="mx-1" :class="{ current: isCurrent }" :data-filter="literalID">{{ name }}</a>
  </li>
</template>
