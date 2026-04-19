<script setup lang="ts">
  import DesktopTitlebar from "./components/DesktopTitlebar.vue";
  import DesktopRootView from "./components/DesktopRootView.vue";
  import DesktopPane from "./components/DesktopPane.vue";
</script>

<template>
  <div class="zyneon-desktop">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop">
      <template #start>
        <p class="shadow px-3 py-1 bg-purple-800">EXPERIMENTAL<span class="bg-white text-purple-800">\</span>ALPHA</p>
        <p class="shadow px-3 py-1 bg-red-800">v27.0.1</p>
      </template>
    </DesktopTitlebar>
    <DesktopRootView class="zyneon-desktop-content">
      <template #left>
        <button type="button" class="bg-amber-50 px-3 py-2 w-fit h-fit min-h-fit m-10 opacity-0">MENU PLACEHOLDER</button>
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
