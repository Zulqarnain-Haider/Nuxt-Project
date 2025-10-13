<template>
  <section class="relative w-full py-20 text-white overflow-hidden">
    <!-- 🔹 Title -->
    <div class="relative z-10 text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-extrabold font-poppins">
        What Our <span class="text-primary">Gamers</span> Say
      </h2>
    </div>

    <!-- 🔹 Swiper -->
    <div class="relative z-10 max-w-6xl mx-auto px-4 md:pb-14 lg:pb-16">
      <Swiper
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
          <div class="flex justify-center items-center h-full py-20 md:py-28 xl:py-36">
            <ReviewCard
              :image="review.image"
              :name="review.name"
              :rating="review.rating"
              :text="review.text"
              :isActive="isActive"
              :bgImage="getBgVector(i)"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import ReviewCard from "~/components/cards/ReviewCard.vue";

const reviews = [
  {
    name: "Leo",
    image: "/games/ReviewCard1.png",
    rating: 4,
    text: "Step into a world where every click leads to a new adventure! With a sleek design, a massive game library, and lightning-fast performance, you’ll never want to log out.",
  },
  {
    name: "Hannah Schmitt",
    image: "/games/ReviewCard2.png",
    rating: 5,
    text: "Get ready to level up your fun! This site delivers thrilling games, non-stop updates, and a smooth, blazing-fast experience that keeps you hooked for hours.",
  },
  {
    name: "Alien Machal",
    image: "/games/ReviewCard3.png",
    rating: 4,
    text: "Great interface, smooth animations — it really feels like a gamer’s paradise!",
  },
  {
    name: "Leo",
    image: "/games/ReviewCard1.png",
    rating: 5,
    text: "From buying games to joining tournaments, everything is just seamless.",
  },
];

const activeIndex = ref(0)

const getBgVector = (index: number) => {
  if (index === activeIndex.value) {
    return "/games/CustomerReviewsMainCard.png"
  } else if ((index === (activeIndex.value - 1 + reviews.length) % reviews.length)) {
    return "/games/CustomerReviewsLeftCard.png"
  } else if ((index === (activeIndex.value + 1) % reviews.length)) {
    return "/games/CustomerReviewsRightCard.png"
  } else {
    return "/games/CustomerReviewsMainCard.png"
  }
}

const onSlideChange = (swiper: any) => {
  activeIndex.value = swiper.realIndex
}
</script>

<style scoped> 
.customer-reviews-swiper .swiper-pagination {
  bottom: -25px !important; /* ✅ dots thoda niche */
  text-align: center;
}

.customer-reviews-swiper .swiper-pagination-bullet {
   background: rgba(255, 255, 255, 0.3) !important;
  width: 8px !important;
  height: 8px !important;
  margin: 0 5px !important;
  transition: all 0.3s ease !important;
  opacity: 0.6 !important;
    border-radius: 50% !important;
}
.customer-reviews-swiper .swiper-pagination-bullet-active {
  background: theme('colors.primary') !important; /* ✅ Tailwind color variable use */
  width: 12px !important;
  height: 12px !important;
  opacity: 1 !important;
    transform: scale(1.1);
}
</style>
