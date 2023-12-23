import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

export const settingsGlobal = defineStore(
  "settingsGlobal",
  () => {
    //@ state


    const colorMode = useColorMode(),
          isDark = computed({
                              get () {return colorMode.value === 'dark'},
                              set () {
                                const v=(colorMode.value === 'dark'),b = document.body.classList;
                                colorMode.preference = v && `light` || `dark`;
                                b.add(v && `light` || `dark`);
                                b.remove(!v && `light` || `dark`);
                              },
                            });
    //@ watch
    // watch(lang, (v) => {
    //   document.body.setAttribute(
    //     "dir",
    //     ((locale.value = v) === "ar" && "rtl") || "ltr"
    //   );
    //   // document.getElementsByTagName("html")[0].style.direction = "rtl";
    // });

    //@ getters
    // const get_canter = computed(() => canter.value * 2);
    //@ actions
    // const include = () => canter.value++;

    //@ return
    return {
      isDark,
      // lang,
      // Bom,
      // // ----------------------------------------------------------------
      // canter,
      // get_canter,
      // include,
    };
  },
  {
    persist: true,//[x]todo this pinia dont need save in localStorage !
    // persist: {
    //   // storage: sessionStorage, // data in sessionStorage is cleared when the page session ends.
    //   storage: persistedState.localStorage,
    //   // storage: persistedState.cookiesWithOptions({
    //   //   sameSite: "strict",
    //   // }),
    // },
  }
);
/* يجعل من المحرك ,الكمبيلر بإعادة التحديث تلقائياً في حالة تم تغيرير الاشياء داخل الملف */
if (import.meta.hot) {  import.meta.hot.accept(acceptHMRUpdate(settingsGlobal, import.meta.hot));}
