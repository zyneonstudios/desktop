<script setup lang="ts">
  import '../../assets/zyneon/css/components/desktop-titlebar.css';
  import DesktopTitlebarButtons from "./DesktopTitlebarButtons.vue";

  withDefaults(
      defineProps<{
        title: string
        hideInsteadClose?: boolean
      }>(),
      {
        hideInsteadClose: false
      }
  )
</script>

<template>
  <div class="titlebar h-10 w-full">
    <div class="content h-10 w-full">
      <div data-tauri-drag-region class="start">
        <slot name="start"></slot>
      </div>
      <div data-tauri-drag-region class="title w-full flex-1">
        <slot name="title">
          {{ title }}
        </slot>
      </div>
      <div data-tauri-drag-region class="end">
        <slot name="end"></slot>
        <div class="window-controls-placeholder"></div>
      </div>
    </div>
    <DesktopTitlebarButtons :hideInsteadClose="hideInsteadClose" />
  </div>
</template>