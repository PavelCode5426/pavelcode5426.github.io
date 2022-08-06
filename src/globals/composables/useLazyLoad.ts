import type { ComponentInternalInstance } from 'vue-demi'
import { defineEmits, onMounted } from 'vue-demi'
import LazyLoad from '~/helpers/lazy.load'

export const emit = defineEmits(['loaded'])

export const onMountedHook = (target?: ComponentInternalInstance | null) => onMounted(() => {
  LazyLoad.getInstance().observe()
}, target)

export default {
  emit,
  onMountedHook,
}
