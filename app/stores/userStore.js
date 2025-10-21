import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    currentUser: null,
  }),

  actions: {
    init() {
      if (process.client) {
        this.users = JSON.parse(localStorage.getItem('users') || '[]')
        this.currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
      }
    },

    signup(newUser) {
      const exists = this.users.find(
        u => u.email === newUser.email || u.phone === newUser.phone
      )

      if (exists) {
        return { success: false, message: 'Email or phone already registered.' }
      }

      this.users.push(newUser)

      if (process.client) {
        localStorage.setItem('users', JSON.stringify(this.users))
        localStorage.setItem('currentUser', JSON.stringify(newUser))
      }

      this.currentUser = newUser

      return { success: true, message: 'Signup successful!' }
    },

    login(identifier, password) {
      const found = this.users.find(
        u =>
          (u.email === identifier || u.phone === identifier) &&
          u.password === password
      )

      if (!found) {
        return { success: false, message: 'Invalid email/phone or password.' }
      }

      this.currentUser = found

      if (process.client) {
        localStorage.setItem('currentUser', JSON.stringify(found))
      }

      return { success: true, message: 'Login successful!' }
    },

    logout() {
      this.currentUser = null
      if (process.client) {
        localStorage.removeItem('currentUser')
      }
    },
  },
})
