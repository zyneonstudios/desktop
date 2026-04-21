<script setup lang="ts">
  import DesktopTitlebar from "./components/shared/DesktopTitlebar.vue";
  import DesktopRootView from "./components/shared/DesktopRootView.vue";
  import DesktopPane from "./components/shared/DesktopPane.vue";
  import DesktopSideMenu from "./components/shared/DesktopSideMenu.vue";
  import DesktopDashboard from "./pages/DesktopDashboard.vue";
  import DesktopDiscover from "./pages/DesktopDiscover.vue";
  import DesktopDownloads from "./pages/DesktopDownloads.vue";
  import DesktopLibrary from "./pages/DesktopLibrary.vue";
  import DesktopSearch from "./pages/DesktopSearch.vue";
  import DesktopSettings from "./pages/DesktopSettings.vue";
  import { WindowControls } from "./assets/zyneon/script/windowControls.ts"
  import BadgeElement from "./components/shared/desktopelements/BadgeElement.vue";

  function showPage(page: string) {
    document.getElementById("dashboard")?.classList.remove("active");
    document.getElementById("discover")?.classList.remove("active");
    document.getElementById("downloads")?.classList.remove("active");
    document.getElementById("library")?.classList.remove("active");
    document.getElementById("search")?.classList.remove("active");
    document.getElementById("settings")?.classList.remove("active");
    document.getElementById("dashboard-button")?.classList.remove("active");
    document.getElementById("discover-button")?.classList.remove("active");
    document.getElementById("downloads-button")?.classList.remove("active");
    document.getElementById("library-button")?.classList.remove("active");
    document.getElementById("search-button")?.classList.remove("active");
    document.getElementById("settings-button")?.classList.remove("active");
    document.getElementById(page)?.classList.add("active");
    document.getElementById(page+"-button")?.classList.add("active");
    if(page === "dashboard") {
      WindowControls.openMenu("navigation");
    } else {
      WindowControls.closeMenu("navigation");
    }
  }

  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
</script>

<template>
  <div class="zyneon-desktop zyn-background-body" id="main">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop" id="titlebar">
      <template #start>
        <div class="w-full h-full gap-2 flex justify-start items-center" data-tauri-drag-region>
          <img alt="" class="z-n1 h-4 ml-3" src="./assets/zyneon/img/zyneon-desktop-title.png" data-tauri-drag-region>
          <div class="relative z-1">
            <div class="absolute top-0 right-0 h-full w-full" data-tauri-drag-region></div>
            <div style="z-index: -1" class="flex gap-2 items-center">
              <BadgeElement background="var(--color-red-300)" >
                <strong class="text-red-900">ALPHA v27/0.8</strong>
              </BadgeElement>
            </div>
          </div>
        </div>
      </template>
      <template #title>
        <div class="hidden"></div>
      </template>
      <template #end>
        <div class="w-full h-full gap-2 flex justify-end items-center pr-6" data-tauri-drag-region>

        </div>
      </template>
    </DesktopTitlebar>
    <DesktopRootView class="zyneon-desktop-view">
      <template #left>
       <DesktopSideMenu id="navigation" class="zyneon-desktop-side-menu">
         <template #top>
           <button class="btn" onclick="this.parentElement.parentElement.classList.toggle('active')">
             <i class="bi bi-list"></i>
             <span>Toggle menu</span>
           </button>
         </template>
         <template #center>
           <button id="dashboard-button" class="btn active" @click="showPage('dashboard')">
             <i class="bi bi-grid-fill"></i>
             <span>Dashboard</span>
           </button>
           <button id="discover-button" class="btn" @click="showPage('discover')">
             <i class="bi bi-globe-europe-africa"></i>
             <span>Discover</span>
           </button>
           <button id="library-button" class="btn" @click="showPage('library')">
             <i class="icon-library"></i>
             <span>Library</span>
           </button>
         </template>
         <template #bottom>
           <button class="btn hover:background-color-blue-400" onclick="window.location.reload();">
             <i class="bi bi-arrow-clockwise"></i>
             <span>Reload (F5/CTRL + R)</span>
           </button>
           <button class="btn" disabled>
             <i class="bi bi-bell"></i>
             <span>Notifications</span>
           </button>
           <hr class="opacity-20 mb-2">
           <button id="downloads-button" class="btn" @click="showPage('downloads')">
             <i class="bi bi-download"></i>
             <span>Downloads</span>
           </button>
           <button id="settings-button" class="btn" @click="showPage('settings')">
             <i class="bi bi-gear"></i>
             <span>Settings</span>
           </button>
         </template>
       </DesktopSideMenu>
      </template>
      <template #center>
        <DesktopPane class="zyneon-desktop-content zyn-shadow-xl">
          <DesktopDashboard id="dashboard" class="zyneon-desktop-page active" />
          <DesktopDiscover id="discover" class="zyneon-desktop-page" />
          <DesktopDownloads id="downloads" class="zyneon-desktop-page" />
          <DesktopLibrary id="library" class="zyneon-desktop-page" />
          <DesktopSearch id="search" class="zyneon-desktop-page" />
          <DesktopSettings id="settings" class="zyneon-desktop-page" />
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

        .zyneon-desktop-page {
          display: none;
        }

        .zyneon-desktop-page.active {
          display: block;
        }
      }
    }
  }
</style>
