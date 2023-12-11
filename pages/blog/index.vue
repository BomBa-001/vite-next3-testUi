<template>
  <section class="content">

    <h1 class="container">PaGe: {{ PName }}</h1>

    <bhr title="BomBa 😘" style="--title-font-size:150%; width: 90%;"/>

    <section class="container card">
    <h2 class="title">{{ PName }}</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam quaerat
        placeat earum, ipsam, unde quae, aperiam inventore soluta optio laborum
        dignissimos vitae aliquid aspernatur asperiores officiis voluptate obcaecati
        voluptates eum.
      </p>
    </section>

  </section>
</template>

<script setup>
//@ Components:
import bhr from "@/components/BUI/bhr";
import { ref } from "vue";

const PName=ref('Blog');
</script>



<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;


h1{
  color:chsla(c10,$l:0.9);
  font-size: 250%;
}
p{
  color:chsla(c10);
  font-size: 100%;
}


</style>
