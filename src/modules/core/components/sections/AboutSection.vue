<script setup lang="ts">
import { personalInformation } from '~/data'
</script>

<template>
  <section-container class="bg_black3">
    <div class="row">
      <div class="col-md-5">
        <div class="about_img3 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
          <lazy-img :data-src="personalInformation.photos[1]" />
          <div class="border_shape2 shape_white" />
        </div>
      </div>
      <div class="col-md-7">
        <div class="about_info text_white animation" data-animation="fadeInUp" data-animation-delay="0.02s">
          <div class="heading_s1 mb-3 heading_light">
            <h2>Sobre Mi</h2>
          </div>
          <p class="text-white text-justify">
            {{ personalInformation.aboutMe }}
          </p>
          <hr>
          <information-list>
            <information-item label="Teléfono" :value="personalInformation.phone" />
            <information-item label="Correo" :value="personalInformation.email" />
            <information-item label="Fecha de Nacimiento" :value="personalInformation.birthdate" />
          </information-list>
          <br>
          <social-medias />
        </div>
      </div>
    </div>
  </section-container>
</template>

