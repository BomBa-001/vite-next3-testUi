<template>
  <section class="content">

    <h1>PaGe: HOME</h1>

    <UButton
      :icon="ssg.isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
      color="gray"
      variant="ghost"
      aria-label="Theme"
      @click="ssg.isDark = !ssg.isDark"
    />

    <UToggle
    on-icon="i-heroicons-moon-20-solid"
    off-icon="i-heroicons-sun-20-solid"
    :model-value="ssg.isDark"
    @click="ssg.isDark = !ssg.isDark"
    size="md"
    />

    <h1>welcome {{ lastName }}</h1>

    <UButton
      :label="(isloading && `Loading...`) || `Don...`"
      :loading="isloading"
      :disabled="isloading"
      @click="btn__click()"
    />

    <UCard />
  </section>
</template>

<script setup>
//@ import Components:
//@ import Libraries:
import { ref, onMounted } from "vue";
//@ import stores:
const ssg = settingsGlobal();

//@ props:
//@ Data:

let isloading = ref(false);
let lastName = ref("Hussein");

//@ Function:
const btn__click = async (e) => {
  // isloading.value = true;
  // await sleep(50000);
  console.log("btn__clicked");
  // isloading.value = false;
};

//@ Method:
onMounted(async (e) => {
  // console.clear();
});

</script>

<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;
</style>
