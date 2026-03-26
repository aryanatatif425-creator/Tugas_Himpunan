<template>
  <div class="fixed inset-0 z-[110] flex items-center justify-center p-4 overflow-y-auto">
    <div class="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl" @click="$emit('close')"></div>
    <div class="relative bg-white border border-white rounded-[48px] shadow-2xl max-w-2xl w-full p-10 lg:p-12 transform transition-all my-8">
      <h2 class="text-4xl font-black text-[#115C45] mb-8 tracking-tight">{{ isEditing ? 'Edit Pokémon' : 'Add New Pokémon' }}</h2>
      
      <form @submit.prevent="handleSubmit" class="space-y-8">
        <!-- Image Upload Section -->
        <div class="flex flex-col items-center gap-4 p-6 border-2 border-dashed border-gray-100 rounded-[32px] bg-gray-50/50">
          <div class="w-32 h-32 rounded-full overflow-hidden bg-white border border-gray-100 flex items-center justify-center relative">
            <img :src="formData.image || '/assets/img/pokemon.png'" class="w-full h-full object-contain" />
            <label class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer transition-opacity">
              <span class="text-white text-[10px] font-bold uppercase tracking-widest">Change</span>
              <input type="file" @change="handleImageUpload" class="hidden" accept="image/*" />
            </label>
          </div>
          <p class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Upload Pokemon Image</p>
        </div>

        <div class="space-y-2">
          <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Pokemon Name</label>
          <input v-model="formData.name" required type="text" placeholder="e.g. Teknomon" class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#115C45] font-bold focus:outline-none focus:ring-2 focus:ring-[#27F5B7]" />
        </div>
        
        <div class="grid grid-cols-2 gap-6">
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">HP Stat (Max 100)</label>
            <input v-model.number="formData.hp" required type="number" min="0" max="100" class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#115C45] font-bold focus:outline-none focus:ring-2 focus:ring-[#27F5B7]" />
          </div>
          <div class="space-y-2">
            <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Attack Stat (Max 100)</label>
            <input v-model.number="formData.attack" required type="number" min="0" max="100" class="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl text-[#115C45] font-bold focus:outline-none focus:ring-2 focus:ring-[#27F5B7]" />
          </div>
        </div>

        <!-- Official Types Selection -->
        <div class="space-y-4">
          <label class="text-[10px] font-black uppercase tracking-widest text-gray-400 px-1">Select Types (Max 2)</label>
          <div class="grid grid-cols-3 sm:grid-cols-6 gap-2 max-h-40 overflow-y-auto p-2 border border-gray-50 rounded-2xl bg-gray-50/30 text-[#115C45]">
            <button v-for="type in officialTypes" :key="type" 
                    type="button"
                    @click="toggleType(type)"
                    :class="[
                      'px-2 py-2 rounded-xl text-[9px] font-bold uppercase tracking-wider transition-all border',
                      formData.types?.includes(type) 
                        ? 'bg-[#115C45] text-white border-[#115C45] shadow-lg shadow-[#115C45]/20' 
                        : 'bg-white text-gray-400 border-gray-100 hover:border-[#27F5B7]/50'
                    ]">
              {{ type }}
            </button>
          </div>
        </div>

        <div class="pt-6 flex gap-4">
          <button type="button" @click="$emit('close')" class="flex-1 py-4 text-gray-400 font-bold uppercase tracking-widest text-xs">Cancel</button>
          <button type="submit" class="flex-[2] py-4 bg-[#115C45] text-white font-black rounded-2xl shadow-xl hover:scale-[1.02] transition-all uppercase tracking-widest text-xs">
            {{ isEditing ? 'Update Monster' : 'Create Monster' }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { Pokemon } from '~/stores/PokemonStore'

const props = defineProps<{
  isEditing: boolean
  initialData?: Partial<Pokemon>
}>()

const emit = defineEmits(['close', 'save'])

const officialTypes = [
  'normal', 'fire', 'water', 'grass', 'electric', 'ice', 
  'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 
  'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy'
]

const formData = ref<Partial<Pokemon>>({
  name: '',
  hp: 0,
  attack: 0,
  types: [],
  image: ''
})

onMounted(() => {
  if (props.initialData) {
    formData.value = { ...props.initialData, types: [...(props.initialData.types || [])] }
  }
})

const handleImageUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      formData.value.image = e.target?.result as string
    }
    reader.readAsDataURL(file)
  }
}

const toggleType = (type: string) => {
  if (!formData.value.types) formData.value.types = []
  
  const index = formData.value.types.indexOf(type)
  if (index > -1) {
    formData.value.types.splice(index, 1)
  } else if (formData.value.types.length < 2) {
    formData.value.types.push(type)
  }
}

const handleSubmit = () => {
  emit('save', { ...formData.value })
}
</script>
