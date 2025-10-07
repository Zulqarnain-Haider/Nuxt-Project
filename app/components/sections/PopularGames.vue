<template>
  <section>
    <div class="flex items-center justify-between">
      <h2 class="text-2xl font-semibold">Trending Games</h2>
      <div class="text-onGoNext text-lg">View All <img src="/games/Right.arrow.svg" alt=""></div>
    </div>
    
    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      <GameCard
        v-for="(g, i) in games"
        :key="i"
        :title="g.title"
        :image="g.image"
        :discount="g.discount"
        :price="g.price"
        :oldPrice="g.oldPrice"
        :rating="g.rating"
      />
    </div>
  </section>
</template>

<script setup>
import GameCard from '~/components/cards/GameCard.vue'

const games = [
  { title: 'The Witcher 3', image: '/games/witcher3.jpg', discount: 15, price: 51, oldPrice: 60, rating: 81 },
  { title: 'Minecraft', image: '/games/minecraft.jpg', discount: 15, price: 51, oldPrice: 60, rating: 81 },
  { title: 'Spider-Man 2', image: '/games/spiderman2.jpg', discount: 15, price: 51, oldPrice: 60, rating: 81 },
  { title: 'Minecraft', image: '/games/', discount: 15, price: 51, oldPrice: 60, rating: 81 },
  { title: 'Minecraft', image: '/games/black-myth-slider.png', discount: 15, price: 51, oldPrice: 60, rating: 81 },

]
</script>
