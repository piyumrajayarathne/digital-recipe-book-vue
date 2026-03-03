<script setup lang ="ts">
    import {useRouter} from 'vue-router'
    import type {Recipe} from '../types/recipe'
    const {recipe}=defineProps<{recipe: Recipe}>()
    const router = useRouter()
    function goToDetail(){
        console.log("clicked", recipe.id)
        router.push(`/recipe/${recipe.id}`)
    }
</script>

<template>
  <div 
    @click="goToDetail"
    class="group bg-[#fffaf2] rounded-xl shadow-md hover:shadow-lg 
           transition duration-300 border border-[#f0e6d8] 
           cursor-pointer overflow-hidden"
  >

    <!-- Image Wrapper -->
    <div class="overflow-hidden">
      <img 
        :src="recipe.image" 
        :alt="recipe.name"
        class="w-full h-52 object-cover transition duration-500 group-hover:scale-110"
      />
    </div>

    <div class="p-5">
      <h2 class="text-xl dancing-script text-[#4a3b2a] mb-2">
        {{ recipe.name }}
      </h2>

      <p class="text-sm text-[#6b5b4a]">
        {{ recipe.cuisine }}
      </p>

      <p class="text-sm text-[#6b5b4a]">
        {{ recipe.prepTimeMinutes + recipe.cookTimeMinutes }} mins
      </p>

      <p class="text-sm text-[#6b5b4a]">
        {{ recipe.difficulty }}
      </p>

      <!-- ⭐ STAR RATING SECTION -->
      <div class="flex items-center gap-1 mt-2">
        <span
          v-for="star in 5"
          :key="star"
          class="text-lg"
        >
          <span v-if="star <= Math.floor(recipe.rating)" class="text-yellow-500">★</span>
          <span v-else class="text-gray-300">★</span>
        </span>

        <span class="text-sm text-[#6b5b4a] ml-2">
          ({{ recipe.rating.toFixed(1) }})
        </span>
      </div>

    </div>
  </div>
</template>