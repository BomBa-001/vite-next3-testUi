<template>
  <!-- <h1>{{ openNavMenu }}</h1> -->

  <header>
    <article class="container">
      <NuxtLink to="/" class="logo">
        <!-- <img src="https://ik.imagekit.io/BomBa001/Image/tr:w-32/B0.png" alt="" /> -->
        <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128.0 128.0">
          <g transform="translate(0.0,128.0) scale(0.1,-0.1)" fill="#000" stroke="none">
            <path d="M437 1255 c-193 -67 -341 -218 -404 -409 -23 -69 -27 -98 -27 -201 0 -104 3 -130 26 -196 60 -172 170 -299 323 -375 115 -57 212 -78 326 -71 141 9 273 62 387 155 89 73 187 235 207 345 10 54 -8 46 -46 -20 -31 -56 -139 -173 -159 -173 -6 0 -10 60 -10 151 0 116 3 150 13 147 8 -3 13 -40 15 -126 1 -70 7 -122 12 -122 6 0 10 82 10 213 0 204 -1 215 -21 233 -21 19 -21 18 -40 -5 -15 -18 -19 -39 -19 -97 l0 -74 -285 0 -285 0 0 78 c0 64 -4 82 -18 96 -18 15 -20 15 -35 -2 -15 -16 -17 -46 -17 -220 0 -128 4 -202 10 -202 6 0 10 43 10 110 0 91 3 110 15 110 13 0 15 -22 15 -140 0 -77 -4 -140 -9 -140 -5 0 -36 29 -69 65 -68 72 -128 185 -138 257 -7 51 -19 76 -30 65 -13 -13 16 -129 51 -202 93 -193 290 -315 508 -315 161 0 283 49 400 159 l70 66 -33 -65 c-49 -94 -165 -207 -261 -253 -100 -49 -176 -67 -284 -67 -174 0 -313 57 -435 180 -123 122 -180 261 -180 435 0 108 18 184 67 285 46 95 158 210 253 260 l65 34 -52 -51 c-99 -96 -173 -252 -173 -363 0 -65 15 -57 24 12 22 172 137 345 274 411 23 12 42 27 42 34 0 18 -15 16 -93 -12z m3 -486 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z m636 -6 c-10 -10 -19 5 -10 18 6 11 8 11 12 0 2 -7 1 -15 -2 -18z m-636 -44 c0 -5 -7 -9 -15 -9 -15 0 -20 12 -9 23 8 8 24 -1 24 -14z m641 8 c-1 -12 -15 -9 -19 4 -3 6 1 10 8 8 6 -3 11 -8 11 -12z m-641 -67 c0 -20 -5 -30 -15 -30 -15 0 -21 40 -8 53 14 15 23 6 23 -23z m648 3 c-4 -39 -28 -42 -28 -4 0 21 5 31 16 31 11 0 14 -8 12 -27z m-58 -68 c0 -13 -35 -15 -285 -15 -170 0 -285 4 -285 9 0 14 39 17 318 19 221 2 252 1 252 -13z m1 -107 c1 -35 3 -94 5 -131 l3 -68 -62 -30 c-34 -16 -72 -29 -84 -29 -22 0 -23 4 -23 65 0 68 20 105 55 105 29 0 55 -38 55 -80 0 -22 5 -40 10 -40 6 0 10 21 10 47 0 83 -72 123 -127 71 -20 -19 -23 -31 -23 -100 0 -45 -4 -78 -10 -78 -6 0 -10 29 -10 68 0 77 -15 113 -51 126 -69 24 -109 -23 -109 -129 0 -37 -4 -65 -10 -65 -6 0 -10 33 -10 79 0 74 -2 81 -26 100 -57 44 -124 7 -124 -69 0 -22 5 -40 10 -40 6 0 10 15 10 34 0 42 22 66 60 66 38 0 50 -23 50 -100 l0 -62 -27 7 c-16 3 -52 17 -80 30 l-53 24 0 75 0 76 250 1 c291 2 272 1 278 17 3 9 -54 12 -262 12 l-266 0 0 40 0 40 280 0 280 0 1 -62z m-243 -111 c8 -6 12 -37 12 -88 l0 -79 -50 0 -50 0 0 79 c0 70 3 82 21 95 21 14 42 12 67 -7z" />
            <path d="M1100 1176 c0 -8 -7 -16 -15 -20 -8 -3 -15 -10 -15 -16 0 -5 7 -10 15 -10 8 0 15 -7 15 -15 0 -21 11 -18 37 8 l21 23 -23 22 c-26 26 -35 27 -35 8z" />
            <path d="M737 1163 c-4 -3 -7 -28 -7 -54 0 -26 -5 -51 -10 -54 -6 -4 -10 -14 -8 -23 4 -24 -39 -90 -63 -97 -65 -21 -139 -133 -139 -212 0 -98 27 -98 32 1 4 92 35 143 111 181 148 74 306 -28 307 -197 0 -64 15 -78 26 -23 15 83 -39 192 -118 239 -52 30 -88 76 -88 110 0 14 -4 28 -10 31 -5 3 -10 28 -10 56 0 46 -7 59 -23 42z m18 -122 c3 -5 1 -12 -5 -16 -5 -3 -10 1 -10 9 0 18 6 21 15 7z m25 -74 c0 -7 -14 -12 -35 -12 -40 0 -41 2 -19 26 13 14 21 16 35 8 11 -5 19 -15 19 -22z" />
            <path d="M960 1035 c0 -9 -9 -19 -20 -22 -22 -6 -27 -23 -7 -23 8 0 19 -10 25 -22 l11 -23 7 23 c3 12 13 22 20 22 8 0 14 5 14 10 0 6 -7 10 -15 10 -8 0 -15 6 -15 14 0 8 -4 18 -10 21 -5 3 -10 -1 -10 -10z" />
          </g>
        </svg>
        <p>Ramadan</p>
      </NuxtLink>
      <nav>
        <div class="nav__link">
          <ul>
            <li style="--i: 1">
              <NuxtLink activeClass="active" to="/">Home</NuxtLink>
            </li>
            <li style="--i: 2">
              <NuxtLink activeClass="active" to="/About">About</NuxtLink>
            </li>
            <li style="--i: 3">
              <NuxtLink activeClass="active" to="/Calender">Calender</NuxtLink>
            </li>
            <li style="--i: 4">
              <NuxtLink activeClass="active" to="/Blog">Blog</NuxtLink>
            </li>
            <li style="--i: 5">
              <NuxtLink activeClass="active" to="/Contact">Contact</NuxtLink>
            </li>
          </ul>
          <!-- <button></button> -->
          <label class="btn0" for="openMenuNav">
            <Icon name="ph:list-fill" size="1em"/>
            <input type="checkbox" name="openMenuNav" id="openMenuNav">
          </label>
          <!-- <i
          class="btn0 fa-solid"
          @click="(e) => (openNavMenu = !openNavMenu)"
        ></i>
        <Icon name="ph:list-fill" size="1em"
        :class="`btn0 ${openNavMenu && `show` || ``}`" 
        @click="(e) =>openNavMenu = !openNavMenu" /> -->
        </div>
      </nav>
    </article>
  </header>
