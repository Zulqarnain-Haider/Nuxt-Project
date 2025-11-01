<template>
  <div
    class="bg-bgDark border border-outline rounded-lg overflow-hidden shadow-md flex flex-col 
    transition-all duration-300 hover:scale-[1.04] hover:shadow-lg"
  >
    <!-- ===== Image Section ===== -->
    <div class="relative px-4 pb-4 pt-6">
      <NuxtImg
        :src="image"
        alt="Product Image"
        class="w-full h-44 sm:h-48 md:h-52 rounded-lg object-cover"
        densities="x1"
        quality="80"
        format="webp"
        loading="lazy"
      />

      <!-- ❤️ Heart -->
      <div
        class="absolute top-7 left-7 bg-mainText transition-all duration-300 p-2 rounded-full cursor-pointer hover:scale-110"
      >
        <NuxtImg
          src="/games/RelatedHeart.svg"
          densities="x1"
          quality="80"
          loading="lazy"
          class="w-5 h-5 object-center"
        />
      </div>
    </div>

    <!-- ===== Details Section ===== -->
    <div class="px-4 pb-10 flex flex-col justify-between flex-1">
      <div class="relative">
        <h3 class="text-mainText font-semibold text-lg mb-1 truncate">
          {{ title }}
        </h3>

        <!-- ⭐ Rating (Font Awesome) -->
        <div class="flex items-center text-yellow-400 text-xs mb-3">
          <template v-for="i in 5" :key="i">
            <i
              :class="[
                'mr-1',
                i <= Math.round(rating / 20)
                  ? 'fa-solid fa-star'
                  : 'fa-regular fa-star'
              ]"
            ></i>
          </template>
          <span class="text-mainText text-[12px] ml-1">({{ rating }})</span>
        </div>
  
          <!-- 👁️ Eye -->
      <div
        class="absolute top-9 right-3 bg-primary/20 transition-all duration-300 p-3
         rounded-md cursor-pointer hover:scale-110"
      >
        <NuxtImg
          src="/games/RelatedEye.svg"
          densities="x1"
          quality="80"
          loading="lazy"
          class="w-5 h-5 object-cover object-center"
        />
      </div> 

        <!-- 💰 Price -->
        <p class="text-mainText font-semibold text-xl">
          ${{ price }}
        </p>
      </div>

      <!-- 🛒 Add to Cart -->
      <AppButton
        variant="primary"
        full
        extraClass="mt-3 h-12 flex items-center rounded-full font-semibold text-md justify-center gap-2 py-2"
      >
        <NuxtImg
          src="/games/RelatedCart.svg"
          densities="x1"
          quality="80"
          loading="lazy"
        />
        Add to Cart
      </AppButton>
    </div>
  </div>
</template>

<script setup>
import AppButton from '~/components/ui/Button.vue'

defineProps({
  image: { type: String, default: '/games/RelatedItem.png' },
  title: { type: String, default: 'Minecraft Java Edition' },
  price: { type: [String, Number], default: '1,249.99' },
  rating: { type: [String, Number], default: 80 },
})
</script>
