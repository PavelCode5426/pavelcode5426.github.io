<script setup lang="ts">
import { personalInformation } from '~/data'

const { cvLink } = personalInformation
</script>

<template>
  <a download :href="cvLink">
    <Button
      data-animation="fadeInLeft"
      data-animation-delay="0.05s"
      icon="ion-android-download"
      text="Descargar CV"
    />
  </a>
</template>
