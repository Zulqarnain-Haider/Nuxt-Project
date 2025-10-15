<template>
  <div class="min-h-screen text-white">
     <br>
  <div class="min-h-screen text-white">
    <!-- Navbar is layout-level — already working -->

     <!-- Hero Section -->
    <HeroSection />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px- mt-6">

       <!-- Categories -->
      <CategoriesSection class="mt-24" />
    </main>
      
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-6">

      <!-- Trending Section -->
      <TrendingGames class="mt-16 pr-2 sm:pr-3 lg:pr-9" />
    </main>
     
    <main class="mt-12"> 
      <!-- Tounament Section -->
      <TournamentsGame />

    </main>

     <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 mt-6">

      <!-- Trending Section -->
      <Bestsellers class="mt-16 pr-2 sm:pr-3 lg:pr-9" />

      <UpComingGames class="mt-16 pr-2 sm:pr-3 lg:pr-9" />
    </main>
   

        <!-- Hero Section 2 -->
    <HeroSection2 class="mt-14" />

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px- mt-">

      <!-- Customer Review Section -->
      <CustomerReview class="mt-10" />

      <Blog class="mt-16 mb-16" />

    </main>
      

  </div>

  </div>
</template>

<script setup>
/* Explicit imports (safe) even though Nuxt auto-imports components in /components */
import HeroSection from '~/components/hero/HeroSection.vue'
import CategoriesSection from '~/components/sections/CategoriesSection.vue'
import TrendingGames from '~/components/sections/TrendingGames.vue'
import TournamentsGame from '~/components/sections/TournamentsGame.vue'
import Bestsellers from '~/components/sections/BestsellersSection.vue'
import UpComingGames from '~/components/sections/UpComingGames.vue'
import HeroSection2 from '~/components/hero/HeroSection2.vue'
import CustomerReview from '~/components/sections/CustomerReviewsSection.vue'
import Blog from '~/components/sections/BlogSection.vue'
</script>


    



