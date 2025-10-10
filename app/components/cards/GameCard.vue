<template>
  <div
    class="relative bg-surface border border-outline rounded-xl p-3 sm:p-4 md:p-5 shadow-md 
    hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
  >
    <!-- Discount Badge -->
    <span
      v-if="discount"
      class="absolute top-2 left-2 bg-onGoNext text-onError 
      text-xs md:textsm font-vazirmatn px-2 py-1 rounded-lg z-20"
    >
      {{ discount }}%
    </span>

    <!-- Game Image -->
    <div class="relative mb-3">
      <img
        :src="image"
        :alt="title"
        class="w-full h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-lg"
      />
    </div>

    <!-- Title + Stars -->
    <div class="flex items-center justify-between">
      <h3
        class="font-semibold text-sm sm:text-xs md:text-sm text-mainText truncate"
      >
        {{ title }}
      </h3>
      <div class="flex text-yellow-400 text-xs sm:text-sm">
        <i class="fa-solid fa-star" />
        <i class="fa-solid fa-star" />
        <i class="fa-solid fa-star" />
        <i class="fa-solid fa-star" />
        <i class="fa-regular fa-star" />
      </div>
    </div>

    <!-- Price + Rating -->
    <div class="flex items-center justify-between mt-2">
      <div class="flex items-center gap-2">
        <span
          class="line-through text-onMainText text-xs sm:text-sm"
          >${{ oldPrice }}</span
        >
        <span
          class="text-mainText text-sm sm:text-base"
          >${{ price }}</span
        >
      </div>
      <div class="flex items-center gap-1 font-medium">
        <img src="/games/fi.svg.svg" alt="rating" class="w-4 h-4 sm:w-5 sm:h-5" />
        <span class="text-yellow-400 font-semibold text-xs sm:text-sm">{{
          rating
        }}</span>
        <span class="text-onMainText text-xs">/100</span>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex gap-2 mt-3">
      <UiButton
        class="flex-1"
        :width="0"
        :height="38"
        extraClass="bg-surface border-2 border-outline text-mainText
         hover:bg-outline hover:text-white text-sm 
          font-vazirmatn py-2 rounded-xl whitespace-nowrap"
      >
        Add to Cart
      </UiButton>
      <UiButton
        class="flex-1 "
        :width="0"
        :height="38"
        extraClass="bg-primary border-2 border-primary text-mainText
         hover:opacity-90 text-sm sm:text-sm  font-vazirmatn py-2 rounded-xl whitespace-nowrap"
      >
        Buy Now
      </UiButton>
    </div>
  </div>
</template>

<script setup>
import UiButton from '~/components/ui/Button.vue'
defineProps({
  title: String,
  image: String,
  discount: Number,
  price: Number,
  oldPrice: Number,
  rating: Number,
})
</script>
