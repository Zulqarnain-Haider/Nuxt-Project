<template>
  <nav class="bg-surface border-b border-outline text-mainText px-10 py-4 flex items-center justify-between">
    <!-- Logo -->
<!-- <div class="flex items-center cursor-pointer"> -->
        <div class="flex items-center gap-[60px]">
      <!-- Mobile: Hamburger Menu -->
      <button class="md:hidden text-2xl">
        <!-- <i class="fa-solid fa-bars"></i> -->
         <img src="/public/games/HameburgerMenu.log.svg" alt="">
      </button>
  <div class="hidden md:block">
      <img src="/public/games/Navbar-logo.svg.svg" alt="E-Game Store Logo" class="h-10 w-auto" />
    </div>

    <!-- Nav Links (Desktop) -->
    <!-- <ul class="hidden md:flex items-center gap-6 font-medium">
      <li><a href="#" class="hover:text-primary">Home</a></li>
      <li><a href="#" class="hover:text-primary">PC Games</a></li>
      <li><a href="#" class="hover:text-primary">Xbox</a></li>
      <li><a href="#" class="hover:text-primary">PlayStation</a></li>
      <li><a href="#" class="hover:text-primary">Nintendo</a></li>
      <li><a href="#" class="hover:text-primary">Gift Cards</a></li>
      <li><a href="#" class="hover:text-primary">Deals</a></li>
      <li><a href="#" class="hover:text-primary">Pre-orders</a></li>
      <li><a href="#" class="hover:text-primary">Blog</a></li>
    </ul> -->
  
    <!-- Nav Links -->
    <ul class="hidden md:flex items-center gap-6 font-medium">
      <li v-for="(link, index) in links" :key="index" class="relative group">
        <NuxtLink
          :to="link.path"
          class="transition-colors duration-300"
          :class="isActive(link.path) ? 'text-primary' : 'hover:text-primary'"
        >
          {{ link.label }}
        </NuxtLink>

        <!-- Underline -->
        <span
          class="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] bg-primary transition-all duration-300"
          :class="isActive(link.path) ? 'w-3/5' : 'w-0 group-hover:w-3/5'"
        ></span>
      </li>
    </ul>
      </div>

       <!-- Right Side -->
    <div class="flex items-center gap-4">
              <!-- Search Icon -->
      <button class="text-xl hover:text-primary">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
            <!-- Mobile: Logo -->
      <div class="hidden ">
      <img src="/public/games/Navbar-logo.svg.svg" alt="E-Game Store Logo" class="h-10 w-auto" />
    </div>
          <!-- Desktop: Sign In Button -->
      <NuxtLink to="/signin" class="hidden md:inline-block bg-primary text-mainText px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition">
        Sign In
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const links = [
  { label: "Home", path: "/" },
  { label: "PC Games", path: "/pc" },
  { label: "Xbox", path: "/xbox" },
  { label: "PlayStation", path: "/playstation" },
  { label: "Nintendo", path: "/nintendo" },
  { label: "Gift Cards", path: "/gifts" },
  { label: "Deals", path: "/deals" },
  { label: "Pre-orders", path: "/preorders" },
  { label: "Blog", path: "/blog" },
]

const isActive = (path) => route.path === path
</script>
