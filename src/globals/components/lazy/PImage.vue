<script setup lang="ts">

</script>

<template>
  <transition>
    <el-image v-bind="$attrs">
      <template #placeholder>
        <loader />
      </template>
      <template #error>
        <p>Error</p>
      </template>
    </el-image>
  </transition>
</template>

<style scoped>

</style>
