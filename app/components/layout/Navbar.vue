<template>
  <nav
    class="bg-bgNav text-mainText px-4 sm:px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6
    sticky top-0 z-50 flex items-center justify-between flex-wrap"
  >
    <!-- ========== LEFT SECTION ========== -->
    <div class="flex items-center gap-3 md:gap-4 xl:gap-6">
      <!--  Hamburger: visible on mobile + iPads -->
      <button class="block xl:hidden text-2xl" @click="isOpen = true">
        <img src="/games/HameburgerMenu.log.svg" alt="menu" />
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

      <!--  Search (desktop only) -->
      <button class="hidden xl:flex text-lg"> 
        <img src="/games/NavSearch.icon.svg" alt="search" class="w-5"
          @click="goToSearch"
 />
      </button>
    </div>

    <!-- ========== RIGHT SECTION ========== -->
    <div class="flex items-center gap-2 sm:gap-3 md:gap-4">
      <!-- 📱 Mobile + iPad -->
      <div class="flex xl:hidden items-center gap-2 sm:gap-3 md:gap-4">
        <!-- Search -->
        <button class="text-xl hover:text-primary">
          <img src="/games/NavSearch.icon.svg" alt="search" 
            @click="goToSearch"
/>
        </button>

        <!-- 🔹 Sign In or Avatar -->
        <NuxtLink
          v-if="!isLoggedIn"
          to="/auth/login"
          class="bg-primary text-mainText px-4 py-1.5 md:py-1.5 rounded-md text-xs font-poppins sm:text-sm font-medium hover:opacity-90 transition"
        >
          Sign In
        </NuxtLink>

        <div v-else class="relative group">
          <img
  v-if="userStore.currentUser?.avatar"
  :src="userStore.currentUser.avatar"
  alt="User Avatar"
  class="w-10 h-10 rounded-full object-cover  cursor-pointer"
   />
  <i
  v-else
  class="fa-solid fa-user-circle text-primary text-3xl cursor-pointer"
    ></i>
 
          <div
            class="absolute right-0 mt-2 hidden group-hover:block bg-surface border border-outline rounded-md shadow-lg"
          >
            <button
              class="px-3 py-2 text-sm hover:text-primary w-full text-left"
              @click="logoutUser"
            >
              Logout
            </button>
            <NuxtLink to="/profile">
             <button
              class="px-3 py-2 text-sm text-mainText flex items-center font-semibold hover:text-primary w-full text-left"
              @click=""
            >
              Profile
              <i class="fa-solid fa-arrow-right-to-bracket ml-2"></i>
            </button>
            </NuxtLink>
          </div>
        </div>

        <img
          src="/games/Navbar-logo.svg.svg"
          alt="E-Game Store"
          class="h-8 sm:h-9 xl:h-8 w-auto flex xl:hidden"
        />
      </div>

      <!--Desktop -->
      <div class="hidden xl:flex items-center gap-4 2xl:gap-6">
        <div class="relative group">
  <button
    class="flex items-center text-[13px] hover:text-primary font-roboto gap-1"
  >
    <i class="fa-solid fa-location-dot text-[18px]"></i>

    <!-- Show flag + name -->
    <NuxtImg 
    densities="x1" quality="80" format="webp" loading="lazy"
      v-if="selectedCountry?.flag"
      :src="selectedCountry.flag"
      alt="flag"
      class="w-5 h-5 rounded-sm ml-1"
    />
    <span>{{ selectedCountry?.name || 'Select Country' }}</span>

    <NuxtImg 
    densities="x1" quality="80" loading="lazy"
      src="/games/arrowsHeader.icon.svg"
      alt="arrow"
      class="w-3 ml-1 transition-transform duration-200 group-hover:rotate-180"
    />
  </button>

  <!-- Dropdown -->
  <ul
    class="absolute right-0 mt-2 hidden group-hover:block bg-surface border border-outline 
    rounded shadow-lg text-sm max-h-60 overflow-y-auto z-50 min-w-[170px]"
  >
    <li
      v-if="isLoadingCountries"
      class="px-3 py-2 text-center text-onFooter"
    >
      Loading...
    </li>

    <li
      v-for="country in countries"
      :key="country.id"
      class="flex items-center gap-2 px-3 py-2 hover:bg-outline hover:text-white cursor-pointer"
      @click="selectCountry(country)"
    >
      <NuxtImg
    densities="x1" quality="80" format="webp" loading="lazy"
        :src="country.flag"
        alt="flag"
        class="w-5 h-5 rounded-sm"
      />
      {{ country.name }}
    </li>
    </ul>
   </div>

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
            <li class="px-3 py-2 hover:bg-outline hover:text-white">YUN</li>
            <li class="px-3 py-2 hover:bg-outline hover:text-white">RYL</li>

          </ul>
        </div>

        <!-- Sign In / Avatar (Desktop) -->
        <NuxtLink
          v-if="!isLoggedIn"
          to="/auth/login"
          class="bg-primary text-mainText px-4 py-1.5 rounded-md 
          text-[15px] font-medium hover:opacity-90 transition font-roboto"
        >
          Sign In
        </NuxtLink>

        <div v-else class="relative group font-poppins">
         <img
  v-if="userStore.currentUser?.avatar"
  :src="userStore.currentUser.avatar"
  alt="User Avatar"
  class="w-10 h-10 rounded-full object-cover cursor-pointer"
