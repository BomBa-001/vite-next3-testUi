<template>
  <div v-if="isloading" class="loading">
    <Icon name="eos-icons:bubble-loading" size="1em" />
    <slot />
  </div>
</template>

<script setup lang="ts">
// const props = defineProps(['isloading'])

defineProps<{
  isloading?: boolean;
}>();
</script>

<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;

.light .loading {
  // background-color: rhsla(c30, $s: 30%, $l: 4%, $a: 0.8); //#070D07cc
  background-color: rhsla(c30, $l: 96%, $a: 0.2); //#eefcee33
}
.dark .loading {
  // background-color: rhsla(c30, $s: 70%, $l: 96%, $a: 0.2); //#eefcee33
  background-color: rhsla(c30, $l: 4%, $a: 0.8); //#070D07cc
}

.loading {
  $loading-w: 100%;
  width: $loading-w;
  height: $loading-w;
  // background-color: $bg-loading;
  // background-color: red;

  @extend .d-flex-c;
  gap: 25%;
  position: fixed;
  z-index: 999;

  svg {
    position: relative;
    color: $c30;
    translation: all 0.3s ease 0.5s;
    font-size: 800%;
    text-shadow: 0 0 50px var(--csuccess), 0 0 100px var(--csuccess),
      0 0 150px var(--csuccess), 0 0 200px var(--csuccess),
      0 0 250px var(--csuccess);
    animation: animate 5s linear infinite;
  }
}

@keyframes animate {
  0% {
    filiter: hue-rotate(0deg);
    -webkit-filter: hue-rotate(0deg);
  }
  100% {
    filiter: hue-rotate(360deg);
    -webkit-filter: hue-rotate(360deg);
  }
}
</style>
