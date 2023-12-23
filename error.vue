<template>
  <NuxtLayout>
    <!-- <div class="prose error__svg"> -->
    <div class="error__svg">
      <!-- <svg><use href="/images/images_system/settings/error/error.svg#freepik-error-404"></use></svg> -->
      <svg width="1em" height="0.5em">
        <use
          :href="`/images/images_system/settings/error/error.svg${
            errors.statusCode === 404 && `#freepik-error-404`
          }`"
        ></use>
      </svg>

      <p>Go back to your <a @click="handleError">home</a></p>

    </div>
    <c_footer style="width: 100%" />
  </NuxtLayout>
</template>

<script setup>
//@ import Components:
import c_footer from "@/layouts/c-footer.vue";

//@ import Libraries:
import { onMounted } from "vue";

//@ import stores:
const ssg = settingsGlobal();

//@ props:
// const props = defineProps({error: Object,});

//@ Data:
const errors = useError();

//@ Function:
const handleError = () => {clearError({ redirect: "/" });console.clear();}

//@ Method:
useHead({bodyAttrs: { class: (ssg.dark && `dark`) || `light` },}); /* note: i use this in [app.vue,error.vue,] */

onMounted(async (e) => {console.clear();});
</script>

<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;

.light .error__svg {
  --ce0e0e0: #{rhsla(c30, $s: 0%, $l: 88%)};
  --cdbdbdb: #{rhsla(c30, $s: 0%, $l: 86%)};
  --cc7c7c7: #{rhsla(c30, $s: 0%, $l: 78%)};
  --ca6a6a6: #{rhsla(c30, $s: 0%, $l: 65%)};

  --cebebeb: #{rhsla(c30, $s: 100%, $l: 12%)};
  --c263238: #{rhsla(c30, $s: 18%, $l: 18%)};
  --c37474f: #{rhsla(c30, $s: 18%, $l: 33%)};
  --c455a64: #{rhsla(c30, $s: 18%, $l: 26%)};
}
.dark .error__svg {
  --ce0e0e0: #{rhsla(c30, $s: 100%, $l: 22%)};
  --cdbdbdb: #{rhsla(c30, $s: 100%, $l: 24%)};
  --cc7c7c7: #{rhsla(c30, $s: 100%, $l: 32%)};
  --ca6a6a6: #{rhsla(c30, $s: 100%, $l: 45%)};

  --cebebeb: #{rhsla(c30, $s: 0%, $l: 92%)};
  --c37474f: #{rhsla(c30, $s: 92%, $l: 77%)};
  --c455a64: #{rhsla(c30, $s: 92%, $l: 84%)};
}
.error__svg {
  --cnone: none;
  --cffffff: #{$c60};
  --c000000: #{$c10};
  --c263238: #{rhsla(c30, $s: 92%, $l: 92%)};
  --ceb996e: #eb996e;
  --cffbf9d: #ffbf9d;
  --c32dfec: var(--cprimary);
  --cff0000: var(--cdanger);
  --cff5a5a: #{$c30};

  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 5%;

   /* @include media('screen and (width < 600px )'){font-size: cn(10);} */
  svg {font-size: 3000%;}

  p {
    font-size: 150%;
    a {
      font-size: 120%;
      font-weight: 700;
      text-transform: capitalize;
      text-decoration: underline $c30;
      cursor: pointer;
    }
  }
}
</style>
