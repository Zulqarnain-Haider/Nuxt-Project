<template>
  <div
    class="relative bg-surface border border-onOutline h-[530px] sm:h-auto rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
  >
    <!-- Discount Badge -->
    <span
      v-if="discount"
      class="absolute top-2 left-2 bg-error text-onError text-xs font-bold px-2 py-1 rounded"
    >
      -{{ discount }}%
    </span>

    <!-- Game Image -->
    <img
      :src="image"
      :alt="title"
      class="w-full sm:h-56 md:h-64  object-cover rounded-lg mb-3"
    />

     <!-- Title + Stars -->
    <div class="flex items-center justify-between">
      <h3 class="font-semibold text-lg text-mainText truncate">
        {{ title }}
      </h3>
      <!-- Stars -->
      <div class="flex text-yellow-400 text-sm">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
    </div>
    
    <!-- Rating + Price -->
    <div class="flex items-center justify-between mt-2">
      <!-- Price -->
      <div class="flex items-center gap-2">
        <span class="line-through text-onMainText text-sm">${{ oldPrice }}</span>
        <span class="text-mainText font-semibold">${{ price }}</span>
      </div>

    <!-- Rating with Icon -->
      <div class="flex items-center gap-1 font-medium">
        <img src="/games/fi.svg.svg" alt="rating" class="w-6 h-6" />
        <span class="text-yellow-400 font-semibold">{{ rating }}</span>
        <span class="text-onMainText text-sm">/100</span>
      </div>

    </div>


        <div class="flex gap-2 mt-4">
      <!-- Primary Orange Button -->
      <UiButton class="flex-1" :width="0" :height="40"
      extraClass="bg-surface border-2 border-outline text-mainText hover:bg-outline"
      >
        Add to Cart
      </UiButton>
      <!-- Secondary Outline Button -->
      <UiButton class="flex-1" :width="0" :height="40"
      extraClass="bg-primary border-2 border-primary text-mainText hover:opacity-90"
      >
        Buy Now
      </UiButton>
    </div>

  </div>
</template>

<script setup>
defineProps({
  title: String,
  image: String,
  discount: Number,
  price: Number,
  oldPrice: Number,
  rating: Number,
})
</script>
