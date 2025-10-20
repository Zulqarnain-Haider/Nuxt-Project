<template>
  <div class="min-h-screen font-poppins text-mainText flex flex-col items-center py-10  animate-fadeIn">
    <!-- 🧍‍♂️ Top Profile Card -->
    <div
      class="w-[90%] max-w-6xl bg-bgDark rounded-2xl flex items-center gap-6 px-6 py-6 shadow-lg"
    >
      <!-- Profile Image -->
      <div
        class="w-20 h-20 rounded-full border-2 border-onMainText overflow-hidden flex-shrink-0"
      >
        <img
          src="/games/ProfileAvatar.png"
          alt="User Avatar"
          class="object-cover"
        />
      </div>

      <!-- User Info -->
      <div class="flex flex-col">
        <h2 class="text-2xl font-semibold text-mainText">Alex Rodriguez</h2>
        <p class="text-onMainText text-sm">@Alex_Gamer_2024</p>

        <div class="flex items-center gap-2 mt-1 text-sm text-onMainText">
          <i class="fa-solid fa-star text-secondary"></i>
          <span class="text-mainText">Level 47 Gamer</span>
          <span class="">•</span>
          <span>Member since 2020</span>
        </div>
      </div>
    </div>

    <!-- 📄 Personal Information Section -->
    <div class="w-[90%] max-w-6xl mt-10">
      <!-- Section Header -->
      <div class="flex items-center gap-2 mb-4">
        <img src="/games/Profileicon.svg" alt="Profile Icon" class="" />
        <h3 class="text-lg font-semibold text-mainText">Personal Information</h3>
      </div>

      <!-- Inputs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Left Column -->
        <div class="flex flex-col gap-6">
          <!-- Full Name -->
          <div>
            <label class="block text-sm text-onMainText mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Alex Rodriguez"
              class="w-full bg-bgDark text-mainText px-4 py-3 rounded-lg outline-none
               placeholder:text-mainText focus:ring-2 focus:ring-primary"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm text-onMainText mb-1">Email</label>
            <input
              type="email"
              placeholder="alex.rodriguez@email.com"
              class="w-full bg-bgDark text-mainText px-4 py-3 rounded-lg outline-none
               placeholder:text-mainText focus:ring-2 focus:ring-primary"
            />
          </div>

          <!-- Bio -->
          <div>
            <label class="block text-sm text-onMainText mb-1">Bio</label>
            <textarea
              rows="4"
              placeholder="Passionate gamer with over 10 years of experience. Love RPGs, FPS, and indie games. Always looking for new adventures!"
              class="w-full bg-bgDark text-mainText px-4 py-3 rounded-lg outline-none 
            resize-none focus:ring-2 focus:ring-primary placeholder:text-mainText"
            ></textarea>
          </div>
        </div>

        <!-- Right Column -->
        <div class="flex flex-col gap-6">
          <!-- Username -->
          <div>
            <label class="block text-sm text-onMainText mb-1">Username</label>
            <input
              type="text"
              placeholder="@Alex_Gamer_2024"
              class="w-full bg-bgDark text-mainText px-4 py-3 rounded-lg outline-none
               placeholder:text-mainText focus:ring-2 focus:ring-primary"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm text-onMainText mb-1">Phone</label>
            <input
              type="text"
              placeholder="+1 (555) 123-4567"
              class="w-full bg-bgDark text-mainText px-4 py-3 rounded-lg 
              placeholder:text-mainText outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <!-- Password -->
          <div class="relative">
            <label class="block text-sm text-onMainText mb-1">Password</label>
            <input
              type="password"
              value="***********"
              readonly
              class="w-full bg-bgDark text-mainText px-4 py-3 rounded-lg outline-none 
              value:text-mainText focus:ring-2 focus:ring-primary"
            />
            <button
              class="absolute right-3 top-9 text-primary underline text-sm"
              @click="showPasswordModal = true"
            >
              change
            </button>
          </div>

        <!-- Password Change Modal -->
    <PasswordChangeModal
      :visible="showPasswordModal"
      @close="showPasswordModal = false"
    />


          <!-- Birthday -->
          <div>
            <label class="block text-sm text-onMainText mb-1">Birthday date</label>
            <input
              type="date"
              value="2000-10-17"
              class="w-full bg-bgDark text-mainText px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import PasswordChangeModal from '~/components/modals/PasswordChangeModal.vue'

const showPasswordModal = ref(false)

// Future: import { useUserStore } from '~/stores/userStore'
</script>

<style scoped>
input[type="date"]::-webkit-calendar-picker-indicator {
  filter: invert(1); /* icon colour white */
  cursor: pointer;
}
</style>
