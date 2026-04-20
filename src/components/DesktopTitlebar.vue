<script setup lang="ts">
  import '../assets/zyneon/css/components/desktop-titlebar.css';
  import DesktopTitlebarButtons from "./DesktopTitlebarButtons.vue";
  defineProps<{
    title: string
  }>()
</script>

<template>
  <div class="titlebar h-10 w-full">
    <div class="content h-10 w-full">
      <div data-tauri-drag-region class="start">
        <slot name="start"></slot>
      </div>
      <strong data-tauri-drag-region class="title">
        <slot name="title">
          {{ title }}
        </slot>
      </strong>
      <div data-tauri-drag-region class="end">
        <slot name="end"></slot>
        <div class="window-controls-placeholder"></div>
      </div>
    </div>
    <DesktopTitlebarButtons />
  </div>
</template>