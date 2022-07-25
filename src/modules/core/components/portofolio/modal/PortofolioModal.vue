<template>
  <div class="modal fade">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content bg_black3 scroll_white">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
