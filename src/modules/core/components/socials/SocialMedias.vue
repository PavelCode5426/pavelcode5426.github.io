<script setup lang="ts">
import { socialMedias } from '~/data'
</script>

<template>
  <social-medias-list>
    <social-media-item v-for="socialMedia in socialMedias" :social-media="socialMedia" />
  </social-medias-list>
</template>
