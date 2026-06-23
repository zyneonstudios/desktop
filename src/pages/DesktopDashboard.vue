<script setup lang="ts">
import '../assets/zyneon/css/dashboard.css';
import CardStructured from "../components/shared/desktopelements/CardStructured.vue";
import { Opener } from "../assets/zyneon/script/opener.ts"
import SpacerHorizontalTitled from "../components/shared/desktopelements/SpacerHorizontalTitled.vue";
import Card from "../components/shared/desktopelements/Card.vue";
</script>

<template>
  <div class="w-full h-full p-3">
    <SpacerHorizontalTitled title="Important" />
    <div class="flex gap-3 pb-3">
      <CardStructured @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop/issues/new')" class="bg-red-900 w-full opacity-75 hover:opacity-100 transition-all cursor-pointer text-white" border="1px solid var(--zyn-ov-brighter-200)">
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
          <strong>Just click here to report an issue on GitHub</strong>
        </template>
      </CardStructured>
      <CardStructured class="bg-blue-900 w-full opacity-65 text-white" border="1px solid var(--zyn-ov-brighter-200)">
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
          <strong>@nerotvlive</strong>
        </template>
      </CardStructured>
    </div>
    <SpacerHorizontalTitled title="Changelogs" />
    <div class="pb-3">
      <Card @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop/commits/main/')" border="1px solid var(--zyn-ov-brighter-200)" class="opacity-65 hover:opacity-100 transition-all cursor-pointer bg-yellow-600 w-fit py-1 px-2 text-white">(Work in progress) See GitHub commit history for now</Card>
    </div>
    <SpacerHorizontalTitled title="Roadmap (prog%)" />
    <div class="pb-3">
      <Card @click="Opener.openWithDefault('https://github.com/zyneonstudios/desktop#roadmap')" border="1px solid var(--zyn-ov-brighter-200)" class="opacity-65 hover:opacity-100 transition-all cursor-pointer bg-yellow-600 w-fit py-1 px-2 text-white">(Work in progress) See GitHub repo's README.md for now</Card>
    </div>
  </div>
</template>