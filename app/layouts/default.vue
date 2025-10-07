<template>
  <div class="min-h-screen flex flex-col bg-page-gradient text-white">

    <Navbar />

    <main class="flex-1">
    <slot />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue' 
</script>

<style scoped>
.bg-page-gradient {
  background: linear-gradient(180deg, #111 0%, #222 100%);
}
</style>
