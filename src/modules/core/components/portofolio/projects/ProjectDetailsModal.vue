<script setup lang="ts">
import { defineProps } from 'vue'
import { literalCategories } from '~/helpers/utils'
import type Project from '~/data/models/Project'

interface ProjectDetailsModal {
  project: Project
}

const { project } = defineProps<ProjectDetailsModal>()
const literalCategoriesNames = () => literalCategories(project.categories).asNames
</script>

<template>
  <portofolio-modal id="project_modal" v-bind="$attrs">
    <div class="row">
      <div class="col-lg-8">
        <el-carousel :interval="4000" style="height: 100%">
          <el-carousel-item v-for="(photo, index) in project.photos" :key="index">
            <p-image
              :src="photo" :zoom-rate="1.2"
              :preview-src-list="project.photos"
              :initial-index="index"
              preview-teleported
            />
          </el-carousel-item>
        </el-carousel>
      </div>
      <div class="col-lg-4">
        <ul class="list_none portfolio_info_box pr_info_text_white">
          <li v-if="project?.clientName">
            <span class="text-uppercase">Cliente</span>{{ project.clientName }}
          </li>
          <li><span class="text-uppercase">Fecha</span>{{ project.date }}</li>
          <li><span class="text-uppercase">Categorias</span>{{ literalCategoriesNames() }}</li>
          <li v-if="project?.link">
            <span class="text-uppercase">Enlace</span><a
              class="text-white" target="_blank"
              :href="project?.link"
            >{{ project.link }}</a>
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
          <div v-if="project?.text" class="text-white text-justify" v-html="project?.text" />
        </div>
      </div>
    </div>
  </portofolio-modal>
</template>
