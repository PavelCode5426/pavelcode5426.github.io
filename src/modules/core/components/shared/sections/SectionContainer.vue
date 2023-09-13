<script setup lang="ts">
interface SectionContainerProps {
  title: string
  description: string
}

const { title, description } = defineProps<SectionContainerProps>()
</script>

<template>
  <section class="pb_70">
    <div class="container">
      <div v-if="title || description" class="row justify-content-center">
        <div class="text-center">
          <div class="heading_s1 heading_light animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <h2 v-text="title" />
          </div>
          <p class="animation text-white" data-animation="fadeInUp" data-animation-delay="0.02s" v-text="description" />
        </div>
      </div>
      <slot />
    </div>
  </section>
</template>
