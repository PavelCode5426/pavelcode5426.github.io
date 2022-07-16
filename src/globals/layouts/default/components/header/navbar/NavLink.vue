<script setup lang="ts">
import type { NavLinkProps } from '~/globals/layouts/default/composables/useNavLink'

const { href, customClass, name } = defineProps<NavLinkProps>()
</script>

<template>
  <li>
    <a class="nav-link page-scroll" :href="href" :class="customClass">{{ name }}</a>
  </li>
</template>
