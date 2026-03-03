<script setup lang ="ts">
    import type { Recipe } from '../types/recipe'
    import {ref,onMounted} from 'vue'
    import { fetchRecipeById } from '../services/recipeService'
    import {useRoute} from 'vue-router'
    const route = useRoute()
    const id = Number(route.params.id as string)

    const recipe = ref<Recipe | null>(null)

    onMounted(async ()=> {
        const data = await fetchRecipeById(id)
        recipe.value = data
    })
</script>
<template>
    <div  v-if="recipe">
        <h1>Recipe Details</h1>
        <img :src="recipe.image" />
        <h1>{{ recipe.name }}</h1>
        <p>Cuisine: {{ recipe.cuisine }}</p>
        <p>Difficulty: {{ recipe.difficulty }}</p>
        <p>Rating: {{ recipe.rating }}</p>
        <p>Total Time: {{ recipe.prepTimeMinutes + recipe.cookTimeMinutes }} mins</p>
        <p>Servings: {{ recipe.servings }}</p>
        <p>Ingredients:</p>

        <ul>
            <li v-for="ingredient in recipe.ingredients" :key="ingredient">
                {{ ingredient }}
            </li>
        </ul>
        <p>Instructions:</p>
        <ol>
            <li v-for="step in recipe.instructions" :key="step">
                {{ step }}
            </li>
        </ol>
    </div>
</template>