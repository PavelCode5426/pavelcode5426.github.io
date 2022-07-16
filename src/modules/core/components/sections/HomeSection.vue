<script setup lang="ts">
import BannerContent from '~/modules/core/components/banners/BannerContent.vue'
</script>

<template>
  <section class="banner_section full_screen parallax_bg overlay_bg_blue_90" data-parallax-bg-image="assets/images/banner_img.jpg">
    <div class="banner_slide_content">
      <div class="container">
        <!-- STRART CONTAINER -->
        <div class="row align-items-center">
          <div class="col-xl-6">
            <banner-image />
          </div>
          <div class="col-xl-6 order-xl-first">
            <banner-content />
          </div>
        </div><!-- END CONTAINER -->
      </div>
      <a href="#about" class="down down_white page-scroll">
        <span class="mouse"><span /></span>
      </a>
    </div>
  </section>
</template>

