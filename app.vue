<template>
  <div class="app">
    <VitePwaManifest />

    <AuthLayout>
      <NuxtPage/>
    </AuthLayout>
  </div>
</template>
<script setup>
    import AuthLayout from "@/layouts/AuthLayout.vue";

</script>
