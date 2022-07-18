<script setup lang="ts">
import type { NavLinkProps } from '~/globals/layouts/default/composables/useNavLink'

const { href, customClass, name } = defineProps<NavLinkProps>()
</script>

<template>
  <li class="dropdown">
    <a class="dropdown-toggle nav-link page-scroll" :href="href" data-toggle="dropdown" :class="customClass">
      {{ name }}
    </a>
    <div class="dropdown-menu dropdown-reverse">
      <ul>
        <slot />
      </ul>
    </div>
  </li>
</template>
