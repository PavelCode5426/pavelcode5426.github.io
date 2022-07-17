<script setup lang="ts">
import { personalInformation } from '~/data'

const { phone, email } = personalInformation
const phoneForCall = phone.replace(' ', '')
</script>

<template>
  <ul class="contact_info contact_info_light list_none">
    <li>
      <span class="ti-mobile" />
      <a :href="`tel:${phoneForCall}`">{{ phone }}</a>
    </li>
    <li>
      <span class="ti-email" />
      <a :href="`mailto:${email}`">{{ email }}</a>
    </li>
  </ul>
</template>
