<script setup lang="ts">
import {invoke} from '@tauri-apps/api/core';
import {ref} from 'vue';
import MonacoEditor from 'monaco-editor-vue3';

let jsonContent = ref('');

async function loadContent(input: string) {
  try {
    if (input.startsWith('http://') || input.startsWith('https://')) {
      const response = await fetch(input);
      if (!response.ok) throw new Error('Could not load URL');
      jsonContent.value = await response.text();
    }

    else {
      let cleanPath = decodeURIComponent(input);
      if (cleanPath.startsWith('file://')) {
        cleanPath = cleanPath.replace('file://', '');
      }
      jsonContent.value = await invoke<string>('read_local_file', {path: cleanPath});
    }
  } catch (error) {
    console.error("Couldn't load content, an error occurred:", error);
    jsonContent.value = `// Couldn't load content, an error occurred: \n// ${error}`;
  }
}

defineExpose({ loadContent });

const editorOptions = {
  automaticLayout: true,
  readOnly: true,
};
</script>

<template>
  <div class="h-full w-full overflow-hidden">
    <MonacoEditor
        v-model:value="jsonContent"
        language="json"
        theme="vs-dark"
        :options="editorOptions"
        class="h-full w-full"
    />
  </div>
</template>