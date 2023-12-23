<template>
  <c_header />
  <slot/>
  <c_footer />
</template>

<script setup lang="ts">
  import c_header from "@/layouts/c-header.vue";
  import c_footer from "@/layouts/c-footer.vue";
</script>


<style lang="scss" scoped>
  // @use "@/assets/sass/helpers/mixins" as *;
  // @use "@/assets/sass/helpers/functions" as *;
</style>
