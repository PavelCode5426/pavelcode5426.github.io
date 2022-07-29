<script setup lang="ts">
import { literalCategories, makeid, updateCarousel } from '~/helpers/utils'
import type Project from '~/data/models/Project'
import SliderItemCarousel from '~/modules/core/components/shared/carousel/SliderItemCarousel.vue'
import SliderCarousel from '~/modules/core/components/shared/carousel/SliderCarousel.vue'

interface ProjectDetailsModal {
  project: Project
}

const props = defineProps<ProjectDetailsModal>()
const emit = defineEmits(['closeModal'])
const isLoading = ref<boolean>(true)

const literalCategoriesNames = () => literalCategories(props.project.categories).asNames
computed(literalCategoriesNames)
const carouselID: string = makeid(5)

function onMountedAndUpdate() {
  updateCarousel(`#${carouselID}`)
  jQuery('#project_modal').on('hidden.bs.modal', emit('closeModal'))
  jQuery('#project_modal').modal('show')
}

onMounted(onMountedAndUpdate)
onUpdated(onMountedAndUpdate)
onBeforeUpdate(() => {
  isLoading.value = true
})
</script>

<template>
  <portofolio-modal id="project_modal">
    <div class="row">
      <div class="col-lg-8">
        <slider-carousel :id="carouselID" data-margin="20" data-dots="true" data-loop="true" data-nav="true" data-autoplay="true" data-items="1">
          <slider-item-carousel v-for="photo in project.photos">
            <lazy-img :data-src="photo" />
          </slider-item-carousel>
        </slider-carousel>
      </div>
      <div class="col-lg-4">
        <ul class="list_none portfolio_info_box pr_info_text_white">
          <li v-if="project.clientName">
            <span class="text-uppercase">Cliente</span>{{ project.clientName }}
          </li>
          <li><span class="text-uppercase">Fecha</span>{{ project.date }}</li>
          <li><span class="text-uppercase">Categorias</span>{{ literalCategoriesNames() }}</li>
          <li v-if="project.link">
            <span class="text-uppercase">Enlace</span><a class="text-white" target="_blank" :href="project.link">{{ project.link }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="pf_content text_white">
          <div class="heading_s1">
            <h2>{{ project.name }}</h2>
          </div>
          <div class="text-white text-justify" v-html="project.text" />
        </div>
      </div>
    </div>
  </portofolio-modal>
</template>
