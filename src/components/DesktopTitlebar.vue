<script setup lang="ts">
  import '../assets/zyneon/css/components/titlebar.css';
  import DesktopTitlebarButtons from "./DesktopTitlebarButtons.vue";
  defineProps<{
    title: string
  }>()
</script>

<template>
  <div class="titlebar h-10 w-full">
    <div class="content h-10 w-full">
      <div data-tauri-drag-region class="start">

      </div>
      <strong data-tauri-drag-region class="title">
        {{ title }}
      </strong>
      <div data-tauri-drag-region class="end">
        <div class="window-controls-placeholder"></div>
      </div>
    </div>
    <DesktopTitlebarButtons />
  </div>
</template>