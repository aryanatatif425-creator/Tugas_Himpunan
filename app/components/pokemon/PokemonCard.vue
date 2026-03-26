<template>
  <div class="group relative">
    <!-- Card Body -->
    <div @click="$emit('click')"
         class="h-full bg-white rounded-[32px] border border-white shadow-[0_10px_40px_rgba(0,0,0,0.2)] transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden flex flex-col">
      
      <!-- Image Body -->
      <div class="relative aspect-square bg-gray-50 flex items-center justify-center p-10">
        <div class="absolute inset-0 bg-gradient-to-br from-gray-100 to-white"></div>
        <img :src="pokemon.image || '/assets/img/pokemon.png'" :alt="pokemon.name" 
             class="relative z-10 w-full h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute top-6 left-6 px-3 py-1 bg-[#115C45]/5 rounded-full text-[10px] font-black text-[#115C45] tracking-widest">
          #{{ pokemon.id.toString().padStart(3, '0') }}
        </div>
      </div>

      <!-- Content Body -->
      <div class="p-8 flex flex-col flex-grow">
        <h2 class="text-2xl font-black text-[#115C45] capitalize mb-3 tracking-tight">{{ pokemon.name }}</h2>
        <div class="flex flex-wrap gap-2 mb-6">
          <span v-for="type in pokemon.types" :key="type" 
                class="px-3 py-1 bg-[#27F5B7]/10 text-[#115C45] text-[9px] font-bold uppercase tracking-widest rounded-full border border-[#27F5B7]/20">
            {{ type }}
          </span>
        </div>
        <div class="mt-auto flex items-center justify-between">
          <div class="flex-1 mr-4">
            <div class="flex justify-between items-center text-[10px] uppercase font-bold text-gray-400 mb-1">
              <span>HP</span>
              <span class="text-[#115C45]">{{ pokemon.hp }}</span>
            </div>
            <div class="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div class="h-full bg-[#27F5B7] transition-all duration-1000" :style="{ width: Math.min(pokemon.hp, 100) + '%' }"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Quick Action Buttons -->
    <div class="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
      <button @click.stop="$emit('edit')" class="p-3 bg-white border border-gray-100 rounded-full shadow-lg text-blue-600 hover:bg-blue-50 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
      <button @click.stop="$emit('delete')" class="p-3 bg-white border border-gray-100 rounded-full shadow-lg text-red-600 hover:bg-red-50 transition-colors">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Pokemon } from '~/stores/PokemonStore'

defineProps<{
  pokemon: Pokemon
}>()

defineEmits(['click', 'edit', 'delete'])
</script>
