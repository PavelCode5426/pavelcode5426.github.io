<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <div class="bottom_footer border_top_tran">
    <div class="container">
      <div class="row">
        <slot>
          <div class="col-12">
            <p class="copyright m-0 text-center">
              © {{ currentYear }} Todos los Derechos Reservados
            </p>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
