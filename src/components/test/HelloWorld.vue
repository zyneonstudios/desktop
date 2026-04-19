<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { invoke } from '@tauri-apps/api/core'

const versions = ref<string[]>([])

onMounted(async () => {
  try {
    versions.value = await invoke('get_minecraft_versions')
  } catch (error) {
    console.error("api-call-err:", error)
  }
})
</script>

<template>
  <div>
    <h2>test yee:</h2>
    <ul>
      <li v-for="v in versions" :key="v">{{ v }}</li>
    </ul>
  </div>
</template>