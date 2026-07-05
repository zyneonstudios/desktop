<script setup lang="ts">
import DesktopTitlebar from "../../components/shared/DesktopTitlebar.vue";
import DesktopRootView from "../../components/shared/DesktopRootView.vue";
import DesktopPane from "../../components/shared/DesktopPane.vue";
import DesktopSideMenu from "../../components/shared/DesktopSideMenu.vue";
import { ref, onMounted } from 'vue'
import JEStart from "./pages/JEStart.vue";
import JEEditor from "./pages/JEEditor.vue";

function toggleMenu() {
  const navigation = document.getElementById('navigation');
  const button = document.getElementById('start-button');
  if(navigation?.classList.contains("active")) {
    navigation.classList.remove("active");
    button?.classList.remove("full");
  } else {
    navigation?.classList.add("active");
    button?.classList.add("full");
  }
}

function closeMenu() {
  const navigation = document.getElementById('navigation');
  const button = document.getElementById('start-button');
  navigation?.classList.remove("active");
  button?.classList.remove("full");
}

function showPage(page: string) {
  document.getElementById("editor")?.classList.remove("active");
  document.getElementById("editor")?.classList.add("hidden");
  document.getElementById("start")?.classList.remove("active");
  document.getElementById("start-button")?.classList.remove("active");
  document.getElementById(page)?.classList.add("active");
  document.getElementById(page)?.classList.remove("hidden");
  document.getElementById(page+"-button")?.classList.add("active");
  closeMenu();
}

document.addEventListener('contextmenu', (e) => {
  e.preventDefault()
})

const editor = ref(null);

onMounted(() => {
  showPage("start");
  document.documentElement.style.setProperty("--zyn-background-body", "radial-gradient(circle at bottom right, #00000000 0%, var(--zyn-background-color) 90%)");
  document.documentElement.style.setProperty("--zyn-background-color", "#131313");
})

function loadContent(path_or_url:string) {
  showPage("editor");
  editor.value.loadContent(path_or_url);
}

const handleWheel = (event: WheelEvent) => {
  const container = event.currentTarget as HTMLElement;
  const scrollSpeed = 0.5;
  const delta = event.deltaY || event.deltaX;
  container.scrollLeft += delta * scrollSpeed;
  event.preventDefault();
};
</script>

<template>
  <div class="zyneon-desktop zyn-background-body" id="main">
    <DesktopTitlebar class="zyneon-desktop-titlebar" title="Zyneon Desktop" id="titlebar">
      <template #start class="">
        <div class="w-fit h-full gap-2 flex justify-start items-center" data-tauri-drag-region>
          <img alt="" class="z-n1 h-4 ml-3 hidden" src="../../assets/zyneon/img/zyneon-desktop-title.png" data-tauri-drag-region>
          <span data-tauri-drag-region class="ml-3">JSON Explorer 3.0-alpha.1</span>
          <div class="relative z-1">
            <div class="flex gap-2 items-center">

            </div>
          </div>
        </div>
      </template>
      <template #title data-tauri-drag-region class="w-full">
        <div data-tauri-drag-region class="flex gap-2 justify-center items-center h-full w-full relative">
          <input type="text" style="width: 100%;" placeholder="Enter JSON path or URL" class="bg-transparent border-none outline-none zyn-br-sm zyn-ov-darker-700 py-1 px-2" @keyup.enter="loadContent($event.target.value);" />
        </div>
      </template>
      <template #end data-tauri-drag-region>
        <div class="w-fit h-full gap-2 flex justify-end items-center pr-6" data-tauri-drag-region />
      </template>
    </DesktopTitlebar>
    <div data-tauri-drag-region class="flex w-full overflow-hidden h-11 relative">
      <button id="start-button" class="btn" @click="showPage('start')">
        <i class="icon-home"></i>
        <span>Home</span>
      </button>
      <div class="w-full flex overflow-hidden tab-bar gap-1" data-tauri-drag-region @wheel="handleWheel">
        <button class="btn zyn-ov-brighter-100 templatebtn">
          <span>New Tab</span>
          <i class="icon-x"></i>
        </button>

      </div>
    </div>
    <DesktopRootView class="zyneon-desktop-view">
      <template #left data-tauri-drag-region>
        <DesktopSideMenu id="navigation" class="desktop-side-menu" data-tauri-drag-region>
          <template #top data-tauri-drag-region>
            <button id="toggle-button" class="btn" @click="toggleMenu();">
              <i class="icon-text-align-justify"></i>
              <span>Toggle menu</span>
            </button>
          </template>
          <template #center data-tauri-drag-region>
            <br>
          </template>
          <template #bottom data-tauri-drag-region>
            <button class="btn hover:background-color-blue-400" onclick="window.location.reload();">
              <i class="icon-rotate-cw"></i>
              <span>Reload (F5/CTRL + R)</span>
            </button>
            <hr class="opacity-20 mb-2">
            <button id="settings-button" class="btn" @click="showPage('settings')">
              <i class="icon-bolt"></i>
              <span>Settings</span>
            </button>
          </template>
        </DesktopSideMenu>
      </template>
      <template #center>
        <DesktopPane class="zyneon-desktop-content zyn-shadow-xl">
          <JEEditor ref="editor" id="editor" class="zyneon-desktop-page hidden"/>
          <JEStart id="start" class="zyneon-desktop-page active"/>
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

  #start-button {
    width: fit-content;
    margin: 0.25rem 0.3rem 0.25rem 0.475rem !important;

    span {
      display: none;
    }
  }

  #start-button.full {
    min-width: 14.75rem;

    span {
      display: unset;
    }
  }

  .tab-bar {
    align-items: center;

    .templatebtn {
      display: none !important;
    }

    button {
      border: 1px solid transparent;
      margin: 0;
      padding: 0.1rem 0.5rem 0.2rem 0.5rem;
      height: fit-content;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      min-width: fit-content;

      i, span {
        margin: 0;
        padding: 0;
      }

      i {
        display: none;
      }
    }

    button:hover {
      background: var(--zyn-ov-brighter-200);
      padding: 0.1rem 0.3rem 0.2rem 0.5rem;
      cursor: pointer;

      i {
        display: unset;
        margin-left: 0.25rem;
      }

      i:hover {
        color: var(--color-red-300);
      }
    }

    button.active {
      background: var(--zyn-ov-brighter-300);
      border: 1px solid var(--zyn-ov-brighter-200);
      padding: 0.1rem 0.5rem 0.2rem 0.5rem;
    }

    button.active:hover {
      background: var(--zyn-ov-brighter-400);
      border: 1px solid var(--zyn-ov-brighter-200);
      padding: 0.1rem 0.3rem 0.2rem 0.5rem;
    }
  }

  .zyneon-desktop-view {
    max-height: calc(100vh - 5rem);

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
