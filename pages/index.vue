<template>
  <div>
    <h1>PaGe: HOME</h1><hr>

    <h1>welcome {{ lastName }}</h1>
    <UButton
      :label="(isloading && `Loading...`) || `Don...`"
      :loading="isloading"
      :disabled="isloading"
      @click="btn__click()"
    />
    <UCard  />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

let isloading = ref(false);
let lastName = ref("Hussein");

const btn__click =async e=>{
  // isloading.value = true;
  // await sleep(50000);
  console.log('btn__clicked');
  // isloading.value = false;
}

onMounted(async (e) => {

});
</script>


<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;


</style>
