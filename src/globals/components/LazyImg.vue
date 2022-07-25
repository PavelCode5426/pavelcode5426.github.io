<script setup lang="ts">
import { emit, onMountedHook } from '~/globals/composables/useLazyLoad'
import { ThumbnailConverterImage } from '~/helpers/lazy.load'

interface LazyImageProps {
  dataSrc: {
    type: String
    required: true
  }
  dataSrcSet: {
    type: String
    required: false
  }
}

const props = defineProps<LazyImageProps>()
const { dataSrc } = props
let dataSrcSet: string

if (props.dataSrcSet === undefined) {
  const converter = new ThumbnailConverterImage()
  dataSrcSet = converter.generateThumbnail(dataSrc)
}

onMountedHook()
</script>

<template>
  <img
    class="lazyLoad lozad"
    :data-src="dataSrc"
    :src="dataSrcSet"
  >
</template>

<style>
</style>
