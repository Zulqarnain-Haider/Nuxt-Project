<!-- <template>
  <div class="p-10">
    <UButton color="primary" size="lg" class="bg-rose-500 p-6">Hello Nuxt UI</UButton>
  </div>
</template> -->
<template>
  <div class="p-8 space-x-6 text-center flex">

    <!-- Normal Tailwind Button -->
    <button class="bg-primary text-white px-6 py-2 rounded-lg hover:bg-orange-500 cursor-pointer">
      Tailwind Button
    </button>

    <!-- Nuxt UI Button (but styled via Tailwind classes) -->
    <UButton class="text-white border border-rose-600 hover:bg-rose-500 hover:text-white cursor-pointer">
      Nuxt UI + Tailwind Mix
    </UButton>

    <!-- Nuxt UI Button using its built-in theme color -->
    <UButton color="primary">
      Nuxt UI Primary
    </UButton>

  </div>
</template>
