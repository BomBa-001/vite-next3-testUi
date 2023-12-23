<template>
  <div class="app">
    <!-- <NuxtLayout> -->

      <!-- <VitePwaManifest /> -->

      <loadingScreen :isloading="isloading">
        <section>
          <h1>Hello BomBa</h1>
          <p>
            <Icon name="material-symbols:lock-clock-outline" size="1em" />
            End-to-end encrypted
            <!-- مشفرة من طرف إلى طرف -->
          </p>
          <c_footer />
        </section>
      </loadingScreen>

      <AuthLayout v-if="!isloading">
        <NuxtPage />
      </AuthLayout>  
      <!-- يوجد شرح لزيز ومفصل عن الروت

        https://www.youtube.com/watch?v=ukJD3Tbn9RU&ab_channel=GeekyShows


        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="about">About</NuxtLink>
      -->
    <!-- </NuxtLayout> -->
  </div>
</template>

<script setup>
//@ import Components:
import loadingScreen from "../components/loadingScreen.vue";
import c_footer from "@/layouts/c-footer.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";

//@ import Libraries:
import { ref, onMounted } from "vue";

//@ import stores:
// import { settingsGlobal } from "@/stores/settingsGlobal";
const ssg = settingsGlobal();

//@ props:
// const props = defineProps({name: Object,});

//@ Data:
const isloading = ref(true);


//@ Function:
// [ ]todo إرسال هذه المعادلات إلي ملف setingGlobale.js
const sleep = (t) =>
  new Promise((res, rej) => {
    setTimeout(res, t);
  });
const date = (d = new Date(), lang = "ar-eg") =>
  new Date(d).toLocaleString(lang, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    hour12: true,
    minute: "2-digit",
    second: "2-digit",
  });
// --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---

//@ Method:
useHead({bodyAttrs: { class: (ssg.dark && `dark`) || `light` },}); /* note: i use this in [app.vue,error.vue,] */

onMounted(async (e) => {
  try {

    console.log("Update:", date(new Date(), "en")); //[ ]!todo deleted

    // await sleep(300000);
    console.log(date(new Date()).toString() + `:`, "BomBa 4ever...☺"); //[ ]!todo deleted
    isloading.value = false;
  } catch (error) {
    console.error(`catch error--(onMounted):`, error);
  }
});


</script>

<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;
.loading section {
  // margin-block-start: 300px;
  width: 100%;
  height: 25%;
  @extend .d-flex-c;
  gap: 20%;

  h1 {
    font-size: 200%;
    font-weight: 700;
  }
  p {
    font-size: 130%;
    font-weight: 500;
  }
  h1,p {
    // color: chsla(c60, $l: 0.4);
    color: $c10;
  }
}
</style>
