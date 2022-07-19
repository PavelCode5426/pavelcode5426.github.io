import { defineEmits, onMounted } from 'vue-demi'
import LazyLoad from '~/helpers/lazy.load'

export const emit = defineEmits(['loaded'])

export const onMountedHook = () => onMounted(() => {
  LazyLoad.getInstance().observe()
})

export default {
  emit,
  onMountedHook,
}
