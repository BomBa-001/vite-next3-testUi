<template>
  <hr :style="`--title: '${title||''}';--a-pinline:${title&&'1rem'||'0'}`" />
</template>

<script setup>
const props = defineProps({
  title:{
    type: String,
    required: true,
  }
});
</script>

<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;

$title-font-size:200%;
$body-bg:$c60;
$cborder-color:chsla(c10, $a:0.1);
hr {
  margin: cn(16) 0 !important;
  display: block;
  unicode-bidi: isolate;
  margin-block-start: cn(8);
  margin-block-end: cn(8);
  margin-inline-start: auto;
  margin-inline-end: auto;
  border-style: inset;
  border-width: cn(1);
  border-color: $cborder-color;
  overflow: visible;
  position: relative;

  --title: '';
  --title-font-size:#{$title-font-size};
  --a-pinline: 0;
  --title-bg: #{$body-bg};
  &::after {
    content: var(--title);
    padding: cn(4.8) 0;
    padding-inline:var(--a-pinline);
    background-color: var(--title-bg);
    font-size: var(--title-font-size);
    font-weight: 700;
    color: $cborder-color;
    position: absolute;
    inset-inline-start: calc(50%);
    transform: translate(-50%, -55%);
  }
}
</style>
