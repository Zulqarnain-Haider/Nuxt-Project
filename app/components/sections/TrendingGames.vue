<template>
  <section class="bg-bgDark py-10 md:py-16 px-4 sm:px-6 lg:px-10">
    <!-- 🏷️ Section Header -->
    <div class="flex flex-col sm:flex-row justify-between items-center mb-8">
      <h2 class="text-2xl sm:text-3xl font-bold text-mainText mb-3 sm:mb-0">
        🔥 Trending Games
      </h2>
      <NuxtLink
        to="/trending"
        class="text-primary text-sm sm:text-base font-medium hover:underline"
      >
        View All →
      </NuxtLink>
    </div>

    <!-- 🎮 Games Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
    >
      <GameCard
        v-for="(game, index) in trendingGames"
        :key="index"
        :title="game.title"
        :image="game.image"
        :discount="game.discount"
        :price="game.price"
        :oldPrice="game.oldPrice"
        :rating="game.rating"
      />
    </div>
  </section>
</template>

<script setup>
import GameCard from '@/components/cards/GameCard.vue'

const trendingGames = [
  {
    title: "Cyberpunk 2077",
    image: "/games/cyberpunk.jpg",
    discount: 20,
    price: 48,
    oldPrice: 60,
    rating: 89,
  },
  {
    title: "Elden Ring",
    image: "/games/eldenring.jpg",
    discount: 10,
    price: 54,
    oldPrice: 60,
    rating: 95,
  },
  {
    title: "Assassin’s Creed Mirage",
    image: "/games/mirage.jpg",
    discount: 25,
    price: 45,
    oldPrice: 60,
    rating: 82,
  },
  {
    title: "Spider-Man 2",
    image: "/games/spiderman2.jpg",
    discount: 15,
    price: 51,
    oldPrice: 60,
    rating: 91,
  },
]
</script>
