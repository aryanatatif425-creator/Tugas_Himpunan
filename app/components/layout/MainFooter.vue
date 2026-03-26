<template>
  <div class="w-full flex justify-center mt-40 bg-transparent">
    <!-- The iPhone Notch Style Footer (Pure and Clean) -->
    <footer class="bg-white px-16 py-10 rounded-t-[60px] shadow-[0_-20px_50px_rgba(0,0,0,0.2)] flex items-center justify-between gap-12 w-full max-w-[95%] transition-all duration-1000 ease-out transform border-x border-t border-gray-100 relative z-20">
      
      <!-- Logo Section -->
      <div class="flex items-center gap-6">
        <img src="/assets/img/fontbolt_Ireng.png" alt="Himakom Logo" class="h-10 w-auto" />
        <div class="h-8 w-[1px] bg-gray-200 hidden md:block"></div>
        <div class="flex flex-col">
          <span class="text-xl font-black text-[#115C45] tracking-tighter leading-tight">HIMAKOM</span>
          <span class="text-[9px] font-bold text-gray-400 tracking-[0.3em] uppercase">Pokedex Project</span>
        </div>
      </div>

      <!-- Copyright Section -->
      <div class="flex flex-col items-center md:items-end text-center md:text-right">
        <div class="text-sm font-bold text-[#115C45] tracking-widest uppercase mb-1" style="font-family: 'Lato', sans-serif;">
          &copy; Himakom Pokedex 2026
        </div>
        <div class="text-[10px] font-medium text-gray-400 uppercase tracking-[0.2em]">
          All Rights Reserved • Developed for Teknocamp
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loaded = ref(false)

onMounted(() => {
  setTimeout(() => {
    loaded.value = true
  }, 300)
})
</script>

<style scoped>
/* Pastikan tidak ada margin bawah yang menyisakan celah */
footer {
  margin-bottom: 0;
}
</style>
