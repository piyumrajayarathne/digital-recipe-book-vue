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
    <div>
        <h1>Home Page</h1>
    </div>
    <RecipeCard
         v-for="recipe in recipes" 
         :key="recipe.id"
         :recipe="recipe"
    />
</template>
