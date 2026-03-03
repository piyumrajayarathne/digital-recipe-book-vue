import type{RecipeResponse} from '../types/recipe'
export async function fetchRecipes():Promise<RecipeResponse>{
    const response = await fetch('https://dummyjson.com/recipes')
    const data = await response.json()
    return data;
}
export async function fetchRecipeById(id: number) {
  const response = await fetch(`https://dummyjson.com/recipes/${id}`)
  const data = await response.json()
  return data
}
