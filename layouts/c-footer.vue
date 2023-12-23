<template>
  <footer>
    <!-- <h1>{{ssg.isDark}}</h1> -->
    <a
      href="https://bomba-001.github.io/CV-Hussein/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p style="--i: 3.8s"><span>&copy;</span> frontEnd by hussein abdo ♥</p>
    </a>
    
    <label class="toggle1 " style="--i:3.8s" @click="ssg.isDark = !ssg.isDark">
      <input type="checkbox" v-model="ssg.isDark">
      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="var(--c10)">
        <!-- moon -->
        <path v-if="ssg.isDark" d="M12.058 20q-3.333 0-5.667-2.334Q4.058 15.333 4.058 12q0-2.47 1.413-4.536t4.01-2.972q.306-.107.536-.056q.231.05.381.199t.191.38q.042.233-.062.489q-.194.477-.282.971q-.087.494-.087 1.025q0 2.673 1.863 4.537q1.864 1.863 4.537 1.863q.698 0 1.278-.148q.58-.148.987-.24q.217-.04.4.01q.18.051.29.176q.116.125.157.308q.042.182-.047.417q-.715 2.45-2.803 4.014Q14.733 20 12.058 20"/>
        <!-- sun -->
        <path v-else d="m6.76 4.84l-1.8-1.79l-1.41 1.41l1.79 1.79zM4 10.5H1v2h3zm9-9.95h-2V3.5h2zm7.45 3.91l-1.41-1.41l-1.79 1.79l1.41 1.41zm-3.21 13.7l1.79 1.8l1.41-1.41l-1.8-1.79zM20 10.5v2h3v-2zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6s-2.69-6-6-6m-1 16.95h2V19.5h-2zm-7.45-3.91l1.41 1.41l1.79-1.8l-1.41-1.41z"/>
      </svg>
    </label>
    <!-- class="toggle2 toggle4__anima" -->
    <label class="toggle2 lang" style="--i:3.8s" @click="ssg.isDark = !ssg.isDark">
      <input type="checkbox" v-model="ssg.isDark"><span></span>
    </label>
    

  
  </footer>
</template>

<script setup>
// import { settingsGlobal } from "@/stores/settingsGlobal";
const ssg = settingsGlobal();
</script>

<style lang="scss" scoped>
@use "@/assets/sass/helpers/mixins" as *;
@use "@/assets/sass/helpers/functions" as *;

$t-02s: 0.2s;
$t-03s: 0.3s;
$t-05s: 0.5s;
// $c10 --- --- --- --- --- ---
$c10-20: chsla(c10, $a: 0.2);
$c10-80: chsla(c10, $a: 0.8);
// $c30 --- --- --- --- --- ---
$c30-80: chsla(c30, $a: 0.8);

$header-w: 100vw; //cn(1535);
$header-h: calc($header-w / 21.9); //cn(70);
$px: calc($header-w / 1535); //cn(1);

footer {
  width: 100%;
  height: cn(40);
  font-size: 160%;
  @include media_for(m t) {
    width: 100%;
    position: absolute;
    inset-block-end: 0;
  }
  @include media_for(mm) {font-size: 120%;}
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  gap: 1%;

  &,
  a {color: $c10;}
  span {color: $c30;}
  p {
    cursor: pointer;
    /*#region ----------[ animation ]---------- */
    // opacity: 0;
    animation: slide_block-start $t-05s linear forwards calc($t-02s + var(--i));
    /*#endregion*/
  }
  :hover {color: $c30;transition: all $t-02s ease-in-out;}

  .toggle4__anima {
    margin-inline-start: px(10);
    /*#region ----------[ animation ]---------- */
    opacity: 0;
    animation: slide_inline-end $t-05s linear forwards calc($t-02s + var(--i));
    /*#endregion*/
  }
}




//#region { toggle1 }
.dark .toggle1{
  --bg-toggle1: #{rhsla(c30, $l:0%)};
  }
.toggle1 {
  font-size: 100%;
  --bg-toggle1: #{rhsla(c30, $l:100%)};
  --wh:1em;
  
  $wh:var(--wh);
    padding: calc(0.2 * $wh);
    width: $wh;
    height: $wh;
    background-color: var(--bg-toggle1);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    position: relative;

    input[type="checkbox"] {opacity: 0; z-index: -1;  position: absolute;}
  }
//#endregion

