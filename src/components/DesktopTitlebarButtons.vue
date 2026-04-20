<script setup lang="ts">
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
    <button type="button" @click="minimize"><i class="bi bi-dash-lg"></i></button>
    <button type="button" @click="toggleMaximize" class="smaller"><i class="bi bi-square"></i></button>
    <button type="button" @click="close" class="red"><i class="bi bi-x-lg"></i></button>
  </div>
</template>

<style scoped>
.titlebar-buttons {
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding: 0;
    margin: 0;
    box-shadow: none;
    border-radius: 0;
    width: 40px;
    height: 40px;
    background: none;
  }

  button:hover {
    background: var(--zyn-background-light);
  }

  button.red:hover {
    background: var(--color-red-600);
  };

  button.smaller {
    font-size: 0.8em;
  }
}
</style>