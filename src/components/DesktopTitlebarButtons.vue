<script setup lang="ts">
  import '../assets/zyneon/css/components/titlebar-buttons.css'
  import "bootstrap-icons/font/bootstrap-icons.min.css"
  import { getCurrentWindow } from '@tauri-apps/api/window';

  const appWindow = getCurrentWindow();

  const minimize = async () => {
    await appWindow.minimize();
  };

  const toggleMaximize = async () => {
    await appWindow.toggleMaximize();
  };

  const close = async () => {
    await appWindow.close();
  };
</script>

<template>
  <div class="titlebar-buttons flex w-fit absolute right-0 top-0">
    <button type="button" @click="minimize" class="hover:bg-zinc-700 hover:text-white w-10 h-10 hover:cursor-pointer"><i class="bi bi-dash-lg"></i></button>
    <button type="button" @click="toggleMaximize" class="hover:bg-zinc-600 hover:text-white w-10 h-10 hover:cursor-pointer"><i class="bi bi-square"></i></button>
    <button type="button" @click="close" class="hover:bg-red-600 hover:text-white w-10 h-10 hover:cursor-pointer"><i class="bi bi-x-lg"></i></button>
  </div>
</template>