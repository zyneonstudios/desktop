<script setup lang="ts">
import '../assets/zyneon/css/dashboard.css';
import StructuredCardElement from "../components/shared/desktopelements/StructuredCardElement.vue";
import { Opener } from "../assets/zyneon/script/opener.ts"
</script>

<template>
  <div class="w-full h-full p-3">
    <div class="flex gap-3 pb-3">
      <StructuredCardElement @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop')" class="bg-red-900 w-full opacity-65 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Warning <i class="icon-message-square-warning absolute pl-1"></i>
          </strong>
        </template>
        <template #content>
          <p>
            This application is in a very early stage of development – please use it with caution.<br>
            Report any issues you encounter to the developers on GitHub to support the project and help improve it.<br>
          </p>
        </template>
        <template #footer>
          <strong>Just click on this card to open the GitHub page.</strong>
        </template>
      </StructuredCardElement>
      <StructuredCardElement @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop')" class="bg-blue-900 w-full opacity-65 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
        <template #header>
          <strong>
            Note <i class="icon-info absolute pl-1"></i>
          </strong>
        </template>
        <template #content>
          <p>
            We are actively working on this project and welcome any feedback or contributions.<br>
            If you want to join this project, please contact us via GitHub or contact our leader on Discord.<span class="mx-1 px-1 zyn-br-sm opacity-10 hover:opacity-100 transition-all bg-transparent hover:bg-gray-800">(a server is work in progress)</span><br>
          </p>
        </template>
        <template #footer>
          <strong>@nerotvlive</strong><span class="pl-1">- Or click to open the GitHub page.</span>
        </template>
      </StructuredCardElement>
    </div>
    <hr>

  </div>
</template>