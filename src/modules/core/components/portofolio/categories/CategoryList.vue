<template>
  <ul class="list_none grid_filter filter_tab1 filter_white animation" data-animation="fadeInUp" data-animation-delay="0.04s">
    <category-item :category="{ id: '*', name: 'Todos' }" :is-current="true" />
    <slot />
  </ul>
</template>
