<template>
  <div
    class="fixed top-6 inset-x-6 z-50 flex justify-between px-12 py-4 items-center bg-white rounded-full shadow-2xl border border-gray-100 transition-all duration-1000 ease-out"
    :class="loaded ? 'translate-y-0 opacity-100' : '-translate-y-40 opacity-0'">
    <NuxtLink to="/">
      <img src="/assets/img/fontbolt.png" alt="Website Logo" class="h-10 w-auto" />
    </NuxtLink>
    <ul class="flex gap-8 text-lg font-normal uppercase tracking-widest" style="font-family: 'Lato', sans-serif;">
      <li class="relative group">
        <NuxtLink to="/" :class="isActive('/') ? 'text-[#27F5B7] font-extrabold' : 'text-[#115C45] font-bold'" class="transition-all duration-300">
          Home
        </NuxtLink>
        <!-- Loading Bar Effect -->
        <div class="absolute -bottom-1 left-0 h-1 bg-[#27F5B7] rounded-full transition-all duration-[1500ms] ease-in-out group-hover:w-full" :class="isActive('/') ? 'w-full' : 'w-0'"></div>
      </li>
      <li class="relative group">
        <NuxtLink to="/pokemon" :class="isActive('/pokemon') ? 'text-[#27F5B7] font-extrabold' : 'text-[#115C45] font-bold'" class="transition-all duration-300">
          Pokemon
        </NuxtLink>
        <!-- Loading Bar Effect -->
        <div class="absolute -bottom-1 left-0 h-1 bg-[#27F5B7] rounded-full transition-all duration-[1500ms] ease-in-out group-hover:w-full" :class="isActive('/pokemon') ? 'w-full' : 'w-0'"></div>
      </li>
      <li class="relative group">
        <NuxtLink to="/about" :class="isActive('/about') ? 'text-[#27F5B7] font-extrabold' : 'text-[#115C45] font-bold'" class="transition-all duration-300">
          About
        </NuxtLink>
        <!-- Loading Bar Effect -->
        <div class="absolute -bottom-1 left-0 h-1 bg-[#27F5B7] rounded-full transition-all duration-[1500ms] ease-in-out group-hover:w-full" :class="isActive('/about') ? 'w-full' : 'w-0'"></div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const loaded = ref(false)
const route = useRoute()

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 100)
})

// function untuk cek route aktif
const isActive = (path: string) => {
  return route.path === path
}
</script>