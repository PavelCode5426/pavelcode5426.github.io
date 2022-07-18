<script setup lang="ts">
import type SocialMedia from '~/data/models/SocialMedia'

const socialMedias: SocialMedia[] = [
  { name: 'Instagram', icon: 'fab fa-instagram', link: '', color: 'text-white' },
  { name: 'GitHub', icon: 'fab fa-github', link: '', color: 'text-white' },
  { name: 'Telegram', icon: 'fab fa-telegram-plane', link: '', color: 'text-white' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', link: '', color: 'text-white' },
]
</script>

<template>
  <span class="text-uppercase">Comparte </span>
  <social-medias-list>
    <social-media-item v-for="socialMedia in socialMedias" :social-media="socialMedia" />
  </social-medias-list>
</template>
