<script setup lang="ts">
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { loginUser } from '../services/authServices'

    const username = ref('')
    const password = ref('')
    const error = ref('')

    const router = useRouter()

    async function handleLogin() {
        error.value = ''

    try {
        const data = await loginUser(username.value, password.value)

        localStorage.setItem('token', data.token)

        router.push('/')
    } catch (err) {
        error.value = 'Invalid username or password'
        }
    }
</script>
<template>
  <div class="min-h-screen flex items-center justify-center px-6">

    <div class="w-full max-w-md bg-[#fffaf2] border border-[#f0e6d8] rounded-2xl shadow-lg p-10">

      <h1 class="text-4xl playfair text-[#3d2f1f] text-center mb-6">
        Login
      </h1>

      <div class="mb-5">
        <label class="block text-[#6b5b4a] mb-2 text-sm">
          Username
        </label>
        <input
          v-model="username"
          type="text"
          placeholder="Enter username"
          class="w-full px-4 py-3 rounded-lg border border-[#e8dccb] 
                 focus:outline-none focus:ring-2 focus:ring-[#cbb79c]"
        />
      </div>

      <div class="mb-6">
        <label class="block text-[#6b5b4a] mb-2 text-sm">
          Password
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="Enter password"
          class="w-full px-4 py-3 rounded-lg border border-[#e8dccb] 
                 focus:outline-none focus:ring-2 focus:ring-[#cbb79c]"
        />
      </div>

      <p v-if="error" class="text-red-500 text-sm mb-4">
        {{ error }}
      </p>

      <button @click = "handleLogin"
        class="w-full bg-[#3d2f1f] text-white py-3 rounded-lg 
               hover:bg-[#2c2116] transition duration-300"
      >
        Login
      </button>

    </div>

  </div>
</template>