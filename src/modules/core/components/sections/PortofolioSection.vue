<script setup lang="ts">
import { projectCategories, projects } from '~/data'
import type Project from '~/data/models/Project'
import EmptyContent from '~/modules/core/components/shared/EmptyContent.vue'

const selectedProject = ref<Project | undefined>(undefined)
selectedProject.value = projects.length > 0 ? projects[0] : undefined

function previewProject(index: number) {
  selectedProject.value = projects[index]
  jQuery('#project_modal').modal('show')
}
</script>

<template>
  <section class="pb_70 bg_black4">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-6 col-lg-7 col-md-9 text-center">
          <div class="heading_s1 heading_light animation" data-animation="fadeInUp" data-animation-delay="0.02s">
            <h2>Proyectos</h2>
          </div>
          <p class="animation text-white" data-animation="fadeInUp" data-animation-delay="0.03s">
            Texto de Proyectos
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="cleafix small_divider" />
        </div>
      </div>
      <div class="row mb-4 mb-md-5">
        <div class="col-md-12 text-center">
          <category-list>
            <category-item v-for="category in projectCategories" :category="category" />
          </category-list>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <project-list>
            <project-item v-for="project, index in projects" :project="project" @onPreviewClick="previewProject(index)" />
          </project-list>
        </div>
      </div>
    </div>
    <project-details-modal v-if="selectedProject" id="project_modal" :project="selectedProject" />
  </section>
</template>
