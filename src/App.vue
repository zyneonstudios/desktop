<script setup lang="ts">
  import DesktopTitlebar from "./components/DesktopTitlebar.vue";
  import DesktopRootView from "./components/DesktopRootView.vue";
  import DesktopPane from "./components/DesktopPane.vue";
  import DesktopSideMenu from "./components/DesktopSideMenu.vue";

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
</script>

<template>
  <div class="zyneon-desktop" id="main">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop">
      <template #start>
        <div class="w-full h-full flex justify-start items-center" data-tauri-drag-region>
          <img alt="" class="z-n1 h-4 ml-3" src="./assets/zyneon/img/zyneon-desktop-title.png" data-tauri-drag-region>
          <label>
            <input type="text" placeholder="placeholder for smartbar" class="outline-none zyn-background-darkest py-0 ml-2 px-3 rounded-xl opacity-50 cursor-not-allowed" disabled>
          </label>
        </div>
      </template>
      <template #title>
        <div class="hidden"></div>
      </template>
      <template #end>
        <div class="w-full h-full flex justify-end items-center pr-6" data-tauri-drag-region>
          ALPHA v27/0.3
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
             <i class="icon-layout-dashboard"></i>
             <span>Dashboard</span>
           </button>
           <button class="btn">
             <i class="bi bi-globe-europe-africa"></i>
             <span>Discover</span>
           </button>
           <button class="btn">
             <i class="icon-library"></i>
             <span>Library</span>
           </button>
         </template>
         <template #bottom>
           <button class="btn" onclick="window.location.reload();">
             <i class="bi bi-arrow-clockwise"></i>
             <span>Reload</span>
           </button>
           <button class="btn" onclick="document.getElementById('main').classList.toggle('zyn-background-body');">
             <i class="icon-sparkles"></i>
             <span>Toggle background effect</span>
           </button>
           <button class="btn">
             <i class="icon-sun-moon"></i>
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
      }
    }
  }
</style>
