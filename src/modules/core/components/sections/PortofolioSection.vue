<script setup lang="ts">
import { projectCategories, projects } from '~/data'
import type Project from '~/data/models/Project'

const selectedProject = ref<Project | undefined>(undefined)
function previewProject(index: number) {
  selectedProject.value = projects[index]
}
</script>

<template>
  <section-container class="bg_black3" title="Proyectos" description="...">
    <div class="row">
      <div class="col-12">
        <div class="cleafix small_divider" />
      </div>
    </div>
    <div class="row mb-4 mb-md-5">
      <div class="col-md-12 text-center">
        <category-list>
          <category-item v-for="(category, index) in projectCategories" :key="index" :category="category" />
        </category-list>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <project-list>
          <project-item v-for="(project, index) in projects" :project="project" @click="previewProject(index)" />
        </project-list>
      </div>
    </div>
  </section-container>
  <project-details-modal v-if="selectedProject" :project="selectedProject" @closeModal="selectedProject = undefined" />
</template>
