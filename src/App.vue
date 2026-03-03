<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="min-h-screen relative bg-[#f6efe4]">
  <div class="absolute inset-0 opacity-10 bg-[url('/paper-texture.png')]"></div>
  <RouterView class="relative" />
</div>
</template>