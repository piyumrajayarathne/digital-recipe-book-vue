<script setup lang ="ts">
    import {ref, onMounted} from 'vue'
    import {fetchRecipes} from '../services/recipeService' 
    import type {Recipe} from '../types/recipe'
    import RecipeCard from '@/components/RecipeCard.vue'
    const recipes = ref<Recipe[]>([])
    onMounted(async() => {
        const data = await fetchRecipes()
        recipes.value = data.recipes
    })
    
</script>

<template>
  <div class="max-w-7xl mx-auto px-12 pt-20 pb-16">

    <div class="flex justify-center mb-8">
      <img
        src="/recipe-logo.jpg"
        alt="Recipe Logo"
        class="w-40 md:w-48 opacity-90 drop-shadow-md"
      />
    </div>

    <h1 class="text-6xl md:text-7xl text-center playfair text-[#3d2f1f] tracking-wide">
      Recipe Discovery
    </h1>

    <p class="text-center text-lg text-[#6b5b4a] italic mt-4 mb-10">
      Discover timeless flavors and crafted dishes
    </p>

    <div class="flex justify-center mb-16">
      <div class="w-28 h-[2px] bg-[#cbb79c]"></div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
      <RecipeCard
        v-for="recipe in recipes"
        :key="recipe.id"
        :recipe="recipe"
      />
    </div>

  </div>
</template>