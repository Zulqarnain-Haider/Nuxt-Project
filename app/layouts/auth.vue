<template>
  <div class="min-h-screen bg-page-gradient text-white flex flex-col">

    <!-- Navbar visible even on auth pages -->
    <Navbar />

    <main class="flex-1">
      <Transition name="slide-fade" mode="out-in">
        <NuxtPage />
      </Transition>
    </main>
  </div>
</template>

<script setup>
import Navbar from '~/components/layout/Navbar.vue'
</script>


<style scoped>
.bg-page-gradient {
  background: linear-gradient(180deg, #111 0%, #222 100%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(60px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-60px);
}
</style>
