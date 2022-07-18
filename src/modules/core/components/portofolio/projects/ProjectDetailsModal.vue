<script setup lang="ts">
import { literalCategories } from '~/helpers/utils'
import type Project from '~/data/models/Project'

interface ProjectDetailsModal {
  project: Project
}

const props = defineProps<ProjectDetailsModal>()
const { text, date, link, categories, name, photos, clientName } = props.project

const { asNames: literalCategoriesNames } = literalCategories(categories)
</script>

<template>
  <div class="portfolio_modal modal fade">
    <div class="modal-dialog modal-xl modal-dialog-centered">
      <div class="modal-content bg_black3 scroll_white">
        <div class="modal-body">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
          <div class="row">
            <div class="col-lg-8">
              <div class="carousel_slider owl-carousel owl-theme" data-margin="20" data-dots="false" data-loop="true" data-nav="true" data-autoplay="true" data-items="1">
                <div v-for="photo in photos" class="item">
                  <img :src="photo">
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <ul class="list_none portfolio_info_box pr_info_text_white">
                <li><span class="text-uppercase">Cliente</span>{{ clientName }}</li>
                <li><span class="text-uppercase">Fecha</span>{{ date }}</li>
                <li><span class="text-uppercase">Categorias</span>{{ literalCategoriesNames }}</li>
                <li><span class="text-uppercase">Enlace</span><a class="text-white" :href="link">{{ link }}</a></li>
                <!--                <li> -->
                <!--                  <share-in-social-medias /> -->
                <!--                </li> -->
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div class="pf_content text_white">
                <div class="heading_s1">
                  <h2>{{ name }}</h2>
                </div>
                <p class="text-white">
                  {{ text }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
