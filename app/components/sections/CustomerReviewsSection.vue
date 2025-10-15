<template>
  <section class="relative w-full text-white overflow-hidden">
    <!-- 🔹 Title -->
    <div class="flex items-center justify-between px-4 mb-2 sm:mb-4  sm:px-6 lg:px-7">
      <h2 class="text-2xl font-semibold font-vazirmatn">Customer Reviews</h2>
      <div
        class="text-onGoNext text-lg font-vazirmatn flex items-center cursor-pointer hover:text-primary transition"
      >
        View All
        <img src="/games/Right.arrow.svg" alt="" class="ml-2" />
      </div>
    </div>

    <!-- 🔹 Swiper -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 ">
      <Swiper
      v-if="reviewsArr.length"
        :modules="[Autoplay, Pagination]"
        :slides-per-view="1.2"
        :centered-slides="true"
        :loop="true"
        :space-between="40"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        
        :breakpoints="{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }"
        :pagination="{ clickable: true }"
        @slideChange="onSlideChange"
        class="customer-reviews-swiper"
      >
        <SwiperSlide
          v-for="(review, i) in reviews"
          :key="i"
          v-slot="{ isActive }"
        >
          <div class="flex justify-center items-center mt-7 h-full pt-14">
            <ReviewCard
              :image="review.image"
              :name="review.name"
              :rating="review.rating"
              :text="review.text"
              :isActive="isActive"
              :bgImage="getBgVector(i)"
              :variant="getCardVariant(i)"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "~/components/cards/ReviewCard.vue";


interface Review {
  name: string
  image: string
  rating: number
  text: string
}


// useFetch is SSR-friendly in Nuxt 3 — returns { data, pending, error, refresh }
const { data: reviews, error } = await useFetch<Review[]>("/api/reviews");

// safe computed array to use in template (auto-unwrapped there)
const reviewsArr = computed(() => reviews.value ?? []);


const activeIndex = ref(0);

// const len = () => reviewsArr.value.length;

const getBgVector = (index: number) => {
  if (index === activeIndex.value) {
    return "/games/CustomerReviewsMainCard.png"
  } else if ((index === (activeIndex.value - 1 + reviewsArr.value.length) % reviewsArr.value.length)) {
    return "/games/CustomerReviewsLeftCard.png"
  } else if ((index === (activeIndex.value + 1) % reviewsArr.value.length)) {
    return "/games/CustomerReviewsRightCard.png"
  } else {
    return "/games/CustomerReviewsMainCard.png"
  }
}

const getCardVariant = (index: number) => {
  if (index === activeIndex.value) return "main"
  if ((index === (activeIndex.value - 1 + reviewsArr.value.length) % reviewsArr.value.length)) return "left"
  if ((index === (activeIndex.value + 1) % reviewsArr.value.length)) return "right"
  return "hidden"
}

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex
}
</script>

<style scoped> 
.customer-reviews-swiper .swiper-pagination {
  bottom: 5px !important;
  text-align: center;
}


:deep(.customer-reviews-swiper .swiper-pagination-bullet) {
   background: #FFFFFF !important;
  width: 0.5rem !important;
  height: 0.5rem !important;
  margin: 0 5px !important;
  transition: all 0.3s ease !important;
  opacity: 1 !important;
  border-radius: 50% !important;
}
 :deep(.customer-reviews-swiper .swiper-pagination-bullet-active) {
  background-color:  #FF6A16 !important; 
  width: 1rem !important;
  height: 1rem !important;
  opacity: 1 !important;
  transform: scale(1.15);
}
</style>
