<script setup lang="ts">
  import DesktopTitlebar from "./components/DesktopTitlebar.vue";
  import DesktopRootView from "./components/DesktopRootView.vue";
  import DesktopPane from "./components/DesktopPane.vue";
  import DesktopSideMenu from "./components/DesktopSideMenu.vue";
  import DesktopDashboard from "./pages/DesktopDashboard.vue";
  import DesktopDiscover from "./pages/DesktopDiscover.vue";
  import DesktopDownloads from "./pages/DesktopDownloads.vue";
  import DesktopLibrary from "./pages/DesktopLibrary.vue";
  import DesktopSearch from "./pages/DesktopSearch.vue";
  import DesktopSettings from "./pages/DesktopSettings.vue";

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
</script>

<template>
  <div class="zyneon-desktop zyn-background-body" id="main">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop">
      <template #start>
        <div class="w-full h-full flex justify-start items-center" data-tauri-drag-region>
          <img alt="" class="z-n1 h-4 ml-3" src="./assets/zyneon/img/zyneon-desktop-title.png" data-tauri-drag-region>
        </div>
      </template>
      <template #title>
        <div class="hidden"></div>
      </template>
      <template #end>
        <div class="w-full h-full flex justify-end items-center pr-6" data-tauri-drag-region>
          ALPHA v27/0.4
        </div>
      </template>
    </DesktopTitlebar>
    <DesktopRootView class="zyneon-desktop-view">
      <template #left>
       <DesktopSideMenu>
         <template #top>
           <button class="btn" onclick="this.parentElement.parentElement.classList.toggle('active')">
             <i class="bi bi-list"></i>
             <span>Toggle menu</span>
           </button>
         </template>
         <template #center>
           <button class="btn">
             <i class="bi bi-grid-fill"></i>
             <span>Dashboard</span>
           </button>
           <button class="btn">
             <i class="bi bi-globe-europe-africa"></i>
             <span>Discover</span>
           </button>
           <button class="btn">
             <i class="bi bi-controller"></i>
             <span>Library</span>
           </button>
         </template>
         <template #bottom>
           <button class="btn" onclick="window.location.reload();">
             <i class="bi bi-arrow-clockwise"></i>
             <span>Reload</span>
           </button>
           <button class="btn" onclick="document.getElementById('main').classList.toggle('zyn-background-body');">
             <i class="bi bi-stars"></i>
             <span>Toggle background effect</span>
           </button>
           <button class="btn">
             <i class="bi bi-palette"></i>
             <span>Toggle theme</span>
           </button>
           <button class="btn">
             <i class="bi bi-gear"></i>
             <span>Settings</span>
           </button>
         </template>
       </DesktopSideMenu>
      </template>
      <template #center>
        <DesktopPane class="zyneon-desktop-content zyn-shadow-xl">
          <DesktopDashboard />
          <DesktopDiscover />
          <DesktopDownloads />
          <DesktopLibrary />
          <DesktopSearch />
          <DesktopSettings />
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

    .zyneon-desktop-view {

      .zyneon-desktop-content {
        background: var(--zyn-background-app);
        border-top-left-radius: var(--zyn-br-lg);
        width: 100%;
        border-top: 1px solid var(--zyn-ov-brighter-200);
        border-left: 1px solid var(--zyn-ov-brighter-200);
        position: relative;
        overflow: hidden;
        overflow-y: auto;
      }
    }
  }
</style>
