// stores/userStore.js
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    users: JSON.parse(localStorage.getItem('users') || '[]'),
    currentUser: JSON.parse(localStorage.getItem('currentUser') || 'null'),
  }),


  actions: {
    updatePassword(newPassword) {
      if (this.currentUser) {
        this.currentUser.password = newPassword
        // Update user list as well
    const index = this.users.findIndex(
      u => u.email === this.currentUser.email || u.phone === this.currentUser.phone
    )

    if (index !== -1) {
      this.users[index].password = newPassword
    }

    // Save updates in localStorage
    localStorage.setItem('users', JSON.stringify(this.users))
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
      }
    },

    // 🔹 Signup action
    signup(newUser) {
      // Email OR Phone dono me se kisi ek ka match check
      const exists = this.users.some(
        u => u.email === newUser.email || u.phone === newUser.phone
      )

      if (exists) {
        return { success: false, message: 'Email or phone already registered.' }
      }
     
            //  Add signup date
      newUser.memberSince = new Date().getFullYear()

      //  Default values
      newUser.fullName = ''
      newUser.username = ''
      newUser.bio = ''
      newUser.avatar = '/games/ProfileAvatar.png'
      // newUser.dob = ''

      // ✅ Save user
      this.users.push(newUser)
      localStorage.setItem('users', JSON.stringify(this.users))

      // Optionally auto login
      this.currentUser = newUser
      localStorage.setItem('currentUser', JSON.stringify(newUser))

      return { success: true, message: 'Signup Successfull!' }
    },


    
    updateProfile(updatedUser) {
      this.currentUser = { ...this.currentUser, ...updatedUser }

      // ✅ Update user list also
      const index = this.users.findIndex(
        u => u.email === this.currentUser.email || u.phone === this.currentUser.phone
      )
      if (index !== -1) { 
        this.users[index] = { ...this.users[index], ...updatedUser }
    }
      localStorage.setItem('users', JSON.stringify(this.users))
      localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
    },




    // 🔹 Reset Password
  resetPassword(identifier, newPassword) {
  const userIndex = this.users.findIndex(
    u => u.email === identifier || u.phone === identifier
  )

  if (userIndex === -1) {
    return { success: false, message: 'User not found.' }
  }

  // Update password
  this.users[userIndex].password = newPassword

  // Agar ye user currently logged in hai to uska currentUser bhi update kar do
  if (this.currentUser && 
      (this.currentUser.email === identifier || this.currentUser.phone === identifier)) {
    this.currentUser.password = newPassword
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
  }

  localStorage.setItem('users', JSON.stringify(this.users))

  return { success: true, message: 'Password updated successfully.' }
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

    // Logout action
    logout() {
      this.currentUser = null
      localStorage.removeItem('currentUser')
    },

     // UPDATE PROFILE IMAGE (Profile.vue + Navbar reactive)
    updateProfileImage(newImage) {
      if (this.currentUser) {
        this.currentUser.avatar = newImage

        const index = this.users.findIndex(
          u => u.email === this.currentUser.email
        )
        if (index !== -1) { this.users[index] = { ...this.currentUser }
      }
        localStorage.setItem('users', JSON.stringify(this.users))
        localStorage.setItem('currentUser', JSON.stringify(this.currentUser))
      }
    },
  },
})
