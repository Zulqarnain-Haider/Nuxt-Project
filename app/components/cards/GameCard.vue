<template>
  <div class="relative bg-surface border border-onOutline rounded-xl p-3 sm:p-4 md:p-5 shadow-md 
    hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full">

    <!-- Game Image -->
    <div class="relative mb-2 md:mb-1 xl:mb-3">
      <img :src="image" :alt="title"
        class="w-full h-[180px] sm:h-[180px] md:h-[180px] lg:h-[190px] xl:h-[230px] object-cover rounded-lg" />
      <!-- Discount Badge -->
      <span v-if="discount" class="absolute top-0 left-0 bg-onGoNext text-onError 
      text-xs md:textsm font-vazirmatn px-2 py-1 rounded-lg z-20">
        {{ discount }}%
      </span>
    </div>

    <!-- Title + Stars -->
    <div class="flex items-center justify-between">
      <h3 class="font-semibold text-xs sm:text-xs md:text-sm text-mainText truncate">
        {{ title }}
      </h3>
      <div class="flex text-primary text-[10px] sm:text-xs lg:sm">
        <template v-for="n in 5" :key="n">
          <i v-if="n <= rating" class="fa-solid fa-star"></i>
          <i v-else class="fa-regular fa-star"></i>
        </template>
      </div>
    </div>

    <!-- Price + Rating -->
    <div class="flex items-center justify-between mt-2 md:mt-1 xl:mt-2">
      <div class="flex items-center gap-1 md:gap-1 xl:gap-2">
        <span class="line-through text-onMainText text-xs sm:text-sm flex items-baseline">{{ oldPrice }}<span
            class="text-[10px] sm:text-[11px] mr-[1px]">$</span></span>
        <span class="text-mainText text-xs sm:text-base flex items-baseline">{{ price }}<span
            class="text-[11px] sm:text-[12px] mr-[1px]">$</span></span>
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
    <div class="flex gap-2 mt-3 md:mt-1 xl:mt-3">
      <!--  Add to Cart (outline primary) -->
      <UiButton class="flex-1" :width="0" :height="38" variant="outline" extraClass="bg-surface text-mainText
         hover:bg-outline hover:text-white text-xs 
          font-vazirmatn py-2 sm:py-1 rounded-xl whitespace-nowrap">
        Add to Cart
      </UiButton>
      <!-- 🟠 Buy Now (solid primary background) -->
      <UiButton class="flex-1 " :width="0" :height="38" variant="primary" extraClass="bg-primary border-2 border-primary text-mainText
         hover:opacity-90 text-xs  font-vazirmatn py-2 rounded-xl whitespace-nowrap">
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
