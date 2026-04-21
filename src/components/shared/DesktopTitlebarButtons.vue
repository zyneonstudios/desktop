<script setup lang="ts">
  import '../../assets/zyneon/css/components/desktop-titlebar-buttons.css';
  import "bootstrap-icons/font/bootstrap-icons.min.css"
  import { WindowControls } from "../../assets/zyneon/script/windowControls.ts"
</script>

<template>
  <div class="titlebar-buttons flex w-fit absolute right-0 top-0">
    <button type="button" @click="WindowControls.minimize()"><i class="icon-minus"></i></button>
    <button type="button" @click="WindowControls.toggleMaximize()" class="smaller"><i class="icon-square"></i></button>
    <button type="button" @click="WindowControls.close()" class="red"><i class="icon-x"></i></button>
  </div>
</template>