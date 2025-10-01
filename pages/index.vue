<!-- <template>
     <NuxtLayout name="default">
  <div class="flex flex-col items-center justify-center min-h-screen p-6">
    <h1 class="text-3xl font-bold mb-8">Home Page Test</h1>

    Default Button
    <UiButton>Buy Now</UiButton>

    Smaller Button
    <UiButton :width="120" :height="40" class="mt-4">Add</UiButton>

    Bigger Button
    <UiButton :width="220" :height="60" class="mt-4" >Checkout</UiButton>
  </div>
  </NuxtLayout>
</template> -->

<template>
  <div class="min-h-screen p-6 bg-page-gradient text-white">
    <h1 class="text-3xl font-bold mb-8 text-center">Game Cards Test</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <GameCard
        title="The Witcher 3"
        image="/games/witcher3.jpg"
        :discount="15"
        :price="51"
        :oldPrice="60"
        :rating="81"
      />
      <GameCard
        title="Minecraft"
        image="/games/minecraft.jpg"
        :discount="15"
        :price="51"
        :oldPrice="60"
        :rating="81"
      />
      <GameCard
        title="Spider-Man 2"
        image="/games/spiderman2.jpg"
        :discount="15"
        :price="51"
        :oldPrice="60"
        :rating="81"
      />
    </div>
  </div>
</template>

<script setup>
import GameCard from '~/components/cards/GameCard.vue'
</script>

