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
    :data-srcset="dataSrcSet"
  >
</template>

<style scoped>
@keyframes activate-blur{
  0% {filter: blur(0px);}
  100% {filter: blur(4px);}
}
@keyframes desactivate-blur{
  0% {filter: blur(4px);}
  100% {filter: blur(0px);}
}

.lazyLoad:not([data-loaded="true"]){
  filter: blur(4px);
}
.lazyLoad[data-loaded="true"]{
  display: inline;
  animation: desactivate-blur 1.5s;
}
</style>
