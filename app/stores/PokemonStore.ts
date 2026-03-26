import { defineStore } from "pinia";
import { ref } from "vue";

export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  hp: number;
  attack: number;
  image: string;
  description?: string;
}

export const usePokemonStore = defineStore("pokemon", () => {
  const pokemons = ref<Pokemon[]>([]);
  const allPokemonLinks = ref<{ name: string; url: string }[]>([]);
  const loading = ref(false);
  const error = ref("");
  const totalCount = ref(0);
  const currentPage = ref(1);
  const itemsPerPage = ref(20);

  // Ambil daftar singkat semua pokemon (hanya nama & url) untuk pencarian global
  const fetchAllLinks = async () => {
    if (allPokemonLinks.value.length > 0) return;
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=2000");
      const data = await res.json();
      allPokemonLinks.value = data.results;
      totalCount.value = data.count;
    } catch (err) {
      console.error("Failed to fetch all links for search", err);
    }
  };

  const fetchPokemons = async (page = 1) => {
    loading.value = true;
    error.value = "";
    currentPage.value = page;
    const offset = (page - 1) * itemsPerPage.value;

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage.value}&offset=${offset}`);
      const data = await res.json();
      
      if (totalCount.value === 0) totalCount.value = data.count;

      const details = await fetchDetails(data.results);
      pokemons.value = details;
    } catch (err: any) {
      error.value = err.message || "Failed to fetch Pokémon";
    } finally {
      loading.value = false;
    }
  };

  const fetchDetails = async (results: { name: string; url: string }[]) => {
    return await Promise.all(
      results.map(async (p: any) => {
        // Fetch data dasar
        const detailRes = await fetch(p.url);
        const detailData = await detailRes.json();

        // Fetch data spesies untuk deskripsi (origin)
        let description = "No description available.";
        try {
          const speciesRes = await fetch(detailData.species.url);
          const speciesData = await speciesRes.json();
          // Cari flavor text bahasa inggris
          const entry = speciesData.flavor_text_entries.find((e: any) => e.language.name === 'en');
          if (entry) {
            description = entry.flavor_text.replace(/\f/g, ' ').replace(/\n/g, ' ');
          }
        } catch (e) {
          console.error("Failed to fetch description", e);
        }

        return {
          id: detailData.id,
          name: detailData.name,
          types: detailData.types.map((t: any) => t.type.name),
          hp: detailData.stats.find((s: any) => s.stat.name === "hp")?.base_stat ?? 0,
          attack: detailData.stats.find((s: any) => s.stat.name === "attack")?.base_stat ?? 0,
          image: detailData.sprites.other["official-artwork"].front_default || detailData.sprites.front_default || "",
          description: description
        } as Pokemon;
      })
    );
  };

  const searchPokemons = async (query: string) => {
    if (!query) {
      return fetchPokemons(currentPage.value);
    }

    loading.value = true;
    try {
      // Cari di daftar allPokemonLinks (Global)
      const matches = allPokemonLinks.value
        .filter(p => p.name.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 20); // Ambil 20 hasil teratas saja

      pokemons.value = await fetchDetails(matches);
    } catch (err: any) {
      error.value = "Gagal mencari Pokémon";
    } finally {
      loading.value = false;
    }
  };

  // CREATE, UPDATE, DELETE tetap sama...
  const addPokemon = (pokemon: Pokemon) => {
    pokemons.value.unshift(pokemon);
  };

  const updatePokemon = (id: number, updatedData: Partial<Pokemon>) => {
    const index = pokemons.value.findIndex(p => p.id === id);
    if (index !== -1) {
      pokemons.value[index] = { ...pokemons.value[index], ...updatedData };
    }
  };

  const deletePokemon = (id: number) => {
    pokemons.value = pokemons.value.filter(p => p.id !== id);
  };

  return { 
    pokemons, 
    loading, 
    error, 
    totalCount, 
    currentPage, 
    itemsPerPage, 
    fetchPokemons, 
    fetchAllLinks,
    searchPokemons,
    addPokemon, 
    updatePokemon, 
    deletePokemon 
  };
});
