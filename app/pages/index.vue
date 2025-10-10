<template>
  <div class="min-h-screen p- bg-page-gradient text-white">
     <br>
  <div class="min-h-screen bg-page-gradient  text-white">
    <!-- Navbar is layout-level — already working -->
    <HeroSection />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px- mt-6">

       <!-- Categories -->
      <CategoriesSection class="mt-24" />
    </main>
      
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-6">

      <!-- Popular -->
      <TrendingGames class="mt-20 pr-2 sm:pr-3 lg:pr-9" />
      
 <div class="mt-12 pt" >
      <!-- Trending -->
      <TournamentsGame />
     </div>
       
    </main>
     
     <div class="mt-12 pt" >
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
  </div>

  </div>
</template>

<script setup>
/* Explicit imports (safe) even though Nuxt auto-imports components in /components */
import GameCard from '~/components/cards/GameCard.vue'
// import GameFilter from '~/components/cards/GameFilter.vue'
import HeroSection from '~/components/hero/HeroSection.vue'
import PopularGames from '~/components/sections/TrendingGames.vue'
import CategoriesSection from '~/components/sections/CategoriesSection.vue'
import TrendingGames from '~/components/sections/TrendingGames.vue'
import TournamentsGame from '~/components/sections/TournamentsGame.vue'
</script>


    



