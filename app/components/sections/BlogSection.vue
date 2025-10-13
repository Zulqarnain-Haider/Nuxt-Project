<template>
  <section class="w-full py-10">
    <!-- Header -->
    <div class="flex items-center justify-between px-4 sm:px-6 lg:px-1 mb-6">
      <h2 class="text-2xl font-semibold font-vazirmatn text-white">Blog Posts</h2>
      <div
        class="text-primary text-lg font-vazirmatn flex items-center cursor-pointer hover:text-primary transition"
      >
        View All
        <img src="/games/Right.arrow.svg" alt="" class="ml-2 w-5 h-5" />
      </div>
    </div>

    <!-- Swiper -->
    <Swiper
      :modules="[Autoplay, Pagination]"
      :slides-per-view="1"
      :autoplay="{ delay: 4000, disableOnInteraction: false }"
      :pagination="{ clickable: true }"
      loop
      class="blog-swiper px-4 sm:px-6 lg:px-7"
    >
      <SwiperSlide v-for="(slide, index) in slides" :key="index">
        <div class="flex flex-col md:flex-row gap-4 mb-16">
          <!-- Left: Big Image -->
          <div class="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
            <img
              :src="slide.main.image"
              alt="Main Blog"
              class="w-full h-[400px] object-cover rounded-2xl"
            />
            <!-- Overlay -->
            <div
              class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-2xl flex flex-col justify-end p-4"
            >
              <h3 class="text-lg md:text-xl text-white mb-1 transition-all duration-300">
                {{ slide.main.title }}
              </h3>
              <p class="text-md md:text-lg tracking-wide">
                {{ slide.main.category }}
              </p>
            </div>
          </div>

          <!-- Right: 4 Small Images -->
          <div class="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <div
              v-for="(img, i) in slide.others"
              :key="i"
              class="relative rounded-2xl overflow-hidden group"
            >
              <img
                :src="img.image"
                alt="Blog Thumbnail"
                class="w-full h-[190px] object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
              />
              <!-- Overlay -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-2 md:p-3"
              >
                <h3 class="text-sm text-white leading-tight mb-1">
                  {{ img.title }}
                </h3>
                <p class="text-xs tracking-wide">
                  {{ img.category }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const slides = [
  {
    main: {
      image: '/games/BlogPoster1.png',
      title: 'FC25 Prepares for October 2024 Release with Enhanced',
      category: 'Realism',
    },
    others: [
      { image: '/games/BlogPoster2.png', title: 'FC25 Prepares for October 2024', category: 'Release with Enhanced Realism' },
      { image: '/games/BlogPoster3.png', title: 'Cyberpunk 2078: Night City Expansion Announced', category: 'Action RPG' },
      { image: '/games/BlogPoster4.png', title: 'GTA 6 Leaks Suggest Miami-Inspired World', category: 'Adventure' },
      { image: '/games/BlogPoster5.png', title: 'Valorant Mobile Beta Arriving Soon', category: 'Esports' },
    ],
  },
  {
    main: {
      image: '/games/BlogPoster2.png',
      title: 'Battlefield Returns With New Dynamic Maps',
      category: 'Shooter',
    },
    others: [
      { image: '/games/BlogPoster3.png', title: 'Cyberpunk 2078: Night City Expansion Announced', category: 'Action RPG' },
      { image: '/games/BlogPoster4.png', title: 'GTA 6 Leaks Suggest Miami-Inspired World', category: 'Adventure' },
      { image: '/games/BlogPoster5.png', title: 'Valorant Mobile Beta Arriving Soon', category: 'Esports' },
      { image: '/games/BlogPoster1.png', title: 'FC25 Prepares for October 2024 Release with Enhanced', category: 'Realism' },
    ],
  },
]
</script>

<style scoped>
.blog-swiper .swiper-pagination {
  bottom: -30px;
  display: flex;
  justify-content: center;
  gap: 8px;
}
.blog-swiper .swiper-pagination-bullet {
  background: #777;
  width: 8px;
  height: 8px;
  opacity: 0.6;
  transition: all 0.3s ease;
}
.blog-swiper .swiper-pagination-bullet-active {
  background: var(--color-primary);
  width: 12px;
  height: 12px;
  opacity: 1;
}
.blog-swiper .swiper-slide-active h3 {
  font-size: 1.4rem !important;
  transition: all 0.4s ease;
}
.blog-swiper .swiper-slide-active p {
  font-size: 1.1rem !important;
}
</style>
