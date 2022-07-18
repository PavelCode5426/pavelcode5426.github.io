<script setup lang="ts">
import type SocialMedia from '~/data/models/SocialMedia'

interface SocialMediaProps {
  socialMedia: { type: SocialMedia }
}
const props = defineProps<SocialMediaProps>()
const { icon, name, link, color } = props.socialMedia
</script>

<template>
  <li>
    <a :href="link" :class="color">
      <i :class="icon" />
    </a>
  </li>
</template>
