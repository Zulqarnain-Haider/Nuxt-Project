<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
</script>

<template>
  <Swiper
    :modules="[Navigation]"
    navigation
    spaceBetween="40"
    slidesPerView="3"
    class="w-full max-w-4xl mx-auto mt-10"
  >
    <SwiperSlide v-for="n in 5" :key="n" class="bg-gray-800 h-32 w-32 text-white text-center p-10 rounded-lg">
      Slide {{ n }}
    </SwiperSlide>
  </Swiper>
</template>
