<script setup lang="ts">
  import DesktopTitlebar from "./components/DesktopTitlebar.vue";
  import DesktopRootView from "./components/DesktopRootView.vue";
</script>

<template>
  <div class="zyneon-desktop">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop" />
    <DesktopRootView class="zyneon-desktop-content">
      <template #left>
        TEST RECHTS
      </template>
      <template #center>
        TEST MITTE
      </template>
      <template #right>
        TEST LINKS
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
