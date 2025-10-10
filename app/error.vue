<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-bgDark text-mainText">
    <h1 class="text-4xl font-bold text-error mb-4">Something went wrong 😢</h1>
    <p class="text-onMainText mb-6">Please try reloading the page or go back home.</p>
    <NuxtLink to="/" class="bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90">
      Go Home
    </NuxtLink>
  </div>
</template>
