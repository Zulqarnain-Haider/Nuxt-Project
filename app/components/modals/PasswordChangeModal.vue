<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
    >
      <!-- ✅ Card -->
      <div
        class="relative bg-center bg-no-repeat bg-contain flex flex-col items-center justify-center
         text-center w-[90%] max-w-md aspect-[4/5] sm:aspect-[4/4] md:aspect-[3/4] p-8 rounded-[3rem] shadow-2xl animate-fadeIn"
        :style="{ backgroundImage: success 
          ? 'url(/games/PopupMainCard.png)' 
          : 'url(/games/PopupMainCard.png)' }"
      >

        <!-- ✅ SUCCESS CONTENT -->
        <template v-if="success">
          <div class="flex flex-col items-center justify-center space-y-6 scale-[0.6]">
            <img
              src="/games/ResetPasswordSuccess.svg"
              alt="Success"
              class="w-16 h-16 sm:w-20 sm:h-20"
            />
            <h2 class="text-mainText font-semibold tracking-wide max-w-[50%] mx-auto text-xl sm:text-2xl leading-snug">
              Your Password Successfully Changed
            </h2>
            <button
              @click="closeModal"
              class="bg-primary w-full text-mainText px-8 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Home
            </button>
          </div>
        </template>

        <!-- ✅ PASSWORD FORM CONTENT -->
        <template v-else>
          <div class="flex flex-col items-center w-full max-w-xs 
          sm:max-w-sm  space-y-4 sm:space-y-5 scale-50 ">
            <img
              src="/games/ForgotPasswordLock.svg"
              alt="Lock"
              class="w-16 h-16 sm:w-20 sm:h-20 self-start ml-2 sm:ml-0"
            />

            <div class="text-left">
              <h2 class="text-mainText font-semibold text-2xl mb-1">
                Set New Password
              </h2>
              <p class="text-inputsIn text-xs sm:text-sm mb-4 pr-4 sm:pr-8">
                Create a new password that is at least 8 characters long.
              </p>
            </div>

            <form @submit.prevent="handleSave" class="w-full space-y-3 sm:space-y-4">
              <!-- Current Password -->
              <div class="text-left text-xs sm:text-sm">
                <label class="block text-inputsIn mb-1">
                  Enter Current Password
                </label>
                <div class="relative">
                  <img
                    src="/games/InputsLockicon.svg"
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    :type="showCurrent ? 'text' : 'password'"
                    v-model="currentPassword"
                    placeholder="Enter current password"
                    class="w-full bg-transparent border border-outline text-inputsIn rounded-md 
                    px-10 py-2 focus:outline-none focus:border-primary placeholder-inputsIn"
                  />
                  <button
                    type="button"
                    @click="showCurrent = !showCurrent"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-inputsIn"
                  >
                    <i :class="showCurrent ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
                  </button>
                </div>
              </div>

              <!-- New Password -->
              <div class="text-left text-xs sm:text-sm">
                <label class="block text-inputsIn mb-1">
                  Enter New Password
                </label>
                <div class="relative">
                  <img
                    src="/games/InputsLockicon.svg"
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    :type="showNew ? 'text' : 'password'"
                    v-model="newPassword"
                    placeholder="Enter new password"
                    class="w-full bg-transparent border border-outline text-inputsIn rounded-md
                     px-10 py-2 focus:outline-none focus:border-primary placeholder-inputsIn"
                  />
                  <button
                    type="button"
                    @click="showNew = !showNew"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-inputsIn"
                  >
                    <i :class="showNew ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
                  </button>
                </div>
              </div>

              <!-- Confirm Password -->
              <div class="text-left text-xs sm:text-sm">
                <label class="block text-inputsIn mb-1">
                  Confirm New Password
                </label>
                <div class="relative">
                  <img
                    src="/games/InputsLockicon.svg"
                    class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5"
                  />
                  <input
                    :type="showConfirm ? 'text' : 'password'"
                    v-model="confirmPassword"
                    placeholder="Confirm new password"
                    class="w-full bg-transparent border border-outline text-inputsIn rounded-md
                     px-10 py-2 focus:outline-none focus:border-primary placeholder-inputsIn"
                  />
                  <button
                    type="button"
                    @click="showConfirm = !showConfirm"
                    class="absolute right-3 top-1/2 -translate-y-1/2 text-inputsIn"
                  >
                    <i :class="showConfirm ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'"></i>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                class="w-full bg-primary text-white py-2 rounded-md hover:bg-orange-600 transition"
              >
                Save New Password
              </button>

              <NuxtLink to="/auth/forgot-password">
                <p class="text-xs mt-3 underline cursor-pointer text-primary">
                  forgot password?
                </p>
              </NuxtLink>
            </form>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({ visible: Boolean })
const emit = defineEmits(['close'])

const success = ref(false)
const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const showCurrent = ref(false)
const showNew = ref(false)
const showConfirm = ref(false)

const handleSave = () => {
  if (newPassword.value && newPassword.value === confirmPassword.value) {
    setTimeout(() => {
      success.value = true
    }, 400)
  } else {
    alert('Passwords do not match!')
  }
}

const closeModal = () => {
  success.value = false
  emit('close')
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
