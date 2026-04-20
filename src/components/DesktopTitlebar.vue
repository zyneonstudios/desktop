<script setup lang="ts">
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
        <img alt="" class="z-n1 h-4" data-tauri-drag-region src="../assets/zyneon/img/zyneon-desktop-title.png">
      </strong>
      <div data-tauri-drag-region class="end">
        <slot name="end"></slot>
        <div class="window-controls-placeholder"></div>
      </div>
    </div>
    <DesktopTitlebarButtons />
  </div>
</template>

<style scoped>
  .titlebar {
    position: relative;
    display: flex;
    width: 100%;
    height: 40px;
    overflow: hidden;
    user-select: none;

    .content {
      display: flex;
      overflow: hidden;

      .start, .end {
        width: 100%;
        min-height: 40px;
        max-height: 40px;
        display: flex;
        align-items: center;
        overflow: hidden;
      }

      .start {
        justify-content: start;
      }

      .title {
        min-width: fit-content;
        max-width: fit-content;
        display: flex;
        align-items: center;
        line-height: 1;
        font-weight: 500;
        margin-bottom: 0.2rem; /*revisit*/
      }

      .end {
        justify-content: end;

        .window-controls-placeholder {
          width: 120px;
          height: 40px;
        }
      }
    }
  }
</style>