<script setup lang="ts">
interface SectionContainerProps {
  title: {
    type: String
    required: false
  }
  description: {
    type: String
    required: false
  }
}

defineProps<SectionContainerProps>()
</script>

<template>
  <section class="pb_70">
    <div class="container">
      <div v-if="title || description" class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-9 text-center">
          <div class="heading_s1 heading_light animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <h2>{{ title }}</h2>
          </div>
          <p class="animation text-white" data-animation="fadeInUp" data-animation-delay="0.02s">
            {{ description }}
          </p>
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>
