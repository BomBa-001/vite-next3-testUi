<template>
  <div
    v-if="isLoading"
    class="mt-20 w-full flex items-center justify-center mx-auto"
  >
    <div class="text-white mx-auto flex flex-col items-center justify-center">
      <Icon name="eos-icons:bubble-loading" size="48" color="#f00" />
      <h1>{{ conterLoad }}</h1>
      <div class="w-full mt-1">Loading...</div>
    </div>
  </div>

  <!-- icon py nuxt-icon:- 
    <Icon name="eos-icons:bubble-loading" size="48" color="#f00" />
  -->
  <!-- icon py ui:-
    <UIcon name="i-heroicons-home" />
  -->

  <br />
  <hr />
  <br />

  <UButton loading>Button</UButton>

  <VitePwaManifest />
  <NuxtPage />
</template>

<script setup lang="ts">
// #region {import} --- --- --- ---
import { ref, onMounted } from "vue";
// #endregion --- --- --- --- ---

// #region {data} --- --- --- ---
let isLoading = ref(true);
let conterLoad = ref(0);
// #endregion --- --- --- --- ---

// #region {func} --- --- --- ---
onMounted(async () => {
  await delay((e) => conterLoad.value++, 5000);

  isLoading.value = false;
});

// const func_load = async (e) => {
//   return await promise((res) => setTimeout(() => {

//   }, 5000));
// };
// const sleepFunc = (function:func,sleepTime=1000) =>
//   promise((f) => setTimeout(() =>f, sleepTime));

const delay = (func: f, ms: number) => new Promise(() => setTimeout(f, ms));

// #endregion --- --- --- --- ---
</script>
