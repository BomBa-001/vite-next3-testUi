<template>
<!-- -->

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

  <div v-if="!isloading">
    <h1>welcome {{ lastName }}</h1>
    <UButton
      :label="(isloading && `Loading...`) || `Don...`"
      :loading="isloading"
      :disabled="isloading"
      @click="btn__click()"
    />
    <UCard :ui="ui" />
  </div>
</template>

<script setup>
import loadingScreen from "../components/loadingScreen.vue"
import { ref, onMounted } from "vue";

let isloading = ref(true);
let lastName = ref("Hussein");

const sleep = (t) =>
  new Promise((res, rej) => {
    setTimeout(res, t);
  });

const date = (d = "1991/12/05") =>
  new Date(d).toLocaleString("ar-eg", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    weekday: "long",
    hour: "2-digit",
    hour12: false,
    minute: "2-digit",
    second: "2-digit",
  });

const ui = /*ui*/ {
  background: "bg-white dark:bg-slate-900",
};


const btn__click =async e=>{
  isloading.value = true;
  await sleep(5000);
  console.log('btn__clicked');
  isloading.value = false;
}

onMounted(async (e) => {
  // console.log(date(new Date()));
  await sleep(5000);
  lastName.value = "Hussein abdo";
  console.log(date(new Date()).toString() + `:`, "BomBa 4ever...☺");
  isloading.value = false;
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

  h1 {font-size: 160%;}
  p {
    &, svg{
      color: chsla(c10,$l:0.4);
      font-size: 100%;
    }
  }
}
</style>
