<template>
  <div class="skills skills_list_type scroll-bar">
    <slot>
      <empty-content />
    </slot>
  </div>
</template>

<style scoped>
.skills.scroll-bar{
max-height: 65vh;
}
</style>
