<template>
  <div v-if="isloading" class="loading">
    <Icon name="eos-icons:bubble-loading" size="1em" />
    <slot/>
  </div>
</template>

<script setup lang="ts">
  // const props = defineProps(['isloading'])

  defineProps<{
    isloading?: boolean
  }>()
</script>


<style lang="scss" scoped>
  @use "@/assets/sass/helpers/mixins" as *;
  @use "@/assets/sass/helpers/functions" as *;

  .loading{
    $loading-w:100%;
    width: $loading-w;
    height: $loading-w;
    background-color: chsla(c30,$l:0.08,$a:0.8);//#070D07
    // background-color: red;

    @extend .d-flex-c;
    gap:25%;
    position: fixed;
    z-index: 999;

    svg{
      color: $c30;
      // color: chsla(c30,$l:1.7);
      font-size: 400%;
    }

  }

</style>
