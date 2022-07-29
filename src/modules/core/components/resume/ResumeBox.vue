<script setup lang="ts">
import type Resume from '~/data/models/Resume'

interface ResumeBoxProps {
  resume: Resume
}
const props = defineProps<ResumeBoxProps>()
const { name, secondaryName, time, description } = props.resume
</script>

<template>
  <p><span class="text_default">{{ time }}</span> {{ secondaryName }}</p>
  <h4>{{ name }}</h4>
  <hr v-if="description">
  <p>{{ description }}</p>
</template>
