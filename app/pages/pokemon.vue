<template>
  <div class="relative w-full text-white pt-32 pb-20 px-8 lg:px-16 min-h-screen">
    <div class="relative z-10 max-w-7xl mx-auto">
      <!-- Header with Search and Add -->
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
        <div>
          <h1 class="text-6xl font-bold text-white tracking-tight" style="font-family: 'Lato', sans-serif;">Daftar Pokémon</h1>
          <p class="text-gray-400 mt-2 font-medium">Kelola koleksi Pokémon Anda secara lokal.</p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div class="relative group w-full md:w-80">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#27F5B7] to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <input v-model="searchQuery" type="text" placeholder="Cari Pokémon..."
              class="relative w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#27F5B7] backdrop-blur-xl text-white placeholder-gray-400 transition-all" />
          </div>
          
          <button @click="openAddModal" 
                  class="px-8 py-4 bg-[#27F5B7] text-[#115C45] font-black rounded-2xl shadow-[0_0_30px_rgba(39,245,183,0.3)] hover:scale-105 transition-all uppercase tracking-widest text-sm flex items-center justify-center gap-2">
            <span>+ Add New</span>
          </button>
        </div>
      </div>

      <!-- Loading/Error states -->
      <div v-if="pokemonStore.loading" class="text-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#27F5B7] mx-auto mb-4"></div>
        <p class="text-gray-400 animate-pulse">Memuat Pokémon...</p>
      </div>
      <div v-else-if="pokemonStore.error" class="text-red-400 p-6 bg-red-400/10 border border-red-400/20 rounded-xl text-center">{{ pokemonStore.error }}</div>
      
      <!-- Gallery Grid using Components -->
      <div v-else-if="filteredPokemons.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <PokemonCard v-for="pokemon in filteredPokemons" :key="pokemon.id"
                     :pokemon="pokemon"
                     @click="openDetailModal(pokemon)"
                     @edit="openEditModal(pokemon)"
                     @delete="handleDelete(pokemon.id)" />
      </div>

      <!-- Not Found State -->
      <div v-else class="flex flex-col items-center justify-center py-32 bg-white/5 border border-white/10 rounded-[40px] backdrop-blur-md">
        <div class="relative mb-8">
          <div class="absolute inset-0 bg-red-500/20 blur-3xl rounded-full animate-pulse"></div>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 text-gray-500 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 class="text-3xl font-bold text-white mb-2">Pokémon Tidak Ditemukan</h3>
        <p class="text-gray-400 text-lg">Maaf, kami tidak bisa menemukan monster yang Anda cari.</p>
        <button @click="searchQuery = ''" class="mt-8 text-[#27F5B7] hover:underline font-medium">Hapus Pencarian</button>
      </div>

      <!-- Pagination Controls -->
      <div v-if="!pokemonStore.loading && !searchQuery" class="flex flex-col items-center gap-8 mt-20">
        <div class="flex flex-wrap items-center justify-center gap-3">
          <!-- Prev Button -->
          <button 
            @click="changePage(pokemonStore.currentPage - 1)"
            :disabled="pokemonStore.currentPage === 1"
            class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-[#27F5B7]/20 disabled:opacity-20 transition-all text-xs font-bold uppercase tracking-wider"
          >
            &lt; Prev
          </button>
          
          <!-- Page Numbers -->
          <div class="flex items-center gap-2">
            <template v-for="page in displayedPages" :key="page">
              <button 
                v-if="typeof page === 'number'"
                @click="changePage(page)"
                :class="[
                  'w-10 h-10 rounded-lg border transition-all font-bold text-sm',
                  pokemonStore.currentPage === page 
                    ? 'bg-[#27F5B7] border-[#27F5B7] text-[#115C45] shadow-[0_0_15px_rgba(39,245,183,0.4)]' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:border-[#27F5B7]/50 hover:text-white'
                ]"
              >
                {{ page }}
              </button>
              <span v-else class="text-gray-600 px-1 font-bold">...</span>
            </template>
          </div>

          <!-- Next Button -->
          <button 
            @click="changePage(pokemonStore.currentPage + 1)"
            :disabled="pokemonStore.currentPage === totalPages"
            class="px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-[#27F5B7]/20 disabled:opacity-20 transition-all text-xs font-bold uppercase tracking-wider"
          >
            Next &gt;
          </button>
        </div>

        <!-- Jump to Page Input -->
        <div class="flex items-center gap-4 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm relative">
          <span class="text-gray-400 text-sm font-medium">Lompat ke Halaman:</span>
          <div class="relative w-20">
            <input 
              type="number" 
              min="1" 
              :max="totalPages"
              v-model="jumpPageInput"
              @keyup.enter="jumpToPage"
              class="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-center text-[#27F5B7] font-bold focus:outline-none focus:border-[#27F5B7] transition-all"
              placeholder="..."
            />
          </div>
          <span class="text-gray-500 text-xs italic">Total: {{ totalPages }}</span>
          
          <!-- Error Message Display -->
          <Transition name="fade">
            <span v-if="jumpError" class="absolute left-full ml-4 whitespace-nowrap text-red-500 text-xs font-bold animate-pulse">
              ⚠️ {{ jumpError }}
            </span>
          </Transition>
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <PokemonFormModal v-if="showFormModal"
                      :is-editing="isEditing"
                      :initial-data="formData"
                      @close="showFormModal = false"
                      @save="savePokemon" />

    <PokemonDetailModal v-if="showDetailModal"
                        :pokemon="selectedPokemon"
                        @close="showDetailModal = false" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { usePokemonStore, type Pokemon } from '~/stores/PokemonStore'
import PokemonCard from '~/components/pokemon/PokemonCard.vue'
import PokemonFormModal from '~/components/pokemon/PokemonFormModal.vue'
import PokemonDetailModal from '~/components/pokemon/PokemonDetailModal.vue'

definePageMeta({
  layout: 'main'
})

const pokemonStore = usePokemonStore()
const searchQuery = ref('')
let searchTimeout: any = null

// Modal States
const showDetailModal = ref(false)
const showFormModal = ref(false)
const isEditing = ref(false)
const selectedPokemon = ref<Pokemon | null>(null)

// Form Data
const formData = ref<Partial<Pokemon>>({})

const totalPages = computed(() => Math.ceil(pokemonStore.totalCount / pokemonStore.itemsPerPage))

const displayedPages = computed(() => {
  const current = pokemonStore.currentPage
  const last = totalPages.value
  const delta = 2
  const left = current - delta
  const right = current + delta + 1
  const range = []
  const rangeWithDots = []
  let l

  for (let i = 1; i <= last; i++) {
    if (i === 1 || i === last || (i >= left && i < right)) {
      range.push(i)
    }
  }

  for (const i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1)
      } else if (i - l !== 1) {
        rangeWithDots.push('...')
      }
    }
    rangeWithDots.push(i)
    l = i
  }

  return rangeWithDots
})

