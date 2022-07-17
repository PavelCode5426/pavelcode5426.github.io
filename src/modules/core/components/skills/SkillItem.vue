<script setup lang="ts">
interface SkillProps {
  name: { type: string }
  percent: { type: number }
}

const { name, percent } = defineProps<SkillProps>()

let literalLevel = ''

if (percent <= 30)
  literalLevel = 'Nivel Basico'
else if (percent <= 60)
  literalLevel = 'Familiarizado'
else if (percent <= 85)
  literalLevel = 'Competente'
else
  literalLevel = 'Experto'
</script>

<template>
  <div class="skill_box box_dark text_white">
    <div class="skill_content pr_style1">
      <div class="progrees_bar_text">
        <b>{{ name }}</b>
        <br>
        <span class="text-sm">{{ literalLevel }}</span>
      </div>
      <div class="progress">
        <div class="count_pr">
          <span class="counter">{{ percent }}</span>%
        </div>
        <div class="progress-bar d-block" role="progressbar" :aria-valuenow="percent" aria-valuemin="0" aria-valuemax="100" :style="{ width: `${percent}%` }" />
      </div>
    </div>
  </div>
</template>
