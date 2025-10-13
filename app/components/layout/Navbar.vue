<template>
  <nav
    class="bg-surface border-b border-outline text-mainText px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 flex items-center justify-between flex-wrap"
  >
    <!-- ========== LEFT SECTION ========== -->
    <div class="flex items-center gap-3 md:gap-4 xl:gap-6">
      <!--  Hamburger: visible on mobile + iPads -->
      <button class="block xl:hidden text-2xl" @click="isOpen = true">
        <img src="/games/HameburgerMenu.log.svg" alt="menu" class="" />
      </button>

      <!--  Logo -->
      <img
        src="/games/Navbar-logo.svg.svg"
        alt="E-Game Store"
        class="h-8 sm:h-9 xl:h-8 w-auto hidden xl:flex"
      />

      <!--  Nav links (visible on laptops / desktops) -->
      <ul
        class="hidden xl:flex items-center gap-4 2xl:gap-6 font-medium text-[17px] 2xl:text-[19px]"
      >
        <li
          v-for="(link, i) in links"
          :key="i"
          class="relative group transition-all"
        >
          <NuxtLink
            :to="link.path"
            :class="isActive(link.path) ? 'text-primary' : 'hover:text-primary'"
            class="transition-colors"
          >
            {{ link.label }}
          </NuxtLink>
          <span
            class="absolute left-1/3 -translate-x-1/2 bottom-[-3px] h-[2px] bg-primary rounded transition-all duration-300"
            :class="isActive(link.path) ? 'w-3/5' : 'w-0 group-hover:w-3/5'"
          ></span>
        </li>
      </ul>

      <!--  Search (desktop only, left side) -->
      <button class="hidden xl:flex text-lg">
        <img src="/games/NavSearch.icon.svg" alt="search" class="w-5" />
      </button>
    </div>

    <!-- ========== RIGHT SECTION ========== -->
    <div class="flex items-center gap-2 sm:gap-3 md:gap-4">
      <!-- 📱 Mobile + iPad (up to 1180 px) -->
      <div class="flex xl:hidden items-center gap-2 sm:gap-3 md:gap-4">
        <!-- Search -->
        <button class="text-xl hover:text-primary">
          <img src="/games/NavSearch.icon.svg" alt="search"/>
        </button>

        <!--  Map + EN + USD for iPad only -->
        <!-- <div class="hidden sm:flex items-center gap-3 md:gap-4">
          <button class="flex items-center gap-1  hover:text-primary">
            <i class="fa-solid fa-location-dot text-[18px]"></i><span class="text-[14px]">Spain</span>
          </button> -->
          <!-- <div class="relative group">
            <button class="flex items-center gap-1 text-[12px] lg:text-[10px] hover:text-primary">
              EN <img src="/games/arrowsHeader.icon.svg" class="w-3" />
            </button>
            <ul
              class="absolute right-0 mt-2 hidden group-hover:block bg-surface border border-outline rounded shadow-lg text-sm"
            >
              <li class="px-3 py-2 hover:bg-outline hover:text-white">EN</li>
              <li class="px-3 py-2 hover:bg-outline hover:text-white">FR</li>
              <li class="px-3 py-2 hover:bg-outline hover:text-white">DE</li>
            </ul>
          </div>
          <div class="relative group">
            <button class="flex items-center gap-1 text-[12px] hover:text-primary">
              USD <img src="/games/arrowsHeader.icon.svg" class="w-3" />
            </button>
            <ul
              class="absolute right-0 mt-2 hidden group-hover:block bg-surface border border-outline rounded shadow-lg text-sm"
            >
              <li class="px-3 py-2 hover:bg-outline hover:text-white">USD</li>
              <li class="px-3 py-2 hover:bg-outline hover:text-white">EUR</li>
              <li class="px-3 py-2 hover:bg-outline hover:text-white">PKR</li>
            </ul>
          </div> -->

        <!-- Sign In -->
        <NuxtLink
          to="/signin"
          class="bg-primary text-mainText px-4 py-1.5 md:py-1.5 rounded-md text-xs font-poppins sm:text-sm font-meum hover:opacity-90 transition"
        >
          Sign In
        </NuxtLink>

        <img
        src="/games/Navbar-logo.svg.svg"
        alt="E-Game Store"
        class="h-8 sm:h-9 xl:h-8 w-auto flex xl:hidden"
      />
      </div>

      <!--  Desktop / Laptop (≥1181 px) -->
      <div class="hidden xl:flex items-center gap-4 2xl:gap-6">
        <button class="flex items-center text-[13px] hover:text-primary font-roboto">
          <i class="fa-solid fa-location-dot text-[18px] mr-1"></i>Spain
        </button>
        <div class="relative group">
          <button class="flex items-center gap-1 text-[12px] hover:text-primary font-roboto">
            EN <img src="/games/arrowsHeader.icon.svg" class="w-3" />
          </button>
          <ul
            class="absolute right-0 mt-2 hidden group-hover:block bg-surface border
             border-outline rounded shadow-lg text-sm"
          >
            <li class="px-3 py-2 hover:bg-outline hover:text-white">EN</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">FR</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">DE</li>
          </ul>
        </div>
        <div class="relative group">
          <button class="flex items-center gap-1 text-[12px] hover:text-primary font-roboto">
            USD <img src="/games/arrowsHeader.icon.svg" class="w-3" />
          </button>
          <ul
            class="absolute right-0 mt-2 hidden group-hover:block bg-surface border
             border-outline rounded shadow-lg text-sm"
          >
            <li class="px-3 py-2 hover:bg-outline hover:text-white">USD</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">EUR</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">PKR</li>
          </ul>
        </div>
        <NuxtLink
          to="/signin"
          class="bg-primary text-mainText px-4 py-1.5 rounded-md 
          text-[15px] font-medium hover:opacity-90 transition font-roboto"
        >
          Sign In
        </NuxtLink>
      </div>
    </div>

    <!-- ========== SLIDE SIDEBAR (mobile + iPads) ========== -->
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 z-40 flex">
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="isOpen = false"></div>
        <div class="relative z-50 h-full w-72 bg-bgDark shadow-lg flex flex-col">
          <!-- Header -->
          <div class="flex items-center justify-between px-3 py-3 border-b border-outline">
            <div class="flex items-center gap-3">
              <img src="/games/Navbar-logo.svg.svg" alt="Logo" class="h-6" />
              <button><img src="/games/NavSearch.icon.svg" alt="search" class="w-" /></button>
            </div>
            <button @click="isOpen = false" class="text-2xl text-primary">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <!-- Links -->
          <ul class="flex flex-col gap-4 px-6 py-4 font-medium font-poppins text-lg">
            <li v-for="(link, i) in links" :key="i">
              <NuxtLink
                :to="link.path"
                :class="isActive(link.path) ? 'text-primary' : 'hover:text-primary'"
                class="block py-2 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Footer (mobile only) -->
          <div class="mt-2 border-t border-outline px-6 py-4 flex items-center justify-between ">
        <!-- Language dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-2 text-sm hover:text-primary font-roboto">
            EN <img src="/games/arrowsHeader.icon.svg" class="w-3" />
          </button>
          <ul
            class="absolute left-0 mt-2 hidden group-hover:block bg-surface border
             border-outline rounded shadow-lg text-sm"
          >
            <li class="px-3 py-2 hover:bg-outline hover:text-white">EN</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">FR</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">DE</li>
          </ul>
        </div>

        <!-- Currency dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-2 text-sm hover:text-primary font-roboto">
            USD <img src="/games/arrowsHeader.icon.svg" class="w-3" />
          </button>
          <ul
            class="absolute left-0 mt-2 hidden group-hover:block bg-surface border border-outline rounded shadow-lg text-sm"
          >
            <li class="px-3 py-2 hover:bg-outline hover:text-white">USD</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">EUR</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">PKR</li>
          </ul>
        </div>

       <button class="hover:text-primary text-[18px]">
        <i class="fa-solid fa-location-dot"></i> <span class="text-[15px]">Spain</span></button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const isOpen = ref(false)

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

const isActive = (p) => route.path === p
watch(isOpen, (v) => (document.body.style.overflow = v ? "hidden" : "auto"))
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
