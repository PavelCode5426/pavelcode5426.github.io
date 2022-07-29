<script setup lang="ts">
import { educationResume, experienceResume } from '~/data'
</script>

<template>
  <section-container class="bg_black4" title="Resumen">
    <div class="row animation" data-animation="fadeInUp" data-animation-delay="0.02s">
      <resume-timeline title="Educacion" icon="fas fa-graduation-cap" description="asd" :resumens="educationResume" class="col-md-6" />
      <resume-timeline title="Experiencia Laboral" icon="fas fa-code" description="asd" :resumens="experienceResume" class="col-md-6" />
    </div>
  </section-container>
</template>
