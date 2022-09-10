<script setup lang="ts">
onMounted(() => {
})
</script>

<template>
  <ul class="grid_container gutter_medium work_col2 portfolio_gallery portfolio_style1 animation masonry" data-animation="fadeInUp" data-animation-delay="0.04s">
    <li class="grid-sizer" />
    <slot>
      <empty-content />
    </slot>
  </ul>
</template>
