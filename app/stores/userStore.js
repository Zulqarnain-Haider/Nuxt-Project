// stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users') || '[]'),
    currentUser: JSON.parse(localStorage.getItem('currentUser') || 'null'),
  }),

  actions: {
    // 🔹 Signup action
    signup(newUser) {
      // Email OR Phone dono me se kisi ek ka match check
      const exists = this.users.find(
        u => u.email === newUser.email || u.phone === newUser.phone
      )

      if (exists) {
        return { success: false, message: 'Email or phone already registered.' }
      }

      this.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(this.users))
      this.currentUser = newUser
      localStorage.setItem('currentUser', JSON.stringify(newUser))

      return { success: true, message: 'Signup successful!' }
    },

    // 🔹 Login action
    login(identifier, password) {
      // user.email OR user.phone dono check
      const found = this.users.find(
        u =>
          (u.email === identifier || u.phone === identifier) &&
          u.password === password
      )

      if (!found) {
        return { success: false, message: 'Invalid email/phone or password.' }
      }

      this.currentUser = found
      localStorage.setItem('currentUser', JSON.stringify(found))

      return { success: true, message: 'Login successful!' }
    },

    // 🔹 Logout action
    logout() {
      this.currentUser = null
      localStorage.removeItem('currentUser')
    },
  },
})
