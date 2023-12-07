<template>
  <h1>welcome BomBa</h1>
  <img
    src="https://ik.imagekit.io/BomBa001/publicImages/BomBa-001.svg?updatedAt=1701827273385"
    alt=""
    srcset=""
  />
  <img
    src="https://ik.imagekit.io/BomBa001/publicImages/BomBa-001.svg?updatedAt=1701827273385"
    alt=""
    srcset=""
  />

  <UContainer>
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme
            ><USelect
              v-model="$colorMode.preference"
              :options="['system', 'light', 'dark']"
          /></ColorScheme>
        </div>
      </template>
      <UButton
        icon="i-heroicons-book-open"
        to="https://ui.nuxt.com"
        target="_blank"
        >Open Nuxt UI Documentation</UButton
      >
    </UCard>
  </UContainer>
</template>
