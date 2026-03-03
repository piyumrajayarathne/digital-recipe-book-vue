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
   <div @click="goToDetail">
    <img :src = "recipe.image" alt="recipe.name" />
    <h2>{{recipe.name}}</h2>
    <p>{{ recipe.cuisine }}</p>
    <p>{{ recipe.prepTimeMinutes + recipe.cookTimeMinutes}} mins</p>
    <p>{{ recipe.difficulty }}</p>
    <p>{{ recipe.rating }}</p>

   </div>

</template>