<script setup lang="ts">
import { skills } from '~/data'
</script>

<template>
  <section-container class="counter_wrap bg_black4" title="Habilidades">
    <div class="row animation" data-animation="fadeInUp" data-animation-delay="0.04s">
      <div class="col-md-12">
        <skill-list>
          <skill-item v-for="skill in skills" :name="skill.name" :percent="skill.percent" />
        </skill-list>
      </div>
    </div>
  </section-container>
</template>