</template>

<script setup>
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
header {
  padding: calc($header-h / 7) 0;
  width: $header-w;
  height: $header-h;
  background-color: $c60;
  // border-block-end:$px solid $c30-80;
  box-shadow: 0rem 0rem (10 * $px) $c30-80;
  font-size: calc($header-w / 95.9375); //16px

  @include media_for(m t) {$header-h: calc($header-w / 12);/* cn(70); */height: $header-h;font-size: cn(14);}
  @include media_for(m) {$header-h: calc($header-w / 6);height: $header-h;font-size: cn(10);}
  &,
  & a {
    color: $c30;
  }

  article {
    height: 100%;
    @extend .container;
    @extend .d-flex-r;
    justify-content: space-between;
    align-items: center;
    @include media_for(m t) {padding: 0 px(20);}
    .logo {
      @extend .d-flex-r;
      gap: calc($header-w / 144);

      font-size: 200%;
      font-weight: 800;
      &:hover {
        transition: all $t-03s ease-in-out;
        color: $c30;
        text-shadow: px(0) px(0) px(10) $c10-20;
        svg,
        img {
          box-shadow: px(0) px(0) px(10) $c10-20;
          path {
            fill: $c10-20;
          }
        }
      }
      /*#region ----------[ animation ]---------- */
      opacity: 1;
      animation: slide_inline-start $t-05s linear forwards $t-02s;
      /*#endregion*/
      svg,
      img {
        $wh: calc($header-w / 28.8);
        padding: calc($wh / 12.5);
        min-width: $wh;
        min-height: $wh;
        background-color: $c30;
        box-shadow: 0 0 cn(5) $c10-20;
        border-radius: 50%;

        path {
          fill: $c60;
        }
      }
    }
  }

  nav {
    position: relative;
    width: 100%; //clamp(px(200), 90vw, px(1100));
    text-align: end;

    display: flex;
    justify-content: flex-end;
    .nav__link{
      width: fit-content;
      display: flex;
      align-items: center;
      

      &:focus-within:has(.btn0 input[type="checkbox"]:checked){
        ul{display: flex;}
      }
    
    }
    ul {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      gap: (8 * $px);
      text-align: center;

      li {
        cursor: pointer;
        // margin: 0 (3 * $px);
        // padding: (8 * $px) (18 * $px);
        
        border-radius: (40 * $px);
        box-shadow: $px $px (5 * $px) $c10-20;
        background-color: $c60;
        overflow: hidden;

        /*#region ----------[ animation ]---------- */
        opacity: 1;
        animation: slide_block-end $t-05s linear forwards
          calc($t-02s * var(--i));
        /*#endregion*/

        &:hover {
          transition: all $t-03s ease-in-out;
          box-shadow: $px $px (10 * $px) $c10-20;
        }
        a {
          display: inline-block;
          padding: (8 * $px) (18 * $px);
          @include media_for(t) {padding: (12 * $px) (10 * $px);}
          width: 100%;
          height: 100%;
        }
        & a {
          color: $c30;
          font-size: 105%;
          font-weight: 600;
        }
        &:hover,
        &:has(.active) {
          background-color: $c30;
          a {
            color: $c60;
          }
        }
      }

      @extend %navUlShow;
    }
    .btn0{
      display:none;
      font-size: 200%;
      cursor: pointer;
      line-height: 0;

      @include media_for(mm t) {display: inline-block;}  
      input[type="checkbox"]{position: absolute;opacity: 0;}
    }
  }
}

%navUlShow {
  @include media_for(mm t) {
    display: none;

    position: absolute;
    padding: (30 * $px)/*  (10 * $px) */;
    width: clamp(px(200), 50vw, px(300));
    height: max-content;
    background-color: $c10-20;
    border-radius: (10 * $px);
    box-shadow: 0 (8 * $px) (10 * $px) $c10-80;
    inset-block-start: 100%;
    inset-inline-end: 0;
    z-index: 998;

    flex-flow: column nowrap;
    gap: (30 * $px);

    li{      
      border-radius: (10 * $px);
      line-height: 220%;
      a {font-size: 130%;}
    }
  }
}


</style>
