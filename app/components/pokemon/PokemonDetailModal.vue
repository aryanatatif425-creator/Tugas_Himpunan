<template>
  <div v-if="pokemon" class="fixed inset-0 z-[100] flex items-center justify-center p-4">
    <div class="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl" @click="$emit('close')"></div>
    <div class="relative bg-white border border-white rounded-[64px] shadow-[0_0_100px_rgba(0,0,0,0.4)] max-w-5xl w-full overflow-hidden transform transition-all">
      <button @click="$emit('close')" class="absolute top-10 right-12 text-[#115C45] hover:scale-110 transition-transform z-20">
        <span class="text-6xl font-light">&times;</span>
      </button>
      
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-1/2 bg-gray-50 p-16 flex items-center justify-center relative min-h-[500px]">
          <div class="absolute inset-0 bg-[#27F5B7]/10 blur-[120px] rounded-full"></div>
          <img :src="pokemon.image || '/assets/img/pokemon.png'" 
               class="relative z-10 w-full h-full max-h-[450px] object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]" />
        </div>
        
        <div class="w-full lg:w-1/2 p-16 lg:p-24 flex flex-col justify-center text-[#115C45]">
          <span class="text-base font-black text-[#27F5B7] tracking-[0.4em] uppercase mb-4" style="font-family: 'Lato', sans-serif;">#{{ pokemon.id.toString().padStart(3, '0') }}</span>
          <h2 class="text-5xl lg:text-6xl font-black mb-6 capitalize tracking-tighter break-words leading-tight" style="font-family: 'Lato', sans-serif;">{{ pokemon.name }}</h2>
          
          <div class="flex flex-wrap gap-3 mb-8">
            <span v-for="t in pokemon.types" :key="t" 
                  class="px-6 py-2 bg-[#115C45] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full" style="font-family: 'Lato', sans-serif;">{{ t }}</span>
          </div>

          <!-- Description / Origin Section -->
          <div v-if="pokemon.description" class="mb-12 border-l-4 border-[#27F5B7] pl-8 py-2">
            <h4 class="text-[#27F5B7] text-xs font-black uppercase tracking-[0.3em] mb-3">Trivia</h4>
            <p class="text-gray-600 text-lg leading-relaxed italic font-medium">
              "{{ pokemon.description }}"
            </p>
          </div>
          
          <div class="space-y-10" style="font-family: 'Lato', sans-serif;">
            <div class="space-y-4">
              <div class="flex justify-between text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
                <span>Health Points</span>
                <span class="font-black text-lg">{{ Math.min(pokemon.hp, 100) }}</span>
              </div>
              <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-[#27F5B7] to-[#115C45]" :style="{ width: Math.min(pokemon.hp, 100) + '%' }"></div>
              </div>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between text-sm font-bold uppercase tracking-[0.3em] text-gray-400">
                <span>Attack Power</span>
                <span class="text-orange-500 font-black text-lg">{{ Math.min(pokemon.attack, 100) }}</span>
              </div>
              <div class="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-orange-400 to-red-500" :style="{ width: Math.min(pokemon.attack, 100) + '%' }"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/stores/PokemonStore'

defineProps<{
  pokemon: Pokemon | null
}>()

defineEmits(['close'])
</script>
