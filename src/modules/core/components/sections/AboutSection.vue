<script setup lang="ts">
import { personalInformation } from '~/data'
</script>

<template>
  <section class="bg_black3">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="about_img3 animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <img :src="personalInformation.photos[1]" alt="about_img3">
            <div class="border_shape2 shape_white" />
          </div>
        </div>
        <div class="col-md-7">
          <div class="about_info text_white animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <div class="heading_s1 mb-3 heading_light">
              <h2>Sobre Mi</h2>
            </div>
            <p class="text-white">
              {{ personalInformation.aboutMe }}
            </p>
            <hr>
            <information-list>
              <information-item label="Teléfono" :value="personalInformation.phone" />
              <information-item label="Correo" :value="personalInformation.email" />
              <information-item label="Fecha de Nacimiento" :value="personalInformation.birthdate" />
            </information-list>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

