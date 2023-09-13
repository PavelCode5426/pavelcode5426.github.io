<script setup lang="ts">
import type { ResumeTimelineProps } from '~/modules/core/components/resume/props'

const { title, description, icon, resumens } = defineProps<ResumeTimelineProps>()
</script>

<template>
  <div>
    <timeline-title :title="title" :description="description" :icon="icon" />
    <timeline>
      <timeline-content v-for="(resume, index) in resumens" :key="index">
        <resume-box :resume="resume" />
      </timeline-content>
    </timeline>
  </div>
</template>
