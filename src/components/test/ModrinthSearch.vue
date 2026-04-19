<script setup lang="ts">
import { ref } from 'vue'
import { invoke } from '@tauri-apps/api/core'

const searchQuery = ref('')
const results = ref<any[]>([])

async function handleSearch() {
  try {
    results.value = await invoke('search_modrinth', { query: searchQuery.value })
  } catch (err) {
    console.error("Suche fehlgeschlagen:", err)
  }
}
</script>

<template>
  <div class="p-8 bg-neutral-900 min-h-screen text-white">
    <input
        v-model="searchQuery"
        @keyup.enter="handleSearch"
        placeholder="Mod suchen..."
        class="bg-neutral-800 p-2 rounded border border-white/10 w-full mb-4"
    />

    <div v-for="mod in results" :key="mod.title" class="p-4 bg-neutral-800 rounded mb-2 border border-white/5">
      <h3 class="font-bold text-modrinth">{{ mod.title }}</h3>
      <p class="text-sm text-neutral-400">{{ mod.description }}</p>
    </div>
  </div>
</template>