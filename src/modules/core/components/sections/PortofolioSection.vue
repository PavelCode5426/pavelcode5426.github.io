<script setup lang="ts">
import { ref } from 'vue-demi'
import { projects as dataProjects, projectCategories } from '~/data'
import type Project from '~/data/models/Project'
import type Category from '~/data/models/Category'

const selectedProject = ref<Project | undefined>(undefined)
const projects = ref<Project[]>(dataProjects)
const show = ref(false)

function projectPreviewHandler(project: Project) {
  show.value = true
  selectedProject.value = project
}

function categorySelectedHandler(item: Category) {
  if (item.id === '*')
    projects.value = dataProjects
  else
    projects.value = dataProjects.filter(project => project.categories.findIndex(i => i?.id === i.id) >= 0)
}
</script>

<template>
  <section-container
    class="bg_black3" title="Proyectos"
    description="Descubre cómo mis habilidades de desarrollo han llevado a cabo proyectos ambiciosos y desafiantes con éxito"
  >
    <div class="row mb-4 mb-md-5">
      <div class="col-md-12 text-center">
        <category-list @selected="categorySelectedHandler" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <transition-group>
          <project-list :projects="projects" @preview="projectPreviewHandler" />
        </transition-group>
      </div>
    </div>
    <project-details-modal v-model="show" :project="selectedProject" @close="selectedProject = undefined" />
  </section-container>
</template>
