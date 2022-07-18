<script setup lang="ts">
import type Category from '~/data/models/Category'

interface CategoryProps {
  category: { type: Category }
  isCurrent: { type: Boolean;default: false }
}

const props = defineProps<CategoryProps>()
const { id, name } = props.category

let literalID = '*'
if (id !== '*')
  literalID = `.${id}`
</script>

<template>
  <li>
    <a href="#" :class="{ current: isCurrent }" :data-filter="literalID">{{ name }}</a>
  </li>
</template>