/>
<i
  v-else
  class="fa-solid fa-user-circle text-primary text-3xl cursor-pointer"
></i>

          <div
            class="absolute right-0 mt-2 hidden group-hover:block bg-surface border border-outline rounded-md shadow-lg"
          >
            <button
              class="px-2 py-2 text-sm text-mainText flex items-center font-semibold hover:text-primary w-full text-left"
              @click="logoutUser"
            >
              Logout
              <i class="fa-solid fa-arrow-right-from-bracket ml-2"></i>
            </button>
            <NuxtLink to="/profile">
              <button
              class="px-3 py-2 text-sm text-mainText flex items-center font-semibold hover:text-primary w-full text-left"
              @click="router.push('/profile')"
            >
              Profile
              <i class="fa-solid fa-arrow-right-to-bracket ml-2"></i>
            </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <!-- ====== Sidebar (mobile) ====== -->
    <transition name="slide">
      <div v-if="isOpen" class="fixed inset-0 z-40 flex">
        <div class="absolute inset-0 bg-black bg-opacity-50" @click="isOpen = false"></div>
        <div class="relative z-50 h-full w-72 bg-bgDark shadow-lg flex flex-col">
          <div class="flex items-center justify-between px-3 py-3 border-b border-outline">
            <img src="/games/Navbar-logo.svg.svg" alt="Logo" class="h-6" />
            <button @click="isOpen = false" class="text-2xl text-primary">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul class="flex flex-col gap-4 px-6 py-4 font-medium font-poppins text-lg">
            <li v-for="(link, i) in links" :key="i">
              <NuxtLink
                :to="link.path"
                  @click="handleSidebarLinkClick"
                :class="isActive(link.path) ? 'text-primary' : 'hover:text-primary'"
                class="block py-2 transition-colors"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useUserStore } from '~/stores/userStore'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)
const userStore = useUserStore()


const countries = ref([])
const isLoadingCountries = ref(false)
const selectedCountry = ref(null)

const isLoggedIn = computed(() => !!userStore.currentUser)

watch(
  () => userStore.currentUser,
  (newVal) => {
    if (newVal) {
      localStorage.setItem('currentUser', JSON.stringify(newVal))
    }
  },
  { deep: true }
)

const config = useRuntimeConfig()

onMounted(async () => {
  try {
     const apiBase = config.public.apiBase
     const url = `${apiBase}/countries?category_id=1`
    if (!apiBase) {
      console.error('API Base URL is undefined. Check your .env file.')
      return
    }

    isLoadingCountries.value = true
    const data = await $fetch(url)

    if (data.status && data.data) {
      countries.value = data.data
      console.log('Countries loaded:', countries.value)
    } else {
      console.error(' API failed or empty:', data)
    }
  } catch (err) {
    console.error('Error fetching countries:', err)
  } finally {
    isLoadingCountries.value = false
  }
})

onMounted(() => {
  const saved = localStorage.getItem('selectedCountry')
  if (saved) selectedCountry.value = JSON.parse(saved)
})


function selectCountry(country) {
  selectedCountry.value = country
  localStorage.setItem('selectedCountry', JSON.stringify(country))
}



const logoutUser = () => {
  userStore.logout()
  router.push('/auth/login')
}

const links = [
  { label: "Home", path: "/" },
  { label: "PC Games", path: "/category/pc" },
  { label: "Xbox", path: "/category/xbox" },
  { label: "PlayStation", path: "/category/playstation" },
  { label: "Nintendo", path: "/category/nintendo" },
  { label: "Gift Cards", path: "/category/gifts" },
  { label: "Deals", path: "/category/deals" },
  { label: "Pre-orders", path: "/category/preorders" },
  { label: "Blog", path: "/blog" },
]

const isActive = (p) => route.path === p
watch(isOpen, (v) => (document.body.style.overflow = v ? "hidden" : "auto"))

const handleSidebarLinkClick = () => {
  setTimeout(() => {
    isOpen.value = false
  }, 100) // 100ms delay
}

function goToSearch() {
  router.push('/search')
}



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
