<script setup lang="ts">
import { personalInformation } from '~/data'
</script>

<template>
  <div class="banner_content text_white text-center text-xl-left">
    <h2 class="animation" data-animation="fadeInUp" data-animation-delay="0.02s">
      Hola, Soy {{ personalInformation.name }}
    </h2>
    <div id="typed-strings" class="d-none">
      <b v-for="profesion in personalInformation.professions">{{ profesion }}</b>
    </div>
    <h4 class="animation" data-animation="fadeInUp" data-animation-delay="0.03s">
      Soy <span id="typed-text" class="text_default" />
    </h4>
    <p class="animation" data-animation="fadeInUp" data-animation-delay="0.04s">
      {{ personalInformation.presentationPhrase }}
    </p>
    <download-c-v-button />
  </div>
</template>
