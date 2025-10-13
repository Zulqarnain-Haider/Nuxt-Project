<template>
  <div
    class="relative bg-surface border border-outline rounded-xl p-3 sm:p-4 md:p-5 shadow-md 
    hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full"
  >
    <!-- Discount Badge -->
    <!-- <span
      v-if="discount"
      class="absolute top-2 left-2 bg-onGoNext text-onError 
      text-xs md:textsm font-vazirmatn px-2 py-1 rounded-lg z-20"
    >
      {{ discount }}%
    </span> -->

    <!-- Game Image -->
    <div class="relative mb-2 md:mb-1 xl:mb-3">
      <img
        :src="image"
        :alt="title"
        class="w-full h-[180px] sm:h-[180px] md:h-[180px] lg:h-[190px] xl:h-[230px] object-cover rounded-lg"
      />
    </div>

    <!-- Title + Stars -->
    <div class="flex items-center justify-between">
      <h3
        class="font-semibold text-xs sm:text-xs md:text-sm text-mainText truncate"
      >
        {{ title }}
      </h3>
    </div>

    <!-- Price + Rating -->
    <div class="flex items-center justify-between mt-2 md:mt-1 xl:mt-2">
      <div class="flex items-center gap-1 md:gap-1 xl:gap-2">
        <span
          class="line-through text-onMainText text-xs sm:text-sm flex items-baseline" 
          >{{ oldPrice }}<span class="text-[10px] sm:text-[11px] mr-[1px]">$</span></span
        >
        <span
          class="text-mainText text-xs sm:text-base flex items-baseline"
          >{{ price }}<span class="text-[11px] sm:text-[12px] mr-[1px]">$</span></span
        >
      </div>
    </div>

    <!-- Buttons -->
<!-- Calendar / Pre-Order Info -->
<div class="flex justify-between items-center mt-3 text-white text-xs sm:text-sm">
  <!-- Left: Date -->
  <div class="flex items-center text-onMainText gap-2">
    <img src="/games/calendar.svg.svg" alt="Calendar" class="w-4 h-4 opacity-80" />
    <span>{{ releaseDate }}</span>
  </div>

  <!-- Right: Button / CTA -->
  <div class="flex items-center gap-1 cursor-pointer">
    <span class="font-vazirmatn">{{ buttonText }}</span>
    <img src="/games/TournamentCard.arrow.svg" alt="→" class="w-3 h-3 sm:w-4 sm:h-4" />
  </div>
</div>


  </div>
</template>

<script setup>
import UiButton from '~/components/ui/Button.vue'
defineProps({
  title: String,
  image: String,
  price: Number,
  oldPrice: Number,
  releaseDate: String, // e.g. "Mid 2026  Pre-Order"
  buttonText: { type: String, default: "Pre-Order" },

})
</script>
