<script setup lang="ts">

</script>

<template>
  <el-dialog
    class="bg_black3" width="70%" append-to-body center close-on-press-escape destroy-on-close
    :close-on-click-modal="false"
  >
    <slot />
  </el-dialog>
</template>
