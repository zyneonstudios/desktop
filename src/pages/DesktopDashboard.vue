<script setup lang="ts">
import '../assets/zyneon/css/dashboard.css';
import StructuredCardElement from "../components/shared/desktopelements/StructuredCardElement.vue";
import { Opener } from "../assets/zyneon/script/opener.ts"
</script>

<template>
  <div class="w-full h-full p-3">
    <h1 class="text-2xl font-bold">Dashboard</h1>

    <div @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop')">
      <StructuredCardElement class="bg-red-900 opacity-65 hover:opacity-100 transition-all cursor-pointer text-white mt-2" border="1px solid var(--zyn-ov-brighter-200)">
        <template #content>
          <p>
            <strong>
              Warning <i class="icon-message-square-warning absolute pl-1"></i>
            </strong><br>
            This application is in a very early stage of development – please use it with caution.<br>
            Report any issues you encounter to the developers on GitHub to support the project and help improve it.<br>
            <br>
            <strong>Just click on this card to open the GitHub page.</strong>
          </p>
        </template>
      </StructuredCardElement>
    </div>

  </div>
</template>