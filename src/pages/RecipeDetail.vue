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
        <h1>{{ recipe.name }}</h1>
    </div>
</template>