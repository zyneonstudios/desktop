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
  <div class="zyneon-desktop">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop">
      <template #start>
        <button class="btn btn-back"><i class="bi bi-chevron-left"></i></button>
        <button class="btn btn-forward"><i class="bi bi-chevron-right"></i></button>
      </template>
    </DesktopTitlebar>
    <DesktopRootView class="zyneon-desktop-view">
      <template #left>
       <DesktopSideMenu>
         <template>
           <button>Start</button>
           <button>Library</button>
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

    .zyneon-desktop-titlebar {
      .btn-back, .btn-forward {
        height: 30px;
        width: 30px;
        margin: 5px;
      }
    }

    .zyneon-desktop-view {

      .zyneon-desktop-content {
        background: var(--zyn-background-light);
        border-top-left-radius: var(--zyn-br-lg);
        width: 100%;
        border-top: 1px solid var(--zyn-ov-brighter-200);
        border-left: 1px solid var(--zyn-ov-brighter-200);
        position: relative;
      }
    }
  }
</style>
