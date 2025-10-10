<script setup lang="ts">
import GameFilter from '~/components/cards/GameFilter.vue'

const games = [
  { title: "League of Legends", image: "/games/TournamentCard.1.png", button: "Buy Now" },
  { title: "Apex Legends", image: "/games/TournamentCard.2.png", button: "Join Now" },
  { title: "Counter Strike", image: "/games/TournamentCard.3.png", button: "Buy Now" },
  { title: "World of Warcraft", image: "/games/TournamentCard.4.png", button: "Join Now" },
  { title: "Dota 2", image: "/games/TournamentCard.5.png", button: "Join Now" },
  { title: "Fortnite", image: "/games/TournamentCard.6.png", button: "Join Now" },
]
</script>

<template>
  <section class="p-6 text-white">
    <h2 class="text-2xl font-bold mb-6">Join the Big Tournament</h2>

    <UCarousel
      v-slot="{ item }"
      loop
      arrows
      dots
      :autoplay="{ delay: 3000 }"
      :items="games"
      :ui="{ item: 'basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 p-2' }"
      class="rounded-xl"
    >
      <GameFilter
        :title="item.title"
        :image="item.image"
        :buttonText="item.button"
      />
    </UCarousel>
  </section>
</template>
