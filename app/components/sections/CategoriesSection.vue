<template>
  <section>
    <div class="flex items-center justify-between">
      <h3 class="text-2xl font-semibold">Game Categories</h3>
      <div class="text-onMainText text-sm">Browse by category</div>
    </div>

    <div class="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      <div v-for="(c,i) in cats" :key="i" class="relative rounded-lg overflow-hidden h-28">
        <img :src="c.image" :alt="c.title" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/30 flex items-center justify-center">
          <span class="text-white font-semibold">{{ c.title }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const cats = [
  { title: 'Sports & Racing', image: '/games/cat-sports.jpg' },
  { title: 'RPG', image: '/games/cat-rpg.jpg' },
  { title: 'Adventure', image: '/games/cat-adventure.jpg' },
  { title: 'Strategy', image: '/games/cat-strategy.jpg' },
  { title: 'Survival', image: '/games/cat-survival.jpg' },
  { title: 'Action', image: '/games/cat-action.jpg' }
]
</script>
