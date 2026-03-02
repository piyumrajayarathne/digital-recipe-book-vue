<script setup lang ="ts">
    import type {Recipe} from '../types/recipe'
    defineProps<{
        recipe: Recipe
    }>()
    
</script>

<template>
    <img :src = "recipe.image" alt="recipe.name" />
   <div>
    <h2>{{recipe.name}}</h2>
    <p>{{ recipe.cuisine }}</p>
    <p>{{ recipe.difficulty }}</p>
    <p>{{ recipe.rating }}</p>
    <p>{{ recipe.prepTimeMinutes + recipe.cookTimeMinutes}} mins</p>
    <p>{{ recipe.difficulty }}</p>
   </div>

</template>