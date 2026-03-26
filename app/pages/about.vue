<template>
  <div class="relative w-full text-white pt-32 pb-20 px-8 lg:px-16 min-h-screen">
    <div class="relative z-10 max-w-5xl mx-auto">
      <!-- Title Section -->
      <div class="text-center mb-24">
        <h1 class="text-7xl font-black text-white tracking-tighter mb-6" style="font-family: 'Lato', sans-serif;">
          The Project Story
        </h1>
        <div class="w-24 h-1 bg-[#27F5B7] mx-auto rounded-full"></div>
      </div>

      <!-- Content Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <!-- Text Content -->
        <div class="space-y-10">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-[40px] shadow-2xl">
            <h2 class="text-[#27F5B7] text-xs font-black uppercase tracking-[0.4em] mb-6">Misi Utama</h2>
            <p class="text-xl text-gray-300 leading-relaxed font-medium">
              Aplikasi <span class="text-white font-bold text-2xl">Himakom Pokédex</span> ini dikembangkan sebagai pemenuhan tugas dalam rangkaian kegiatan <span class="text-[#27F5B7] font-black">Teknocamp</span>  <span class="text-white font-bold">Unit Teknologi Himpunan Mahasiswa Komputer (HIMAKOM)</span>.
            </p>
          </div>

          <div class="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-[40px] shadow-2xl">
            <h2 class="text-orange-400 text-xs font-black uppercase tracking-[0.4em] mb-6">Tentang Teknocamp</h2>
            <p class="text-gray-400 leading-relaxed text-lg text-justify">
              <span class="text-[orange] font-black">Teknocamp </span> merupakan gerbang awal bagi para staf muda untuk membuktikan dedikasi dan kemampuan teknis mereka sebelum resmi bergabung ke dalam <span class="text-white font-bold"> Unit Teknologi Himpunan Mahasiswa Komputer (HIMAKOM)</span>.
            </p>
          </div>
        </div>

        <!-- Technical Content -->
        <div class="space-y-10">
          <div class="backdrop-blur-xl bg-white/5 border border-white/10 p-10 rounded-[40px] shadow-2xl relative overflow-hidden group">
            <div class="absolute -top-20 -right-20 w-40 h-40 bg-[#27F5B7]/10 blur-3xl rounded-full group-hover:bg-[#27F5B7]/20 transition-all"></div>
            
            <h2 class="text-[#27F5B7] text-xs font-black uppercase tracking-[0.4em] mb-6">Teknologi API</h2>
            <p class="text-gray-400 leading-relaxed text-lg text-justify mb-8">
              Website ini mendemonstrasikan integrasi api dari <span class="text-white font-bold">PokéAPI</span> dengan website <span class="text-white font-bold">Himakom Pokédex</span> itu sendiri dengan hanya melakukan fetching item atau atribut yang dibutuhkan pada suatu halaman (pagination) seperti data statistik, tipe, hingga aset visual resmi Pokémon secara real time.


            </p>
            
            <div class="flex flex-wrap gap-3">
              <span class="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-[#27F5B7] uppercase tracking-widest">Nuxt 4</span>
              <span class="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-blue-400 uppercase tracking-widest">Tailwind CSS</span>
              <span class="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold text-orange-400 uppercase tracking-widest">Pinia Store</span>
            </div>
          </div>

          <div class="p-10 border-2 border-dashed border-white/10 rounded-[40px] flex flex-col items-center justify-center text-center">
            <img src="/assets/img/fontbolt_Ireng.png" alt="Himakom" class="h-12 w-auto opacity-50 mb-6 invert brightness-200" />
            <p class="text-xs font-bold text-gray-500 uppercase tracking-[0.3em]">Himpunan Mahasiswa Komputer 2026</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main'
})
</script>

<style scoped>
</style>
