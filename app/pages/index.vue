<template>
  <div class="relative w-full text-white">
    <!-- Hero Section -->
    <section class="relative z-10 min-h-screen flex flex-col items-center pt-52 pb-20 px-4">
      <!-- Welcome Container Wrapper with Glow -->
      <div class="relative w-full max-w-[95%] transition-all duration-1000 ease-out"
           :class="loaded ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'">
        
        <!-- Soft Pulsing Glow Behind -->
        <div class="absolute -inset-6 bg-[#27F5B7]/15 rounded-[80px] blur-[80px] animate-pulse-soft pointer-events-none"></div>
        
        <!-- Floating Welcome Container -->
        <div class="relative p-16 bg-white rounded-[60px] shadow-2xl border border-gray-100 w-full overflow-hidden">
          <!-- Subtle Inner Glow Peek -->
          <div class="absolute -top-24 -left-24 w-48 h-48 bg-[#27F5B7]/5 rounded-full blur-3xl"></div>
          
          <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch w-full">
          <!-- Left Column: Welcome and Hero Image -->
          <div class="flex flex-col space-y-12">
            <h2 class="text-6xl font-bold tracking-tight text-[#115C45] leading-tight" style="font-family: 'Lato', sans-serif;">
              Welcome to <br/> Himakom Pokédex
            </h2>

            <div class="relative group w-full">
              <div class="absolute inset-0 bg-[#27F5B7]/5 rounded-[40px] blur-2xl group-hover:bg-[#27F5B7]/10 transition-all duration-700"></div>
              <img src="/assets/img/HeroPokemon.jpg" 
                   alt="Hero Pokemon"
                   class="relative z-10 w-full h-auto rounded-[40px] shadow-xl hover:scale-[1.02] transition-transform duration-700 object-cover" />
            </div>
          </div>

          <!-- Right Column: Info Sections -->
          <div class="flex flex-col justify-end space-y-12 pb-4">
            <div class="space-y-6 border-l-4 border-[#27F5B7]/30 pl-10">
              <h3 class="text-[#27F5B7] font-bold uppercase tracking-widest text-xl">Apa itu Pokemon?</h3>
              <p class="text-gray-600 leading-relaxed font-medium text-lg text-justify">
                Pokémon adalah singkatan dari "Pocket Monsters". Mereka adalah makhluk luar biasa yang hidup di alam liar atau bersama manusia. Sebagian besar Pokémon tidak bisa berbicara kecuali untuk menyebutkan nama mereka sendiri. Dunia Pokémon dipenuhi dengan petualangan, persahabatan, dan penemuan tak terbatas bagi mereka yang berani menjelajahinya.
              </p>
            </div>

            <div class="space-y-6 border-l-4 border-[#27F5B7]/30 pl-10">
              <h3 class="text-[#27F5B7] font-bold uppercase tracking-widest text-xl">Sejarah Singkat</h3>
              <p class="text-gray-600 leading-relaxed font-medium text-lg text-justify">
                Diciptakan oleh Satoshi Tajiri pada tahun 1995, Pokémon bermula dari hobi masa kecilnya mengumpulkan serangga di pinggiran kota Tokyo. Konsep ini kemudian berkembang menjadi fenomena global yang luar biasa, mencakup video game revolusioner, kartu permainan koleksi, serial animasi ikonik, hingga film layar lebar yang dicintai oleh berbagai generasi di seluruh penjuru dunia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <!-- Pokemon Information (Space Discovery Theme) -->
    <section class="relative z-10 min-h-screen pt-64 pb-20 px-10">
      <div class="flex items-center justify-center gap-6 mb-60 w-full">
        <!-- Left Mainboard Pattern (Longer) -->
        <div class="flex-1 h-32 relative opacity-60 animate-circuit-pulse">
          <svg viewBox="0 0 500 100" preserveAspectRatio="none" class="w-full h-full stroke-white fill-none stroke-[1.5]">
            <!-- Main Trace -->
            <path d="M0,50 L350,50 L380,20 L480,20" />
            <circle cx="485" cy="20" r="3" fill="white" class="drop-shadow-[0_0_8px_white]" />
            <!-- Secondary Traces -->
            <path d="M50,80 L300,80 L340,40 L450,40" />
            <circle cx="455" cy="40" r="2.5" fill="white" />
            <path d="M100,20 L250,20 L280,50 L420,50" />
            <circle cx="425" cy="50" r="2.5" fill="white" />
            <path d="M150,90 L380,90 L410,65" />
          </svg>
        </div>

        <h1 class="text-7xl text-center font-normal text-white drop-shadow-[0_0_20px_white] tracking-[0.25em] uppercase whitespace-nowrap px-4" 
            style="font-family: 'Lato', sans-serif;">
          Meet The Monster
        </h1>

        <!-- Right Mainboard Pattern (Longer) -->
        <div class="flex-1 h-32 relative opacity-60 animate-circuit-pulse rotate-180">
          <svg viewBox="0 0 500 100" preserveAspectRatio="none" class="w-full h-full stroke-white fill-none stroke-[1.5]">
            <!-- Main Trace -->
            <path d="M0,50 L350,50 L380,20 L480,20" />
            <circle cx="485" cy="20" r="3" fill="white" class="drop-shadow-[0_0_8px_white]" />
            <!-- Secondary Traces -->
            <path d="M50,80 L300,80 L340,40 L450,40" />
            <circle cx="455" cy="40" r="2.5" fill="white" />
            <path d="M100,20 L250,20 L280,50 L420,50" />
            <circle cx="425" cy="50" r="2.5" fill="white" />
            <path d="M150,90 L380,90 L410,65" />
          </svg>
        </div>
      </div>
      <!-- Discovery Area Glassmorphism Container -->
      <div class="relative max-w-6xl mx-auto backdrop-blur-xl bg-white/5 border border-white/10 rounded-[60px] p-16 shadow-[0_0_80px_rgba(0,0,0,0.4)] overflow-hidden">
        <!-- Inner Decorative Glow -->
        <div class="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div class="absolute -bottom-24 -left-24 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>

        <div class="relative z-10 flex flex-col lg:flex-row items-center justify-around gap-16">
          <!-- Pokemon Image Section -->
          <div class="w-full lg:w-1/2 flex items-center justify-center transition-all duration-500 ease-out"
            :class="{ 'opacity-0 scale-75 blur-2xl': fading }">
            <div class="relative group">
              <div class="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <img v-if="currentPokemon" :src="currentPokemon.image" 
                   class="relative z-10 w-[400px] h-[400px] object-contain drop-shadow-[0_0_60px_rgba(59,130,246,0.4)] hover:scale-105 transition-transform duration-500" />
            </div>
          </div>

          <!-- Pokemon Info Section -->
          <div class="w-full lg:w-1/2 transition-all duration-500 ease-out" 
               :class="{ 'opacity-0 translate-x-8 blur-lg': fading }">
            <div style="font-family: 'Lato', sans-serif;">
              <h2 class="text-6xl font-normal capitalize tracking-tight text-white mb-6 drop-shadow-sm">
                {{ currentPokemon?.name || 'Loading...' }}
              </h2>
              
              <div class="flex flex-wrap gap-3 mb-10">
                <span v-for="t in currentPokemon?.types" :key="t"
                  class="px-5 py-2 rounded-full bg-white/10 text-blue-200 font-normal border border-white/20 uppercase text-xs tracking-[0.2em]">
                  {{ t }}
                </span>
              </div>

              <div class="space-y-8">
                <!-- HP Bar (Brighter Navbar Green) -->
                <div v-if="currentPokemon" class="space-y-2">
                  <div class="flex justify-between items-end px-1">
                    <p class="text-white text-xs font-normal capitalize tracking-widest opacity-70">Health points</p>
                    <p class="text-[#27F5B7] font-bold">{{ currentPokemon.hp }}</p>
                  </div>
                  <div class="w-full h-1.5 rounded-full overflow-hidden">
                     <div class="bg-gradient-to-r from-[#27F5B7] to-[#A7FFE4] h-full rounded-full transition-all duration-1000" 
                          :style="{ width: (currentPokemon.hp / 2) + '%' }">
                     </div>
                  </div>
                </div>

                <!-- Attack Bar (Vibrant Orange) -->
                <div v-if="currentPokemon" class="space-y-2">
                  <div class="flex justify-between items-end px-1">
                    <p class="text-white text-xs font-normal capitalize tracking-widest opacity-70">Attack power</p>
                    <p class="text-orange-400 font-bold">{{ currentPokemon.attack }}</p>
                  </div>
                  <div class="w-full h-1.5 rounded-full overflow-hidden">
                     <div class="bg-gradient-to-r from-[#FF6B00] to-[#FFD600] h-full rounded-full transition-all duration-1000" 
                          :style="{ width: (currentPokemon.attack / 2) + '%' }">
                     </div>
                  </div>
                </div>
              </div>

              <!-- Navigation Buttons Inside Container -->
              <div class="mt-16 flex items-stretch space-x-6 h-20">
                <button @click="prevPokemon"
                  class="flex-1 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all duration-300 backdrop-blur-md uppercase tracking-widest text-xs">
                  ← Prev
                </button>
                <button @click="nextPokemon"
                  class="flex-[2] p-1.5 rounded-2xl bg-[#27F5B7] hover:bg-[#1ee3a5] transition-all duration-300 shadow-[0_0_40px_rgba(39,245,183,0.2)] hover:scale-[1.02] group">
                  <div class="w-full h-full border-2 border-[#115C45] rounded-[10px] flex items-center justify-center px-4">
                    <span class="text-[#115C45] font-black uppercase tracking-[0.2em] text-sm">Next Monster →</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue"