onMounted(() => {
  pokemonStore.fetchPokemons(1)
  pokemonStore.fetchAllLinks() // Ambil daftar semua nama untuk pencarian
})

// Global Search with Debounce
watch(searchQuery, (newQuery) => {
  if (searchTimeout) clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    pokemonStore.searchPokemons(newQuery)
  }, 500) // Tunggu 500ms setelah mengetik
})

const jumpPageInput = ref('')
const jumpError = ref('')

const jumpToPage = () => {
  jumpError.value = ''
  const page = parseInt(jumpPageInput.value)
  
  if (isNaN(page) || page < 1 || page > totalPages.value) {
    jumpError.value = 'Halaman tidak ada!'
    return
  }
  
  changePage(page)
  jumpPageInput.value = ''
}

const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    searchQuery.value = '' // Reset pencarian saat pindah halaman
    pokemonStore.fetchPokemons(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const filteredPokemons = computed(() => {
  // Sekarang data di store.pokemons sudah disaring oleh searchPokemons jika ada query
  return pokemonStore.pokemons
})

// ACTIONS
const openDetailModal = (pokemon: Pokemon) => {
  selectedPokemon.value = pokemon
  showDetailModal.value = true
}

const openAddModal = () => {
  isEditing.value = false
  formData.value = { name: '', hp: 0, attack: 0, types: [], image: '' }
  showFormModal.value = true
}

const openEditModal = (pokemon: Pokemon) => {
  isEditing.value = true
  selectedPokemon.value = pokemon
  formData.value = { ...pokemon }
  showFormModal.value = true
}

const savePokemon = (data: any) => {
  if (isEditing.value && selectedPokemon.value) {
    pokemonStore.updatePokemon(selectedPokemon.value.id, data)
  } else {
    const newPokemon: Pokemon = {
      id: Math.floor(Math.random() * 10000) + 1000,
      ...data
    }
    pokemonStore.addPokemon(newPokemon)
  }
  showFormModal.value = false
}

const handleDelete = (id: number) => {
  if (confirm('Apakah Anda yakin ingin menghapus monster ini?')) {
    pokemonStore.deletePokemon(id)
  }
}
</script>
