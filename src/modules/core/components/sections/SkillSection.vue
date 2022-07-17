<script setup lang="ts">
import { skills } from '~/data'
</script>

<template>
  <section class="counter_wrap bg_black4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-9 text-center">
          <div class="heading_s1 heading_light animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <h2>Mis Habilidades</h2>
          </div>
          <p class="animation text-white" data-animation="fadeInUp" data-animation-delay="0.03s">
            TExto de habilidades
          </p>
        </div>
      </div>
      <div class="row animation" data-animation="fadeInUp" data-animation-delay="0.04s">
        <div class="col-md-12">
          <skill-list>
            <skill-item v-for="skill in skills" :name="skill.name" :percent="skill.percent" />
          </skill-list>
        </div>
      </div>
    </div>
  </section>
</template>

