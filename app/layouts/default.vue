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
  background: linear-gradient(143.14deg, #2C3137 8.7%, #17191D 89.31%);
}
</style>
