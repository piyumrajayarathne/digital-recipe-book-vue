<script setup lang ="ts">
    import type { Recipe } from '../types/recipe'
    import {ref,onMounted} from 'vue'
    import { fetchRecipeById } from '../services/recipeService'
    import {useRoute,useRouter} from 'vue-router'
    const route = useRoute()
    const router = useRouter()
    const id = Number(route.params.id as string)

    const recipe = ref<Recipe | null>(null)

    onMounted(async ()=> {
        const data = await fetchRecipeById(id)
        recipe.value = data
    })
    function goBack() {
        router.push('/')
    }
</script>
<template>
  <div v-if="recipe" class="max-w-6xl mx-auto px-10 pt-16 pb-20">

    <!-- Back Button -->
    <button 
      @click="goBack"
      class="mb-10 text-[#6b5b4a] hover:text-[#3d2f1f] transition"
    >
      ← Back to Recipes
    </button>

    <!-- Recipe Title -->
    <h1 class="text-5xl md:text-6xl playfair text-[#3d2f1f] mb-6">
      {{ recipe.name }}
    </h1>

    <!-- Hero Image -->
    <div class="overflow-hidden rounded-2xl mb-12 shadow-lg">
      <img 
        :src="recipe.image"
        :alt="recipe.name"
        class="w-full h-[400px] object-cover"
      />
    </div>

    <!-- Info Grid -->
    <div class="grid grid-cols-2 md:grid-cols-5 gap-6 text-[#6b5b4a] mb-16">
      <div>
        <p class="text-sm uppercase tracking-wide">Cuisine</p>
        <p class="font-semibold">{{ recipe.cuisine }}</p>
      </div>
      <div>
        <p class="text-sm uppercase tracking-wide">Difficulty</p>
        <p class="font-semibold">{{ recipe.difficulty }}</p>
      </div>
      <div>
        <p class="text-sm uppercase tracking-wide">Preparation Time</p>
        <p class="font-semibold">
          {{ recipe.prepTimeMinutes}} mins
        </p>
      </div>
      <div>
        <p class="text-sm uppercase tracking-wide">Cooking Time</p>
        <p class="font-semibold">
          {{ recipe.cookTimeMinutes }} mins
        </p>
      </div>
      <div>
        <p class="text-sm uppercase tracking-wide">Servings</p>
        <p class="font-semibold">{{ recipe.servings }}</p>
      </div>
    </div>

    <!-- Ingredients & Instructions Layout -->
    <div class="grid md:grid-cols-2 gap-16">

      <!-- Ingredients -->
      <div>
        <h2 class="text-2xl playfair text-[#3d2f1f] mb-6">
          Ingredients
        </h2>
        <ul class="space-y-3 text-[#6b5b4a]">
          <li 
            v-for="ingredient in recipe.ingredients" 
            :key="ingredient"
            class="flex items-start gap-3"
          >
            <span class="mt-2 w-2 h-2 bg-[#cbb79c] rounded-full"></span>
            <span>{{ ingredient }}</span>
          </li>
        </ul>
      </div>

      <!-- Instructions -->
      <div>
        <h2 class="text-2xl playfair text-[#3d2f1f] mb-6">
          Instructions
        </h2>
        <ol class="space-y-6 text-[#6b5b4a]">
          <li 
            v-for="(step, index) in recipe.instructions" 
            :key="index"
            class="flex gap-4"
          >
            <span class="font-bold text-[#3d2f1f]">
              {{ index + 1 }}.
            </span>
            <span>{{ step }}</span>
          </li>
        </ol>
      </div>

    </div>

  </div>
</template>