//#region { toggle2 }
.dark .toggle2{
    --br-c-Span:#{rhsla(c30, $s:0%, $l:25%)};
  }
  .toggle2 {
    --label:"en";

  --br-c-Span:#{rhsla(c30, $s:0%, $l:75%)};
  --bgSpanBefore: var(--br-c-Span);
  --bg-toggle2: var(--c60);

  --br-c-SpanChecked:var(--c30);
  --bgSpanBeforeChecked: var(--c30);
  --boxShadow-c-SpanChecked:#{rhsla(c30, $s:93%, $l:49%, $a:0.8)};
  
  $em:1em;
  --br-radius:#{(0.125 * $em)};//3.125em

  --rtl:1;[dir="rtl"] & {--rtl:-1;}
  position: relative;
  width: (1.6 * $em);
  height: $em;

  input[type="checkbox"] {
    opacity: 0;
    &:checked + span {
      border: (0.1 * $em) solid var(--br-c-SpanChecked);
      box-shadow: 0 0 (0.125 * $em)  var(--boxShadow-c-SpanChecked);
      
      &:before {background-color: var(--bgSpanBeforeChecked);transform: translateX(calc(var(--rtl) * (0.6 * $em)));}
      &:after {transform: translateX(calc(var(--rtl) * (1.8 * $em)));}
    }
  }

  span {
    position: absolute;
    cursor: pointer;
    inset: 0;
    border: (0.125 * $em) solid var(--br-c-Span);
    border-radius: var(--br-radius);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;

    &:before {
      position: absolute;
      content: "";
      height: (0.6 * $em);
      width: (0.6 * $em);
      inset-inline-start: (0.08 * $em);
      inset-block-end: (0.08 * $em);
      background-color: var(--bgSpanBefore);
      border-radius: inherit;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    }
  }

  &.lang{
    span {
    &::after {
      content: var(--label);
      color:var(--bg-toggle2);

      font-size: 35%;
      font-weight: 900;
      text-transform: uppercase;
      position: absolute;
      inset-inline-start: (0.3 * $em);
      inset-block-end: (0.45 * $em);
      border-radius: inherit;
      transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
    }
  }
  }

}
//#endregion

//#region { toggle4 }
.toggle4 {
  --w: 2em;
  --ltr: 1;
  [dir="rtl"] & {
    --ltr: -1;
  } //checked if ltr or rtl?
  // --c60:#e8e8e8;
  // --c30:#ff0000;
  // --c10:#212121;

  --c60: var(--body-bg);

  $bg: var(--c60);
  $c-box-shadow: hsla(var(--c10-hsl), 40%);

  $bg--checked: var(--c30);
  $c-box-shadow-checked: hsla(var(--c30-hsl), 40%);

  $bg--before: var(--c30);
  $c-box-shadow--before-checked: hsla(var(--c10-hsl), 40%);

  $w: var(--w); //2em;
  $h: calc($w / 2);
  $br: calc($w / 15);
  $br-rad: calc($w / 3);
  $box-shadow: calc($w / 6);
  $box-shadowR: calc($w / 20);
  $transX: calc(($w / 2) * var(--ltr));
  $transition: 0.3s;

  position: relative;
  border-radius: $br-rad;

  input[type="checkbox"] {
    opacity: 0;
    &:checked ~ .slider {
      // background-color: $bg--checked;
      &::before {
        background-color: $c-box-shadow-checked;
        transform: translateX($transX);
        box-shadow: 0 0 $box-shadow $box-shadowR $c-box-shadow-checked;
      }
    }
    &:active ~ .slider::before {
      transform: translate(0);
    }
  }

  .slider {
    width: $w;
    height: $h;
    background-color: $bg;
    border: $br solid transparent;
    border-radius: $br-rad;
    box-shadow: 0 0 $box-shadow 0 $c-box-shadow inset;

    display: flex;
    align-items: center;

    position: absolute;
    inset: 0;

    overflow: hidden;
    transition: $transition;
    cursor: pointer;

    &::before {
      content: "";
      display: block;
      width: 100%;
      height: 100%;
      background-color: $bg--before;
      transform: translateX(calc($transX * -1));
      border-radius: $br-rad;
      transition: $transition;
      box-shadow: 0 0 $box-shadow $box-shadowR $c-box-shadow--before-checked;
    }
  }
}
//#endregion
</style>
