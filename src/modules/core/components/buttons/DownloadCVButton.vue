<script setup lang="ts">
import { personalInformation } from '~/data'

const { cvLink } = personalInformation
</script>

<template>
  <a class="btn btn-outline-default text-white btn-radius animation" download :href="cvLink" data-animation="fadeInLeft" data-animation-delay="0.05s">
    <i class="ion-android-download" /> Descargar CV</a>
</template>
