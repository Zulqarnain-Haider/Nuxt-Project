<template>
  <div class="min-h-screen p-6 bg-page-gradient text-white">
    <h1 class="text-3xl font-bold mb-8 text-center">Game Cards Test</h1>
  
  <div class="min-h-screen bg-page-gradient text-white">
    <!-- Navbar is layout-level — already working -->
    <HeroSection />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
      <!-- Popular -->
      <PopularGames class="mt-12" />

      <!-- Categories -->
      <CategoriesSection class="mt-12" />
     <div class="mt-12" >
      <!-- Trending -->
      <TrendingGames />
     </div>

      <!-- More sections placeholder (Tournaments / Upcoming / Deals / Reviews / Blog) -->
      <section class="mt-16">
        <!-- We'll implement these next — placeholder to keep page flow -->
        <div class="text-center text-2xl font-semibold text-onMainText py-12">
          (More sections — Tournaments / Upcoming / Deals / Reviews / Blog — will be added here)
        </div>
      </section>
    </main>
  </div>

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
/* Explicit imports (safe) even though Nuxt auto-imports components in /components */
import GameCard from '~/components/cards/GameCard.vue'
import HeroSection from '~/components/hero/HeroSection.vue'
import PopularGames from '~/components/sections/PopularGames.vue'
import CategoriesSection from '~/components/sections/CategoriesSection.vue'
import TrendingGames from '~/components/sections/TrendingGames.vue'
</script>


    



