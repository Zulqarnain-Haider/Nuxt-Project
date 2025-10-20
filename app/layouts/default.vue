<template>
  <div class="min-h-screen flex flex-col bg-page-gradient text-white">
    <Navbar />

    <main class="flex-1">
      <!-- ✅ Page Transition Wrapper -->
      <Transition name="slide-fade" mode="out-in">
        <NuxtPage />
      </Transition>
    </main> 

    <!-- ✅ Footer hidden on auth pages -->
    <Footer v-if="showFooter" />
  </div>
</template>

<script setup>
import Navbar from '~/components/layout/Navbar.vue'
import Footer from '~/components/layout/Footer.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// These pages will NOT show Footer

// Computed flag for footer visibility
const showFooter = computed(() => !route.path.startsWith('/auth'))
</script>

<style scoped>
.bg-page-gradient {
  background: linear-gradient(143.14deg, #2C3137 8.7%, #17191D 89.31%);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(60px); /* right se aaye */
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-60px); /* left ki taraf chala jaye */
}

</style>