definePageMeta({
  layout: 'main'
})

const loaded = ref(false)
const pokemonStore = usePokemonStore()
const currentIndex = ref(0)
const flipping = ref(false)
const fading = ref(false)

const currentPokemon = computed(() =>
  pokemonStore.pokemons[currentIndex.value] || null
)

const nextPokemon = () => {
  if (!pokemonStore.pokemons.length) return
  flipping.value = true
  fading.value = true
  setTimeout(() => {
    currentIndex.value = (currentIndex.value + 1) % pokemonStore.pokemons.length
    flipping.value = false
    fading.value = false
  }, 400)
}

const prevPokemon = () => {
  if (!pokemonStore.pokemons.length) return
  flipping.value = true
  fading.value = true
  setTimeout(() => {
    currentIndex.value =
      (currentIndex.value - 1 + pokemonStore.pokemons.length) %
      pokemonStore.pokemons.length
    flipping.value = false
    fading.value = false
  }, 400)
}

onMounted(async () => {
  setTimeout(() => {
    loaded.value = true
  }, 100);

  await pokemonStore.fetchPokemons(50)
})
</script>

<style scoped>
@keyframes pulse-soft {
  0%, 100% { transform: scale(1); opacity: 0.1; }
  50% { transform: scale(1.05); opacity: 0.25; }
}

.animate-pulse-soft {
  animation: pulse-soft 6s infinite ease-in-out;
}

.rotate-y-180 {
  transform: rotateY(180deg);
  backface-visibility: hidden;
}

@keyframes circuit-pulse {
  0%, 100% { opacity: 0.4; filter: drop-shadow(0 0 5px white); }
  50% { opacity: 1; filter: drop-shadow(0 0 20px white); }
}

.animate-circuit-pulse {
  animation: circuit-pulse 6s infinite ease-in-out;
}
</style>
