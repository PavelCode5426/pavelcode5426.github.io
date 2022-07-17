<script setup lang="ts">
import { personalInformation } from '~/data'
</script>

<template>
  <div class="image_banner animation" data-animation="fadeInUp" data-animation-delay="0.02s">
    <img :src="personalInformation.photos[0]">
    <div class="circle_bg1">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  </div>
</template>
