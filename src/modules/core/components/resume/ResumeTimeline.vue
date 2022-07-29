<script setup lang="ts">
import type Resume from '~/data/models/Resume'

interface ResumeTimelineProps {
  title: String
  description: {
    type: String
    required: false
  }
  icon: {
    type: String
    required: false
  }
  resumens: Resume[]
}

const props = defineProps<ResumeTimelineProps>()
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
