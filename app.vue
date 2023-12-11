<template>
  <div class="app">
    <VitePwaManifest />

    <loadingScreen :isloading="isloading" >
      <section>
          <h1>Hello BomBa</h1>
          <p>
            <Icon name="material-symbols:lock-clock-outline" size="1em" />
            End-to-end encrypted
            <!-- مشفرة من طرف إلى طرف -->
          </p>
        </section>
    </loadingScreen>

    <AuthLayout v-if="!isloading">
    </AuthLayout>
    <NuxtPage/>


    <!-- يوجد شرح لزيز ومفصل عن الروت
      https://www.youtube.com/watch?v=ukJD3Tbn9RU&ab_channel=GeekyShows


      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="about">About</NuxtLink>
    -->
  </div>
</template>

<script setup>
import loadingScreen from "../components/loadingScreen.vue"
import AuthLayout from "@/layouts/AuthLayout.vue";
import { ref, onMounted } from "vue";

let isloading = ref(true);

// todo إرسال هذه المعادلات إلي ملف setingGlobale.js
  const sleep = (t) =>new Promise((res, rej) => {setTimeout(res, t);});
  const date = (d = new Date(),lang = "ar-eg") =>
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


onMounted(async (e) => {
  try {
    console.log("Update:",date(new Date(),'en'));//!todo deleted

    // await sleep(10000);
    console.log(date(new Date()).toString() + `:`, "BomBa 4ever...☺");//!todo deleted
    isloading.value = false;
  } catch (error) {console.error(`catch error--(onMounted):`,error);}

});
</script>


<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;
.loading section{
  // margin-block-start: 300px;
  height: 25%;
  @extend .d-flex-c;
  gap:20%;

  h1 {font-size: 200%;font-weight:700;}
  p {font-size: 130%;font-weight:500;}
  h1,p{color: chsla(c60,$l:0.4);}
}
</style>
