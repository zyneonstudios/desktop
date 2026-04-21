<script setup lang="ts">
  import '../../assets/zyneon/css/components/desktop-titlebar-buttons.css';
  import "bootstrap-icons/font/bootstrap-icons.min.css"
  import { WindowControls } from "../../assets/zyneon/script/windowControls.ts"
</script>

<template>
  <div class="titlebar-buttons flex w-fit absolute right-0 top-0">
    <button type="button" @click="WindowControls.minimize()"><i class="bi bi-dash-lg"></i></button>
    <button type="button" @click="WindowControls.toggleMaximize()" class="smaller"><i class="bi bi-square"></i></button>
    <button type="button" @click="WindowControls.close()" class="red"><i class="bi bi-x-lg"></i></button>
  </div>
</template>