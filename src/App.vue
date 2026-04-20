<script setup lang="ts">
  import DesktopTitlebar from "./components/DesktopTitlebar.vue";
  import DesktopRootView from "./components/DesktopRootView.vue";
  import DesktopPane from "./components/DesktopPane.vue";

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
</script>

<template>
  <div class="zyneon-desktop">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop">
      <template #start>
        <p data-tauri-drag-region class="shadow px-3 py-0 bg-purple-800">EXPERIMENTAL<span class="bg-white text-purple-800">\</span>ALPHA</p>
        <p data-tauri-drag-region class="shadow px-3 py-0 bg-red-800">v27.0.1</p>
      </template>
    </DesktopTitlebar>
    <DesktopRootView class="zyneon-desktop-content">
      <template #left>
        <div class="w-80" data-tauri-drag-region></div>
      </template>
      <template #center>
        <DesktopPane class="border-l border-t border-zinc-700 bg-zinc-800 rounded-tl-3xl shadow-xl w-full h-full">

        </DesktopPane>
      </template>
    </DesktopRootView>
  </div>
</template>

<style scoped>
  .zyneon-desktop {
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }
</style>
